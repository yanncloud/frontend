import { faFileImport } from '@fortawesome/free-solid-svg-icons'
import request from 'graphql-request'
import NProgress from 'nprogress'
import { useState } from 'react'

import { endpoint } from '@/api/endpoint'
import { UuidUrlInput } from '@/components/author/uuid-url-input'
import { FaIcon } from '@/components/fa-icon'
import { ModalWithCloseButton } from '@/components/modal-with-close-button'
import { useInstanceData } from '@/contexts/instance-context'
import { useEditorStrings } from '@/contexts/logged-in-data-context'
import { UuidType } from '@/data-types'
import {
  MainUuidQuery,
  MainUuidQueryVariables,
} from '@/fetcher/graphql-types/operations'
import { dataQuery } from '@/fetcher/query'
import { isProduction } from '@/helper/is-production'
import { showToastNotice } from '@/helper/show-toast-notice'
import { triggerSentry } from '@/helper/trigger-sentry'
import {
  DeserializeError,
  editorResponseToState,
  isError,
} from '@/serlo-editor-integration/editor-response-to-state'
import { PluginToolbarButton } from '@/serlo-editor/core'
import { SerloAddButton } from '@/serlo-editor/plugin/helpers/serlo-editor-button'

export function ExternalRevisionLoader<T>({
  entityType,
  onSwitchRevision,
}: {
  entityType: UuidType
  onSwitchRevision: (data: T) => void
}) {
  const [showRevisions, setShowRevisions] = useState(false)

  const { strings } = useInstanceData()
  const editorStrings = useEditorStrings()

  if (isProduction) return null

  const exerciseTypes = [UuidType.Exercise, UuidType.GroupedExercise]
  const supportedEntityTypes = exerciseTypes.includes(entityType)
    ? exerciseTypes
    : [entityType]

  return (
    <div>
      <span onClick={() => setShowRevisions(true)}>
        <PluginToolbarButton
          icon={<FaIcon icon={faFileImport} className="text-xl" />}
          label={editorStrings.edtrIo.importOther}
          className="p-0.5 pt-2"
        />
      </span>

      <ModalWithCloseButton
        isOpen={showRevisions}
        onCloseClick={() => setShowRevisions(false)}
        title={editorStrings.edtrIo.importOther}
      >
        <>
          <p className="serlo-p">
            {editorStrings.edtrIo.importOtherExplanation}
            <br />
            <br />
            <b>{editorStrings.edtrIo.importOtherWarning}</b>
          </p>
          <div className="mx-side">
            <UuidUrlInput
              renderButtons={(
                _typename: string,
                id: number,
                _title: string,
                _taxType?: unknown,
                coursePageId?: number
              ) => (
                <SerloAddButton
                  text={editorStrings.edtrIo.importOtherButton}
                  onClick={() =>
                    fetchRevisionDataByUuid(coursePageId ? coursePageId : id)
                  }
                />
              )}
              supportedEntityTypes={supportedEntityTypes}
              supportedTaxonomyTypes={[]}
            />
          </div>
        </>
      </ModalWithCloseButton>
      <style jsx global>{`
        .ReactModalPortal .ReactModal__Content {
          /* this css colides with save-modal.tsx */
          width: 900px;
          max-width: 90vw;
          max-height: 80vh;
          top: 2rem;
          overflow-y: auto;
          padding-top: 0;
          transform: translate(-50%, 0);
        }

        .ReactModalPortal .ReactModal__Content table {
          margin-top: 3rem;
          width: auto;
        }
      `}</style>
    </div>
  )

  function fetchRevisionDataByUuid(id: number) {
    NProgress.start()

    void (async () => {
      try {
        const data = await request<MainUuidQuery, MainUuidQueryVariables>(
          endpoint,
          dataQuery,
          {
            id,
          }
        )
        const { uuid } = data
        const converted = editorResponseToState(uuid!)
        if (isError(converted) || !uuid) {
          handleError(
            `editor: revision conversion | ${
              (converted as DeserializeError).error
            }`
          )
        } else {
          const displayId =
            Object.hasOwn(uuid, 'currentRevision') &&
            uuid.currentRevision &&
            Object.hasOwn(uuid.currentRevision, 'id')
              ? uuid.currentRevision.id
              : uuid.id

          onSwitchRevision({
            ...(converted.initialState.state as T),
            revision: 0,
            id: 0,
            meta_title: '',
            meta_description: '',
            changes: `${strings.unrevisedRevisions.importedContentIdentifier}: https://serlo.org/${displayId}`,
          } as T)
          setShowRevisions(false)
        }
      } catch (e) {
        handleError('editor: revision conversion failed')
      } finally {
        NProgress.done()
      }
    })()
  }
}

function handleError(message: string) {
  void triggerSentry({ message })
  void showToastNotice('Sorry, could not load revision 🥵', 'warning')
}
