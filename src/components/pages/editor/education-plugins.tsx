import {
  faCubes,
  faExpand,
  faFileLines,
  faListCheck,
  faNewspaper,
  faSquareCheck,
  faSquareRootVariable,
  faTarp,
  faCaretSquareDown,
  faCode,
  faFilm,
  faImages,
  faParagraph,
  faTable,
  faEquals,
} from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'
import { useRef, useState } from 'react'

import { h2Class } from './editor-presentation'
import {
  boxExample,
  highlighExample,
  inputExample,
  MCExample,
  SCExample,
  spoilerExample,
  textExExample,
} from './education-plugin-examples'
import { Geogebra } from '@/components/content/geogebra'
import { FaIcon } from '@/components/fa-icon'
import { EntityIdProvider } from '@/contexts/entity-id-context'

const categories = ['educational', 'basic'] as const

const pluginData = [
  {
    title: 'Single-Choice Exercise',
    icon: faSquareCheck,
    description:
      'Single-choice exercises offer different answer options, of which only one is correct. For each answer authors can provide individual feedback to the learners e.g. to explain misconceptions behind common mistakes.',
    example: SCExample,
    category: 'educational',
  },
  {
    title: 'Multiple-Choice Exercise',
    icon: faListCheck,
    description:
      'Multiple-choice exercises offer different answer options, of which several can be correct. For each answer authors can provide individual feedback to the learners e.g. to explain misconceptions behind common mistakes.',
    example: MCExample,
    category: 'educational',
  },
  {
    title: 'Input Exercise',
    icon: faTarp,
    description:
      'An input field appears below the task where a value or a character string can be entered and validated. Authors can add individual feedback to certain answers e.g. to explain misconceptions behind common mistakes.',
    example: inputExample,
    category: 'educational',
  },
  {
    title: 'Text Exercise',
    icon: faFileLines,
    description:
      'Text exercises give learners a task and access to a detailed solution to this task. They can be created using text and multimedia.',
    example: textExExample,
    category: 'educational',
  },
  {
    title: 'Math Formulas',
    icon: faSquareRootVariable,
    description:
      'Math Formulas are well formatted and correctly displayed and can be created using LaTeX or a visual editor.',
    example: null,
    image: 'math-formula.png',
    category: 'educational',
  },
  {
    title: 'Math Equations',
    icon: faEquals,
    description:
      'With the terms and equations element, we make it simple to implement nicely formatted, multi-line equations and term transformations. Command dashes and additional explanations with links can also be added.',
    example: null,
    image: 'math-equations.png',
    category: 'educational',
  },
  {
    title: 'Geogebra Integration',
    icon: faCubes,
    description:
      'With the GeoGebra applet, moving or interactive graphics can be integrated into the content. You can create your own applet or choose from the huge free public applet collection on geogebra.org.',
    example: <Geogebra id="d4eNMF5R" />,
    category: 'educational',
  },
  {
    title: 'Serlo Content Integration',
    icon: faNewspaper,
    description:
      'It is also possible to include other serlo.org content within the learning content being created. Here authors can choose from 23,000 high quality, standardized educational contents like explanations, exercises, solutions, videos and applets in a  vast number of subjects like Maths, Chemistry, Biology, IT, Applied Sustainability, German, English as a foreign language, and many more.',
    example: null,
    image: 'serlo-injection.png',
    category: 'educational',
  },
  {
    title: 'Semantic Highlighting Box',
    icon: faExpand,
    description:
      'Boxes offer the possibility to highlight important sections for learners. With the various semantic box types e.g. “example,” “mnemonic” or “quote”, the content can be structured clearly.',
    example: boxExample,
    category: 'educational',
  },
  {
    title: 'Text',
    icon: faParagraph,
    description:
      'Rich text can be edited in-line with bold, italic, headings, links, lists, and more.',
    example: null,
    image: 'text-toolbar.png',
    category: 'basic',
  },
  {
    title: 'Image',
    icon: faImages,
    description:
      'Everything looks nicer with images 🙂. You can insert them full width or with your text floating around. ',
    example: null,
    image: 'images.png',
    category: 'basic',
  },
  {
    title: 'Video',
    icon: faFilm,
    description:
      'Embed videos directly from YouTube, Vimeo or Wikimedia Commons in your content.',
    example: null,
    image: 'video.png',
    category: 'basic',
  },
  {
    title: 'Code',
    icon: faCode,
    description:
      'This feature offers special formatting and automatic syntax highlighting for code examples.',
    example: highlighExample,
    category: 'basic',
  },
  {
    title: 'Table',
    icon: faTable,
    description: 'Build tables intuitively with row and column headers.',
    example: null,
    image: 'table.png',
    category: 'basic',
  },
  {
    title: 'Spoiler',
    icon: faCaretSquareDown,
    description:
      'Hide additional content – e.g. more detailed context, sub-topics or further information – easily accessible within your content.',
    example: spoilerExample,
    category: 'basic',
  },
]

export function EducationPlugins() {
  const [selectedTitle, setSelectedTitle] = useState(pluginData[0].title)
  const [selectedCategory, setSelectedCategory] = useState<
    typeof categories[number] | undefined
  >(categories[0])

  const categoryRefs = [
    useRef<null | HTMLElement>(null),
    useRef<null | HTMLElement>(null),
    useRef<null | HTMLElement>(null),
  ]

  return (
    <div className="text-center">
      <h2 className={clsx(h2Class, 'mb-4')}>Features</h2>
      <div className="sm:flex">
        <div className="mb-4 sm:mt-8 sm:mb-12 sm:w-min text-left sm:text-right">
          {renderPluginsMenu()}
        </div>
        {renderInfoBox()}
      </div>
    </div>
  )

  function renderInfoBox() {
    const { description, example, image, title } =
      pluginData.find(({ title }) => title === selectedTitle) ?? pluginData[0]

    return (
      <div className="flex-1 m-3 mt-1 mb-[3.2rem] text-left">
        <div className="shadow-menu w-full p-8 overflow-y-scroll md:h-[37rem]">
          <EntityIdProvider value={1555}>
            <p className="text-xl mb-6">{description}</p>
            {example ? (
              <>
                <div className="border-b-2 border-brand-100 font-bold mb-3">
                  Live Example
                </div>
                <div className="-ml-side serlo-content-with-spacing-fixes">
                  {example}
                </div>
              </>
            ) : (
              <>
                <div className="border-b-2 border-brand-100 font-bold mb-6">
                  Screenshot
                </div>
                <img
                  key={image}
                  className="
                    border-4 rounded-md border-brand-200"
                  alt={`Screenshot of ${title}`}
                  src={`/_assets/img/editor/screenshots/${image}`}
                />
              </>
            )}
          </EntityIdProvider>
          <style jsx global>
            {`
              .lazyload-wrapper > .print:hidden,
              .lazyload-wrapper > aside {
                display: none;
              }
              .serlo-solution-box > .lazyload-wrapper {
                display: none;
              }
              .serlo-exercise-wrapper {
                margin-top: 0 !important;
                margin-bottom: 0 !important;
              }
              .serlo-exercise-wrapper li.flex {
                margin-bottom: 1rem !important;
              }
            `}
          </style>
        </div>
      </div>
    )
  }

  function renderPluginsMenu() {
    return (
      <>
        {categories.map((thisCategory, categoryIndex) => {
          const plugins = pluginData.filter(
            ({ category }) => category === thisCategory
          )
          const categoryRef = categoryRefs[categoryIndex]
          if (!categoryRef) return null

          const isSelected = selectedCategory === thisCategory

          return (
            <div key={thisCategory} className="mb-4">
              <button
                className="text-brand font-bold cursor-pointer capitalize mr-1 rounded-full hover:bg-brand-100 px-2"
                onClick={() =>
                  setSelectedCategory(isSelected ? undefined : thisCategory)
                }
              >
                {thisCategory}{' '}
                <span
                  className={clsx(
                    'inline-block transition-transform duration-300',
                    isSelected && 'rotate-180 translate-y-[1px]'
                  )}
                >
                  ▾
                </span>
              </button>
              <nav
                className={clsx(
                  'h-0 overflow-hidden transition-all duration-300'
                )}
                ref={categoryRef}
                style={
                  isSelected
                    ? { height: categoryRef.current?.scrollHeight ?? 'auto' }
                    : { height: '0' }
                }
              >
                <ul>{plugins.map(renderPluginMenuEntry)}</ul>
              </nav>
            </div>
          )
        })}
      </>
    )
  }

  function renderPluginMenuEntry({ title, icon }: typeof pluginData[0]) {
    return (
      <li
        key={title}
        className="sm:text-right text-sm sm:text-base inline-block sm:block"
      >
        <button
          onClick={() => setSelectedTitle(title)}
          className={clsx(
            'whitespace-nowrap px-2 py-1 m-1 rounded-md',
            'shadow-menu hover:bg-brand-50',
            selectedTitle === title ? 'bg-brand-100' : ''
          )}
        >
          <FaIcon icon={icon} /> <b>{title}</b>
        </button>
      </li>
    )
  }
}