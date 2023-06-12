import { forwardRef } from 'react'

import { legacyEditorTheme } from '@/helper/colors'
import { styled } from '@/serlo-editor-repo/ui'

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string
  textfieldWidth?: string
  editorInputWidth?: string
}

const InputInner = styled.input({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: `2px solid ${legacyEditorTheme.color}`,
  color: legacyEditorTheme.color,
  '&:focus': {
    outline: 'none',
    borderBottom: `2px solid ${legacyEditorTheme.primary.background}`,
  },
})

const InputRefForward: React.ForwardRefRenderFunction<
  HTMLInputElement,
  InputProps
> = (props, ref) => {
  return <InputInner {...props} ref={ref} />
}

export const LinkControlsInput = forwardRef(InputRefForward)
