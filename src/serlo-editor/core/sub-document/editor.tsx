import * as R from 'ramda'
import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { HotKeys, IgnoreKeys } from 'react-hotkeys'

import { SubDocumentProps } from '.'
import {
  runChangeDocumentSaga,
  focus,
  focusNext,
  focusPrevious,
  selectDocument,
  selectMayManipulateSiblings,
  selectParent,
  insertPluginChildAfter,
  selectIsDocumentEmpty,
  selectIsFocused,
  redo,
  removePluginChild,
  undo,
  useAppSelector,
  selectFocusTree,
  useAppDispatch,
  store,
} from '../../store'
import { StateUpdater } from '../../types/internal__plugin-state'
import { usePlugin, usePlugins } from '../contexts/plugins-context'
import { DocumentEditor } from '@/serlo-editor/editor-ui/document-editor'
import { EditorPlugin } from '@/serlo-editor/types/internal__plugin'

const hotKeysKeyMap = {
  FOCUS_PREVIOUS: 'up',
  FOCUS_NEXT: 'down',
  INSERT_DEFAULT_PLUGIN: 'enter',
  DELETE_EMPTY: ['backspace', 'del'],
  UNDO: ['ctrl+z', 'command+z'],
  REDO: ['ctrl+y', 'command+y', 'ctrl+shift+z', 'command+shift+z'],
}
type HotKeysHandlers = {
  [K in keyof typeof hotKeysKeyMap]: (keyEvent?: KeyboardEvent) => void
}

export function SubDocumentEditor({ id, pluginProps }: SubDocumentProps) {
  const [hasSettings, setHasSettings] = useState(false)
  const [hasToolbar, setHasToolbar] = useState(false)
  const dispatch = useAppDispatch()
  const document = useAppSelector((state) => selectDocument(state, id))
  const isDocumentEmpty = useAppSelector((state) =>
    selectIsDocumentEmpty(state, id)
  )
  const mayManipulateSiblings = useAppSelector((state) =>
    selectMayManipulateSiblings(state, id)
  )
  const focused = useAppSelector((state) => selectIsFocused(state, id))
  const plugins = usePlugins()
  const plugin = usePlugin(document?.plugin)?.plugin as EditorPlugin

  const containerRef = useRef<HTMLDivElement>(null)
  const settingsRef = useRef<HTMLDivElement>(
    window.document.createElement('div')
  )
  const toolbarRef = useRef<HTMLDivElement>(
    window.document.createElement('div')
  )
  const autofocusRef = useRef<HTMLInputElement & HTMLTextAreaElement>(null)

  useEffect(() => {
    if (focused) {
      setTimeout(() => {
        if (autofocusRef.current) {
          autofocusRef.current.focus()
        }
      })
    }
  }, [focused])

  useEffect(() => {
    if (
      focused &&
      containerRef.current &&
      document &&
      plugin &&
      !plugin.state.getFocusableChildren(document.state).length
    ) {
      containerRef.current.focus()
    }
    // `document` should not be part of the dependencies because we only want to call this once when the document gets focused
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focused, plugin])

  const hotKeysHandlers = useMemo((): HotKeysHandlers => {
    return {
      FOCUS_PREVIOUS: (e) => {
        handleKeyDown(e, () => {
          dispatch(focusPrevious(selectFocusTree(store.getState())))
        })
      },
      FOCUS_NEXT: (e) => {
        handleKeyDown(e, () => {
          dispatch(focusNext(selectFocusTree(store.getState())))
        })
      },
      INSERT_DEFAULT_PLUGIN: (e) => {
        handleKeyDown(e, () => {
          const parent = selectParent(store.getState(), id)
          if (!parent) return
          dispatch(
            insertPluginChildAfter({
              parent: parent.id,
              sibling: id,
              plugins,
            })
          )
        })
      },
      DELETE_EMPTY: (e) => {
        if (isDocumentEmpty) {
          handleKeyDown(e, () => {
            if (!e) return
            if (mayManipulateSiblings) {
              const parent = selectParent(store.getState(), id)
              if (!parent) return

              if (e.key === 'Backspace') {
                dispatch(focusPrevious(selectFocusTree(store.getState())))
              } else if (e.key === 'Delete') {
                dispatch(focusNext(selectFocusTree(store.getState())))
              }
              dispatch(
                removePluginChild({ parent: parent.id, child: id, plugins })
              )
            }
          })
        }
      },
      // needs workaround for https://github.com/edtr-io/edtr-io/issues/272
      UNDO: () => {
        void dispatch(undo())
      },
      REDO: () => {
        void dispatch(redo())
      },
    }

    function handleKeyDown(e: KeyboardEvent | undefined, next: () => void) {
      if (
        e &&
        plugin &&
        typeof plugin.onKeyDown === 'function' &&
        !plugin.onKeyDown(e)
      ) {
        return
      }
      e && e.preventDefault()
      next()
    }
  }, [id, plugins, plugin, dispatch, isDocumentEmpty, mayManipulateSiblings])

  const handleFocus = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      // Find closest document
      const target = (e.target as HTMLDivElement).closest('[data-document]')

      if (!focused && target === containerRef.current) {
        dispatch(focus(id))
      }
    },
    [focused, id, dispatch]
  )

  const renderIntoOldSettings = useCallback(
    (children: React.ReactNode) => {
      return (
        <RenderIntoSettings
          setHasSettings={setHasSettings}
          settingsRef={settingsRef}
        >
          {children}
        </RenderIntoSettings>
      )
    },
    [settingsRef]
  )

  const renderIntoSideToolbar = useCallback(
    (children: React.ReactNode) => {
      return (
        <RenderIntoToolbar
          setHasToolbar={setHasToolbar}
          toolbarRef={toolbarRef}
        >
          {children}
        </RenderIntoToolbar>
      )
    },
    [toolbarRef]
  )

  return useMemo(() => {
    if (!document) {
      // eslint-disable-next-line no-console
      console.warn('SubDocumentEditor -> Document does not exist')
      return null
    }
    if (!plugin) {
      // eslint-disable-next-line no-console
      console.warn('SubDocumentEditor -> Plugin does not exist')
      return null
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const defaultConfig =
      typeof plugin.config === 'function' ? plugin.config() : plugin.config
    const overrideConfig = (pluginProps && pluginProps.config) || {}
    const config = R.mergeDeepRight(defaultConfig, overrideConfig)

    const onChange = (
      initial: StateUpdater<unknown>,
      additional: {
        executor?: ReturnType<
          typeof runChangeDocumentSaga
        >['payload']['state']['executor']
        reverse?: ReturnType<typeof runChangeDocumentSaga>['payload']['reverse']
      } = {}
    ) => {
      dispatch(
        runChangeDocumentSaga({
          id,
          plugins,
          state: {
            initial,
            executor: additional.executor,
          },
          reverse: additional.reverse,
        })
      )
    }

    // Take the default state for this plugin (set in serlo-editor/plugins/[plugin_type]/index.tsx) and add the individual plugin state obtained from the redux state.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const state = plugin.state.init(document.state, onChange)

    const isInlineChildEditor =
      Object.hasOwn(config, 'isInlineChildEditor') &&
      (config.isInlineChildEditor as boolean)

    return (
      <HotKeys keyMap={hotKeysKeyMap} handlers={hotKeysHandlers} allowChanges>
        <div
          className="outline-none"
          onMouseDown={handleFocus}
          ref={containerRef}
          data-document
          tabIndex={-1}
        >
          <DocumentEditor
            hasSettings={hasSettings}
            hasToolbar={hasToolbar}
            focused={focused}
            renderOldSettingsContent={
              pluginProps && pluginProps.renderOldSettingsContent
            }
            renderSideToolbar={pluginProps && pluginProps.renderSideToolbar}
            isInlineChildEditor={isInlineChildEditor}
            settingsRef={settingsRef}
            toolbarRef={toolbarRef}
          >
            <plugin.Component
              renderIntoOldSettings={renderIntoOldSettings}
              renderIntoSideToolbar={renderIntoSideToolbar}
              containerRef={containerRef}
              id={id}
              editable
              focused={focused}
              config={config}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
              state={state}
              autofocusRef={autofocusRef}
            />
          </DocumentEditor>
        </div>
      </HotKeys>
    )
  }, [
    document,
    plugins,
    plugin,
    pluginProps,
    handleFocus,
    hasSettings,
    hasToolbar,
    focused,
    renderIntoOldSettings,
    renderIntoSideToolbar,
    id,
    hotKeysHandlers,
    dispatch,
  ])
}

function RenderIntoSettings({
  children,
  setHasSettings,
  settingsRef,
}: {
  children: React.ReactNode
  setHasSettings: (value: boolean) => void
  settingsRef: React.MutableRefObject<HTMLDivElement>
}) {
  useEffect(() => {
    setHasSettings(children ? true : false)
  })
  if (!settingsRef.current) return null
  return createPortal(<IgnoreKeys>{children}</IgnoreKeys>, settingsRef.current)
}

function RenderIntoToolbar({
  children,
  setHasToolbar,
  toolbarRef,
}: {
  children: React.ReactNode
  setHasToolbar: (value: boolean) => void
  toolbarRef: React.MutableRefObject<HTMLDivElement>
}) {
  useEffect(() => {
    setHasToolbar(true)
  })
  if (!toolbarRef.current) return null
  return createPortal(children, toolbarRef.current)
}
