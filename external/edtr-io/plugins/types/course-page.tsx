/**
 * This file is part of Serlo.org.
 *
 * Copyright (c) 2013-2021 Serlo Education e.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @copyright Copyright (c) 2013-2021 Serlo Education e.V.
 * @license   http://www.apache.org/licenses/LICENSE-2.0 Apache License 2.0
 * @link      https://github.com/serlo-org/serlo.org for the canonical source repository
 */
import { EditorPlugin, EditorPluginProps, string } from '@edtr-io/plugin'
import * as React from 'react'

import {
  entity,
  Controls,
  editorContent,
  HeaderInput,
  entityType,
} from './common'
import { RevisionHistory, Settings } from './helpers/settings'
import { useLoggedInData } from '@/contexts/logged-in-data-context'

export const coursePageTypeState = entityType(
  {
    ...entity,
    icon: string('explanation'),
    title: string(''),
    content: editorContent(),
  },
  {}
)

export const coursePageTypePlugin: EditorPlugin<
  typeof coursePageTypeState,
  { skipControls: boolean }
> = {
  Component: CoursePageTypeEditor,
  state: coursePageTypeState,
  config: {
    skipControls: false,
  },
}

function CoursePageTypeEditor(
  props: EditorPluginProps<
    typeof coursePageTypeState,
    { skipControls: boolean }
  >
) {
  const { title, icon, content } = props.state

  React.useEffect(() => {
    if (!['explanation', 'play', 'question'].includes(icon.value)) {
      icon.set('explanation')
    }
  }, [icon])

  const loggedInData = useLoggedInData()
  if (!loggedInData) return null
  const editorStrings = loggedInData.strings.editor

  return (
    <article>
      {props.renderIntoToolbar(
        <RevisionHistory
          id={props.state.id.value}
          currentRevision={props.state.revision.value}
          onSwitchRevision={props.state.replaceOwnState}
        />
      )}
      {props.renderIntoSettings(
        <Settings>
          <Settings.Select
            label="Icon"
            state={icon}
            options={[
              {
                label: editorStrings.coursePage.explanation,
                value: 'explanation',
              },
              {
                label: editorStrings.coursePage.video,
                value: 'play',
              },
              {
                label: editorStrings.coursePage.question,
                value: 'question',
              },
            ]}
          />
        </Settings>
      )}
      <h1>
        {props.editable ? (
          <HeaderInput
            placeholder={editorStrings.coursePage.title}
            value={title.value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              title.set(e.target.value)
            }}
          />
        ) : (
          <span itemProp="name">{title.value}</span>
        )}
      </h1>
      {content.render()}
      {props.config.skipControls ? null : (
        <Controls subscriptions {...props.state} />
      )}
    </article>
  )
}
