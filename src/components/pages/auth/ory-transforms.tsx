import {
  UiNode,
  UiNodeInputAttributes,
  UiNodeInputAttributesTypeEnum,
} from '@ory/client'

export const changeButtonTypeOfSSOProvider = (uiNode: UiNode) => {
  // Need to manually get rid of the submit type of the provider as it causes
  // two data consent checkboxes to be rendered. It also takes priority over
  // keyboard submits, once the enter key is pressed, the SSO button captures it
  // as long as it has type: 'submit'
  const attributes = uiNode.attributes as UiNodeInputAttributes
  if (attributes.name === 'provider') {
    return {
      ...uiNode,
      attributes: {
        ...uiNode.attributes,
        type: UiNodeInputAttributesTypeEnum.Button,
      },
    }
  }

  return uiNode
}
