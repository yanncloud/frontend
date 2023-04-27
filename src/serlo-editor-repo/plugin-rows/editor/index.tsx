import * as React from 'react'

import { RowsPluginConfig, RowsProps, RowsPluginState } from '..'
import { useScopedSelector } from '../../core'
import { StateTypeReturnType } from '../../plugin'
import { getPlugins, isFocused } from '../../store'
import { styled } from '../../ui'
import { useRowsConfig } from '../config'
import { RegistryContext } from '../registry-context'
import { RowsRenderer } from '../renderer'
import { Menu } from './menu'
import { RowRenderer } from './render'
import { Separator } from './separator'

const DropContainer = styled.div({
  position: 'relative',
  // increase dropZone
  marginLeft: '-50px',
  paddingLeft: '50px',
})

function RowEditor({
  config,
  openMenu,
  index,
  row,
  rows,
  isLastInDocument = false,
}: {
  config: RowsPluginConfig
  openMenu(index: number): void
  index: number
  rows: StateTypeReturnType<RowsPluginState>
  row: StateTypeReturnType<RowsPluginState>[0]
  isLastInDocument?: boolean
}) {
  const focused = useScopedSelector(isFocused(row.id))
  const plugins = useScopedSelector(getPlugins())
  const dropContainer = React.useRef<HTMLDivElement>(null)

  return (
    <DropContainer key={row.id} ref={dropContainer}>
      <RowRenderer
        config={config}
        row={row}
        rows={rows}
        index={index}
        plugins={plugins}
        dropContainer={dropContainer}
      />
      <Separator
        config={config}
        focused={focused}
        onClick={() => {
          openMenu(index + 1)
        }}
        isLast={isLastInDocument}
      />
    </DropContainer>
  )
}

export function RowsEditor(props: RowsProps) {
  const config = useRowsConfig(props.config)
  const [menu, setMenu] = React.useState<
    | {
        index: number
        onClose: (pluginState: { plugin: string; state?: unknown }) => void
      }
    | undefined
  >(undefined)

  function addNewRow(insertIndex: number) {
    const pluginState = {
      plugin: 'text',
      state: [{ type: 'p', children: [{ text: '/' }] }],
    }
    setTimeout(() => {
      props.state.insert(insertIndex, pluginState)
    })
  }

  if (!props.editable) return <RowsRenderer {...props} />

  const isEditorForRootOfDocument = props.id === 'root'
  const isDocumentEmpty = props.state.length === 0

  return (
    <RegistryContext.Provider value={config.plugins}>
      <div
        style={{
          position: 'relative',
          marginTop: '25px',
          marginBottom: isEditorForRootOfDocument ? '75px' : undefined,
        }}
      >
        <Separator
          config={config}
          isFirst
          isLast={isEditorForRootOfDocument && isDocumentEmpty}
          focused={props.state.length === 0}
          onClick={() => {
            addNewRow(0)
          }}
        />
        {props.state.map((row, index) => {
          const isLastRowEditor = index === props.state.length - 1
          return (
            <RowEditor
              config={config}
              key={row.id}
              openMenu={() => {
                addNewRow(index + 1)
              }}
              index={index}
              rows={props.state}
              row={row}
              isLastInDocument={isEditorForRootOfDocument && isLastRowEditor}
            />
          )
        })}
        {menu ? <Menu menu={menu} setMenu={setMenu} config={config} /> : null}
      </div>
    </RegistryContext.Provider>
  )
}
