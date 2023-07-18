import { faClone, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { useCallback } from 'react'

import { DropdownButton } from './dropdown-button'
import { useEditorStrings } from '@/contexts/logged-in-data-context'
import {
  insertPluginChildAfter,
  removePluginChild,
  selectParent,
  selectSerializedDocument,
  store,
  useAppDispatch,
} from '@/serlo-editor/store'

interface DefaultControlsProps {
  pluginId: string
}

// TODO: Think about renaming to "DefaultPluginControls" to make the scope explicit
export function DefaultControls({ pluginId }: DefaultControlsProps) {
  const dispatch = useAppDispatch()
  const pluginStrings = useEditorStrings().plugins

  const handleDuplicatePlugin = useCallback(() => {
    const parent = selectParent(store.getState(), pluginId)
    if (!parent) return

    const document = selectSerializedDocument(store.getState(), pluginId)
    if (!document) return

    dispatch(
      insertPluginChildAfter({
        parent: parent.id,
        sibling: pluginId,
        document: document,
      })
    )
  }, [pluginId, dispatch])

  const handleRemovePlugin = useCallback(() => {
    const parent = selectParent(store.getState(), pluginId)
    if (!parent) return

    // TODO: If this is the only plugin inside the rows parent
    // we should probably replace it with an empty text plugin instead?

    dispatch(
      removePluginChild({
        parent: parent.id,
        child: pluginId,
      })
    )
  }, [dispatch, pluginId])

  return (
    <>
      <DropdownButton
        onClick={handleDuplicatePlugin}
        label={pluginStrings.rows.duplicate}
        icon={faClone}
      />
      <DropdownButton
        onClick={handleRemovePlugin}
        label={pluginStrings.rows.remove}
        icon={faTrashAlt}
      />
    </>
  )
}
