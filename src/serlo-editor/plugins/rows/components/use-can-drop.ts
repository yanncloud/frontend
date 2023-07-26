import { checkIsAllowedNesting } from '../utils/nesting'
import {
  store,
  findParent,
  selectDocument,
  selectAncestorPluginIds,
  selectAncestorPluginTypes,
  selectFocusTree,
  FocusTreeNode,
} from '@/serlo-editor/store'
import { EditorPluginType } from '@/serlo-editor-integration/types/editor-plugin-type'

export function useCanDrop(
  id: string,
  draggingAbove: boolean,
  allowedPlugins: (EditorPluginType | string)[] | undefined
) {
  return function (dragId?: string) {
    return (
      dragId &&
      isAllowedChildPlugin(dragId) &&
      isAllowedNestedPlugin(dragId) &&
      !wouldDropInOwnChildren(dragId) &&
      !wouldDropAtInitialPosition(dragId)
    )
  }

  function isAllowedChildPlugin(dragId: string) {
    if (!allowedPlugins) return true
    const doc = selectDocument(store.getState(), dragId)
    return doc && allowedPlugins.includes(doc.plugin)
  }

  function isAllowedNestedPlugin(dragId: string) {
    const typesOfAncestors = selectAncestorPluginTypes(store.getState(), id)
    if (typesOfAncestors === null) return true

    const dragDocument = selectDocument(store.getState(), dragId)
    if (dragDocument === null) return true

    return checkIsAllowedNesting(dragDocument?.plugin, typesOfAncestors)
  }

  function wouldDropInOwnChildren(dragId: string) {
    const focusPath = selectAncestorPluginIds(store.getState(), id) || []
    return focusPath.includes(dragId)
  }

  function wouldDropAtInitialPosition(dragId: string) {
    const focusTree = selectFocusTree(store.getState())
    if (!focusTree) return true
    const parent = findParent(focusTree, dragId)

    const dropIndex = getChildPosition(parent, id)
    // Different parents, so definitely not dropped at initial position
    if (dropIndex === null) return false
    const dragIndex = getChildPosition(parent, dragId)

    return draggingAbove
      ? dragIndex === dropIndex - 1
      : dragIndex === dropIndex + 1
  }

  function getChildPosition(
    parent: FocusTreeNode | null,
    childId: string
  ): number | null {
    if (!parent) return null
    const position = (parent.children ?? []).findIndex(
      (node) => node.id === childId
    )
    return position > -1 ? position : null
  }
}
