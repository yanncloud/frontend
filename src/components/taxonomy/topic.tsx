import { faFile, faTrash } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import { Fragment, useState } from 'react'
import { RatingProps } from 'react-simple-star-rating'

import { NewFolderPrototypeProps } from './new-folder-prototype'
import { SubTopic } from './sub-topic'
import { TopicCategories } from './topic-categories'
import { FaIcon } from '../fa-icon'
import { StaticInfoPanel } from '../static-info-panel'
import type { DonationsBannerProps } from '@/components/content/donations-banner-experiment/donations-banner'
import { LicenseNotice } from '@/components/content/license/license-notice'
import { UserTools } from '@/components/user-tools/user-tools'
import { useAB } from '@/contexts/ab'
import { useInstanceData } from '@/contexts/instance-context'
import { TaxonomyData, TopicCategoryType, UuidType } from '@/data-types'
import { TaxonomyTermType } from '@/fetcher/graphql-types/operations'
import { abSubmission } from '@/helper/ab-submission'
import { isProduction } from '@/helper/is-production'
import { renderArticle } from '@/schema/article-renderer'

export interface TopicProps {
  data: TaxonomyData
}

const headingsDataTemp: { [key: number]: string } = {
  29637: 'Baumdiagramm zeichnen',
  29581: 'Abzählen mit Baumdiagramm',
  5011: 'Passende Zahlen bauen',
  5007: 'Kombinationen finden',
}

const DonationsBanner = dynamic<DonationsBannerProps>(() =>
  import(
    '@/components/content/donations-banner-experiment/donations-banner'
  ).then((mod) => mod.DonationsBanner)
)

const Rating = dynamic<RatingProps>(() =>
  import('react-simple-star-rating').then((mod) => mod.Rating)
)

const NewFolderPrototype = dynamic<NewFolderPrototypeProps>(() =>
  import('./new-folder-prototype').then((mod) => mod.NewFolderPrototype)
)

export function Topic({ data }: TopicProps) {
  const { strings } = useInstanceData()

  const ab = useAB()

  const [hasFeedback, setHasFeedback] = useState(false)

  const isExerciseFolder = data.taxonomyType === TaxonomyTermType.ExerciseFolder
  const isTopic = data.taxonomyType === TaxonomyTermType.Topic

  const hasExercises = data.exercisesContent.length > 0
  const defaultLicense = hasExercises ? getDefaultLicense() : undefined

  return (
    <>
      {data.trashed && renderTrashedNotice()}
      {renderHeader()}
      {renderUserTools({ aboveContent: true })}
      <div className="min-h-1/2">
        <div className="mt-6 sm:mb-5">
          {data.description &&
            renderArticle(data.description, `taxdesc${data.id}`)}
        </div>

        {renderSubterms()}

        {renderExercises()}

        {isTopic && <TopicCategories data={data} full />}

        {isExerciseFolder && data.events && (
          <TopicCategories
            data={data}
            categories={[TopicCategoryType.events]}
            full
          />
        )}
      </div>
      {defaultLicense && <LicenseNotice data={defaultLicense} />}

      {/* Temporary donations banner trial */}
      {isExerciseFolder ? (
        <DonationsBanner
          id={data.id}
          entityData={{
            ...data,
            typename: UuidType.TaxonomyTerm,
            isUnrevised: false,
          }}
        />
      ) : null}

      {renderUserTools()}
    </>
  )

  function renderTrashedNotice() {
    return (
      <StaticInfoPanel icon={faTrash} doNotIndex>
        {strings.content.trashedNotice}
      </StaticInfoPanel>
    )
  }

  function renderHeader() {
    return (
      <h1 className="serlo-h1 mb-10 mt-8" itemProp="name">
        {data.title}
        {isExerciseFolder && (
          <span title={strings.entities.exerciseFolder}>
            {' '}
            <FaIcon
              icon={faFile}
              className="align-baseline text-[1.43rem] text-brand-400"
            />{' '}
          </span>
        )}
      </h1>
    )
  }

  function renderSubterms() {
    return (
      data.subterms &&
      data.subterms.map((child) => (
        <Fragment key={child.title}>
          <SubTopic data={child} subid={child.id} id={data.id} />
        </Fragment>
      ))
    )
  }

  function renderExercises() {
    if (
      ab?.experiment === 'dreisatzv0' &&
      (!isProduction || ab.group === 'b')
    ) {
      // here is the place for new exercise view
      return (
        <>
          <NewFolderPrototype data={data} />
          <div className="h-24"></div>
          {renderSurvey()}
        </>
      )
    }
    if (ab?.experiment === 'reorder_trig' && ab.group === 'b') {
      const a1 = data.exercisesContent[0]
      const a2 = data.exercisesContent[1]
      if (a1.context.id === 57741 && a2.context.id === 52806) {
        a1.positionOnPage = 1
        a2.positionOnPage = 0
        data.exercisesContent[0] = a2
        data.exercisesContent[1] = a1
      }
    }
    return (
      hasExercises &&
      data.exercisesContent &&
      data.exercisesContent.map((exercise, i) => {
        return (
          <Fragment key={i}>
            {ab?.experiment === 'headings' &&
              ab.group === 'b' &&
              headingsDataTemp[exercise.context.id] && (
                <div className="mx-side -mb-10 mt-16 text-xl font-bold">
                  {headingsDataTemp[exercise.context.id]}
                </div>
              )}
            {renderArticle(
              [exercise],
              `tax${data.id}`,
              `ex${exercise.context.id}`
            )}
            {i === (ab?.experiment === 'headings' ? 3 : 1) && renderSurvey()}
          </Fragment>
        )
      })
    )
  }

  function renderSurvey() {
    if (!ab) return
    if (ab.topicId !== data.id) return
    return (
      <div className=" mx-auto my-12  max-w-[420px] rounded-xl bg-brand-50 p-4 text-center ">
        <strong>Wie gut gefällt dir dieser Aufgabenordner?</strong>
        <Rating
          className="mt-4 [&_svg]:inline"
          readonly={hasFeedback}
          onClick={(rate) => {
            //submit_event(`rate_quest_${core.ws.quest.id}_${rate}`, core)
            abSubmission({
              entityId: -1,
              experiment: ab.experiment,
              group: ab.group,
              result: rate.toString(),
              topicId: ab.topicId,
              type: 'rating',
            })
            setHasFeedback(true)
          }}
        />
        <div className={clsx('mt-3', hasFeedback ? '' : 'invisible')}>
          Danke für dein Feedback! &#10084;
        </div>
      </div>
    )
  }

  function renderUserTools(setting?: { aboveContent?: boolean }) {
    return (
      <UserTools
        data={{ type: UuidType.TaxonomyTerm, ...data }}
        id={data.id}
        aboveContent={setting?.aboveContent}
      />
    )
  }

  function getDefaultLicense() {
    for (let i = 0; i < data.exercisesContent.length; i++) {
      const content = data.exercisesContent[i]

      if (content.type === 'exercise-group') {
        if (content.license?.isDefault) return content.license
      } else {
        if (content.task?.license?.isDefault) return content.task.license
        if (content.solution?.license?.isDefault)
          return content.solution.license
      }
    }
    //no part of collection has default license so don't show default notice.
    return undefined
  }
}
