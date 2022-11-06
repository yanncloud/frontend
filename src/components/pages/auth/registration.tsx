import { faInfoCircle } from '@fortawesome/free-solid-svg-icons/faInfoCircle'
import {
  SelfServiceRegistrationFlow,
  SubmitSelfServiceRegistrationFlowBody,
} from '@ory/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { kratos } from '@/auth/kratos'
import { Flow, FlowType, handleFlowError } from '@/components/auth/flow'
import { Link } from '@/components/content/link'
import { PageTitle } from '@/components/content/page-title'
import { StaticInfoPanel } from '@/components/static-info-panel'
import { useInstanceData } from '@/contexts/instance-context'
import { replacePlaceholders } from '@/helper/replace-placeholders'

export function Registration() {
  const [flow, setFlow] = useState<SelfServiceRegistrationFlow>()
  const router = useRouter()
  const { lang, strings } = useInstanceData()
  const { return_to: returnTo, flow: flowId } = router.query
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false)

  useEffect(() => {
    if (!router.isReady || flow) return

    if (flowId) {
      kratos
        .getSelfServiceRegistrationFlow(String(flowId))
        .then(({ data }) => setFlow(data))
        .catch(handleFlowError(router, FlowType.registration, setFlow, strings))
      return
    }

    kratos
      .initializeSelfServiceRegistrationFlowForBrowsers(
        returnTo ? String(returnTo) : undefined
      )
      .then(({ data }) => setFlow(data))
      .catch(handleFlowError(router, FlowType.registration, setFlow, strings))
  }, [flowId, router, router.isReady, returnTo, flow, strings])

  async function onSubmit(values: SubmitSelfServiceRegistrationFlowBody) {
    const valuesWithLanguage = { ...values, 'traits.language': lang }

    await router
      .push(`${router.pathname}?flow=${String(flow?.id)}`, undefined, {
        shallow: true,
      })
      .then(() =>
        kratos
          .submitSelfServiceRegistrationFlow(
            String(flow?.id),
            valuesWithLanguage
          )
          .then(() => {
            setIsSuccessfullySubmitted(true)
          })
          .catch(
            handleFlowError(router, FlowType.registration, setFlow, strings)
          )
      )
  }

  return (
    <>
      <PageTitle headTitle title={strings.auth.registerTitle} />
      {isSuccessfullySubmitted ? (
        <StaticInfoPanel key={1} type="info" icon={faInfoCircle}>
          {strings.auth.messages[1080001]}{' '}
          <Link
            className="text-brand serlo-link font-bold"
            href="/auth/verification"
          >
            {strings.auth.verificationLink}
          </Link>
        </StaticInfoPanel>
      ) : null}
      {flow ? <Flow flow={flow} onSubmit={onSubmit} /> : null}
      {renderAgreement()}
    </>
  )

  function renderAgreement() {
    return replacePlaceholders(strings.auth.registrationAgreement, {
      signup: <em>{strings.auth.signUp}</em>,
      privacypolicy: (
        <a
          className="text-brand serlo-link font-bold"
          href="/privacy"
          target="_blank"
        >
          {strings.entities.privacyPolicy}
        </a>
      ),
      terms: (
        <a
          className="text-brand serlo-link font-bold"
          href="/21654"
          target="_blank"
        >
          {strings.auth.terms}
        </a>
      ),
    })
  }
}
