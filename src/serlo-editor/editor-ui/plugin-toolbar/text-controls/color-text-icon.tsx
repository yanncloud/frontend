import { editorColorText, EditorSvgIcon } from '@/serlo-editor/editor-ui'

interface ColorTextIconProps {
  color: string
}

export const ColorTextIcon = ({ color }: ColorTextIconProps) => (
  <span className="relative inline-block align-middle">
    <span className="flex flex-col items-center">
      <EditorSvgIcon pathData={editorColorText} />
      <span
        className="absolute bottom-0 w-[80%] rounded-[4px] border-2"
        style={{ borderColor: color }}
      />
    </span>
  </span>
)
