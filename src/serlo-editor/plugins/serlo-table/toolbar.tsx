import { SerloTableProps } from '.'
import { getTableType } from './editor'
import { TableType } from './renderer'
import { useEditorStrings } from '@/contexts/logged-in-data-context'
import { tw } from '@/helper/tw'
import { PluginToolbar } from '@/serlo-editor/editor-ui/plugin-toolbar'
import { DefaultControls } from '@/serlo-editor/editor-ui/plugin-toolbar/dropdown/default-controls'
import { EditorPluginType } from '@/serlo-editor-integration/types/editor-plugin-type'

export const SerloTableToolbar = ({ id, state }: SerloTableProps) => {
  const tableStrings = useEditorStrings().plugins.serloTable

  const tableType = getTableType(state.tableType.value)

  return (
    <PluginToolbar
      pluginId={id}
      pluginType={EditorPluginType.SerloTable}
      pluginSettings={
        <select
          className={tw`
                mr-2 cursor-pointer rounded-md !border border-gray-500
              bg-editor-primary-100 px-1 py-[1px] text-sm transition-all
              hover:bg-editor-primary-200 focus:bg-editor-primary-200 focus:outline-none
              `}
          value={tableType}
          onChange={(e) => state.tableType.set(e.target.value)}
        >
          <option value={TableType.OnlyColumnHeader}>
            {tableStrings.columnHeaders}
          </option>
          <option value={TableType.OnlyRowHeader}>
            {tableStrings.rowHeaders}
          </option>
          <option value={TableType.ColumnAndRowHeader}>
            {tableStrings.columnAndRowHeaders}
          </option>
        </select>
      }
      pluginControls={<DefaultControls pluginId={id} />}
      className="-mt-1.5"
    />
  )
}
