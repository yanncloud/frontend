import { GeogebraProps } from '.'
import { EditorInput } from '../../editor-ui'
import { GeogebraRenderer } from './renderer'
import { useEditorStrings } from '@/contexts/logged-in-data-context'

export function GeogebraEditor(props: GeogebraProps) {
  const { focused, editable, state } = props

  const editorStrings = useEditorStrings()

  if (!editable) return <GeogebraRenderer {...props} />

  return (
    <>
      <GeogebraRenderer {...props} disableCursorEvents={editable} />
      {focused ? (
        <div className="mt-4">
          <EditorInput
            label={editorStrings.geogebra.urlOrId}
            placeholder="12345"
            value={state.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              state.set(e.target.value)
            }}
            inputWidth="70%"
            width="100%"
            ref={props.autofocusRef}
          />
        </div>
      ) : null}
    </>
  )
}
