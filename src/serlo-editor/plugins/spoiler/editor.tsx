import clsx from 'clsx'

import type { SpoilerProps } from '.'
import { SpoilerRenderer } from './renderer'
import { useEditorStrings } from '@/contexts/logged-in-data-context'
import { tw } from '@/helper/tw'
import { PluginToolbar } from '@/serlo-editor/editor-ui/plugin-toolbar'
import { PluginDefaultTools } from '@/serlo-editor/editor-ui/plugin-toolbar/plugin-tool-menu/plugin-default-tools'
import { EditorPluginType } from '@/serlo-editor-integration/types/editor-plugin-type'

export function SpoilerEditor(props: SpoilerProps) {
  const { state, editable, id, focused } = props
  const editorStrings = useEditorStrings()

  const title = editable ? (
    <input
      onChange={(e) => state.title.set(e.target.value)}
      value={state.title.value}
      placeholder={editorStrings.plugins.spoiler.enterATitle}
      className="-my-1 w-full rounded-md bg-transparent p-1 focus:bg-brand-100 focus:outline-none"
    />
  ) : (
    state.title.value
  )

  return (
    <>
      {renderPluginToolbar()}
      <div
        className={clsx(
          focused && '[&>div]:rounded-t-none',
          editable &&
            tw`
            [&>div>div]:mt-4
            [&_.plugin-toolbar]:ml-[2px]
            [&_.plugin-toolbar]:rounded-none
            [&_.rows-child:first-child_.plugin-toolbar:before]:hidden
          `
        )}
      >
        <SpoilerRenderer
          title={<>{title}</>}
          content={state.content.render()}
          openOverwrite={editable} // should include focused but that's unreliable atm.
        />
      </div>
    </>
  )

  function renderPluginToolbar() {
    if (!focused) return null

    return (
      <PluginToolbar
        pluginType={EditorPluginType.Spoiler}
        pluginControls={<PluginDefaultTools pluginId={id} />}
        className="!left-[21px] top-[-33px] w-[calc(100%-37px)]"
      />
    )
  }
}
