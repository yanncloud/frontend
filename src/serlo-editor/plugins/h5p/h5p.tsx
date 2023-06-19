import { useEffect, useState } from 'react'

import { H5p, parseH5pUrl } from '@/components/content/h5p'
import { EditorInput } from '@/serlo-editor/editor-ui'
import {
  EditorPlugin,
  EditorPluginProps,
  string,
  StringStateType,
} from '@/serlo-editor/plugin'

export type H5pPluginState = StringStateType
export type H5pProps = EditorPluginProps<H5pPluginState>

const h5pLibraryWhitelist = [
  'H5P.DragQuestion',
  'H5P.Blanks',
  'H5P.DragText',
  'H5P.ImageHotspotQuestion',
  'H5P.MultiMediaChoice',
  'H5P.ImageMultipleHotspotQuestion',
  'H5P.MemoryGame',
  'H5P.Flashcards',
  'H5P.MarkTheWords',
]

export const H5pPlugin: EditorPlugin<H5pPluginState> = {
  Component: H5pEditor,
  config: {},
  state: string(),
}

// Note: This plugin will not be translated for now, as i18n work is deprioritized
function H5pEditor({ state, autofocusRef }: H5pProps) {
  const hasState = !!state.value

  const [mode, setMode] = useState<'edit' | 'loading' | 'preview'>(
    hasState ? 'preview' : 'edit'
  )

  const [error, setError] = useState('')
  const [downloadUrl, setDownloadUrl] = useState('')

  function validateInput(str: string) {
    if (!parseH5pUrl(str)) {
      setError('Die URL muss mit https://app.lumi.education/run/ beginnen.')
    } else {
      setError('')
    }
  }

  async function checkContent() {
    const id = parseH5pUrl(state.value)
    if (!id) {
      validateInput(state.value)
    } else {
      try {
        const res = await fetch('https://app.lumi.education/api/v1/run/' + id)
        const json = (await res.json()) as {
          downloadPath: string
          integration: {
            contents: { [key: string]: { library: string } }
          }
        }
        const mainLib = Object.values(
          json.integration.contents
        )[0].library.split(' ')[0]

        if (!h5pLibraryWhitelist.includes(mainLib)) {
          setError(
            'Unerlaubter Inhaltstyp - nutze bitte nur die vier genannten Inhaltstypen'
          )
          setMode('edit')
        } else {
          setMode('preview')
          setDownloadUrl(json.downloadPath)
        }
      } catch (e) {
        // e.g. invalid id
        setError(
          'H5P-Inhalt konnte nicht geladen werden, prüfe nochmal die URL'
        )
        setMode('edit')
      }
    }
  }

  useEffect(() => {
    if (hasState) {
      validateInput(state.value)
      void checkContent()
    }
    // only run on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (mode === 'edit' || mode === 'loading') {
    return (
      <>
        <h2>Einfügen von H5P-Inhalt</h2>
        <div>
          Gehe in folgenden Schritten vor, um einen H5P-Inhalt zu erstellen und
          einzufügen:
          <ul>
            <li>
              Besuche{' '}
              <a
                href="https://app.lumi.education/"
                target="_blank"
                rel="noreferrer"
              >
                Lumi Cloud
              </a>
              .
            </li>
            <li>
              Registriere dich mit deiner E-Mail-Adresse und melde dich an.
            </li>
            <li>
              Klicke auf &quot;Neuen Inhalt erstellen&quot; und wähle eines der
              folgenden Inhaltstypen:
              <ul>
                <li>Fill in the Blanks</li>
                <li>Drag the Words</li>
                <li>Find the Hotspot</li>
                <li>Drag and Drop</li>
                <li>Bildauswahl (Image Choice)</li>
                <li>
                  Hotspots in Bild suchen (mehrere) (Find Multiple Hotspots)
                </li>
                <li>Memory</li>
                <li>Flashcards</li>
                <li>Mark The Words</li>
              </ul>
            </li>
            <li>
              Erstelle deinen Inhalt, speichere ihn und klicke dann auf
              &quot;Inhalt bereitstellen&quot;.
            </li>
            <li>Füge die Verknüpfung zur Bereitstellung hier ein:</li>
          </ul>
        </div>
        <div>
          <div className="mt-4">
            <EditorInput
              label="URL zu Lumi-Bereitstellung"
              placeholder="https://app.lumi.education/run/J3j0eR"
              value={state.value}
              onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                const val = e.target.value
                validateInput(val)
                state.set(val)
              }}
              inputWidth="70%"
              width="100%"
              ref={autofocusRef}
            />
          </div>
        </div>
        {error && <p className="mx-side mt-2 text-red-500">{error}</p>}
        <p>
          <button
            className="serlo-button mt-2 bg-brandgreen-300 disabled:cursor-default disabled:bg-gray-300"
            disabled={state.value === '' || error !== '' || mode === 'loading'}
            onClick={() => {
              setMode('loading')
              void checkContent()
            }}
          >
            {mode === 'loading' ? '... wird geladen ...' : 'Einfügen'}
          </button>
        </p>
        <p className="mt-4 text-sm text-gray-500">
          <small>
            Hinweis: Um existierende Inhalte zu nutzen, lade diese herunter,
            lade sie in deinen Account hoch und stelle sie dort bereit.
          </small>
        </p>
      </>
    )
  }

  return (
    <>
      <p className="mb-8">
        H5P-Inhalt: <strong>{state.value}</strong>
        <button
          onClick={() => {
            setMode('edit')
          }}
          className="serlo-button ml-4 bg-brand-300"
        >
          Ändern
        </button>
        {downloadUrl && (
          <a
            href={`https://app.lumi.education${downloadUrl}`}
            className="serlo-link ml-3"
            target="_blank"
            rel="noreferrer"
          >
            herunterladen
          </a>
        )}
      </p>
      <H5p url={state.value} context={{ entityId: -1, revisionId: -1 }} />
    </>
  )
}
