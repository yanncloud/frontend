import clsx from 'clsx'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { LoadingSpinner } from '../loading/loading-spinner'
import { Breadcrumbs } from '../navigation/breadcrumbs'
import { shouldUseFeature } from '../user/profile-experimental'
import { useInstanceData } from '@/contexts/instance-context'
import { SerloEditor } from '@/edtr-io/serlo-editor'
import { EditorPageData } from '@/fetcher/fetch-editor-data'
import { SetEntityMutationData } from '@/helper/mutations/use-set-entity-mutation/types'
import { useSetEntityMutation } from '@/helper/mutations/use-set-entity-mutation/use-set-entity-mutation'

export function AddRevision({
  initialState,
  type,
  needsReview,
  id,
  breadcrumbsData,
}: EditorPageData) {
  const { strings } = useInstanceData()

  const backlink = {
    label: strings.revisions.toContent,
    url: `/${id}`,
  }

  const setEntityMutation = useSetEntityMutation()

  const [cookieReady, setCookieReady] = useState(false)

  useEffect(() => {
    if (window.location.hostname === 'localhost') {
      setCookieReady(true)
    } else {
      fetch('/auth/password/change')
        .then((res) => res.text())
        .then(() => {
          setCookieReady(true)
        })
        .catch(() => {})
    }
  }, [])

  if (!cookieReady) return <LoadingSpinner noText />

  const supportedTypes = [
    'Applet',
    'Article',
    'Course',
    'CoursePage',
    'Event',
    'Solution',
    'Video',
    'Exercise',
    'ExerciseGroup',
    'GroupedExercise',
  ]
  // 'Page'
  // 'Taxonomy'
  // 'User'

  return (
    <>
      <Breadcrumbs
        data={breadcrumbsData ? [...breadcrumbsData, backlink] : [backlink]}
        noIcon
      />
      <div className="controls-portal sticky top-0 z-[94] bg-white" />
      <div
        className={clsx(
          'max-w-[816px] mx-auto mb-24 edtr-io serlo-editor-hacks'
        )}
      >
        <SerloEditor
          getCsrfToken={() => {
            const cookies = typeof window === 'undefined' ? {} : Cookies.get()
            return cookies['CSRF']
          }}
          needsReview={needsReview}
          onSave={async (data: SetEntityMutationData) => {
            if (
              shouldUseFeature('addRevisionMutation') &&
              supportedTypes.includes(type)
            ) {
              // eslint-disable-next-line no-console
              console.log('using api endpoint to save')

              // refactor and rename when removing legacy code
              const skipReview = data.controls.checkout
              const _needsReview = skipReview ? false : needsReview

              const success = await setEntityMutation(
                {
                  ...data,
                  //@ts-expect-error resolve, when old code is removed
                  __typename: type,
                },
                _needsReview,
                initialState
              )
              return new Promise((resolve, reject) => {
                if (success) resolve()
                else reject()
              })
            }

            return new Promise((resolve, reject) => {
              fetch(window.location.pathname, {
                method: 'POST',
                headers: {
                  'X-Requested-with': 'XMLHttpRequest',
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  'X-From': 'legacy-serlo.org',
                },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then(
                  (data: {
                    success: boolean
                    redirect: string
                    errors: object
                  }) => {
                    if (data.success && data.redirect) {
                      resolve()

                      // override behaviour for taxonomy term
                      if (
                        data.redirect.includes('/taxonomy/term/update/') ||
                        data.redirect.includes('/taxonomy/term/create/')
                      ) {
                        const id = data.redirect.match(/[\d]+$/)
                        if (id && id[0]) {
                          window.location.href = `/${id[0]}`
                          return
                        }
                      }

                      window.location.href =
                        data.redirect.length > 5
                          ? data.redirect
                          : window.location.href
                    } else {
                      // eslint-disable-next-line no-console
                      console.log(data.errors)
                      reject()
                    }
                  }
                )
                .catch((value) => {
                  // eslint-disable-next-line no-console
                  console.log(value)
                  reject(value)
                })
            })
          }}
          type={type}
          initialState={initialState}
        />
      </div>
    </>
  )
}
