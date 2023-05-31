import clsx from 'clsx'

import { EditorContact } from '../editor/editor-contact'
import { teamDataKulla } from '../editor/editor-team'
import { Link } from '@/components/content/link'

export const MetadataApiPresentation = () => {
  return (
    <>
      <div
        className={clsx(
          'md:left-[calc(-50vw+50%)] md:relative',
          'md:text-left md:ml-0',
          '-mt-12 sm:text-center',
          'text-gray-700'
        )}
      >
        <section className="font-bold text-center mt-32 px-4">
          <h1
            className={clsx(
              'text-5xl font-extrabold',
              'tracking-tight leading-tight',
              'mt-3 mx-auto'
            )}
          >
            <span className="serlo-underlined !pr-0 pb-2">Metadata API</span>
          </h1>
        </section>
        <section className="text-left mt-16 mb-16 px-4 mx-auto max-w-5xl">
          <div className="sm:flex sm:justify-between sm:space-x-4">
            <div className="sm:flex-1 text-xl leading-cozy sm:max-w-[31rem] sm:flex sm:flex-col pr-2">
              <h2 className="text-gray-700 text-[1.3rem] font-extrabold tracking-tight">
                <br />
                Integrate our Digital Learning Resources into your apps
              </h2>
              <p className="mt-4">
                Our new Metadata API makes it easy to integrate thousands of
                Serlo articles, courses, videos, and interactive exercises.
              </p>
              <p className="mt-4">
                The API is completely free and it only takes a few lines of code
                to integrate a vast repository of educational resources into
                your app or website!
              </p>
              <CallToAction />
            </div>
            <div className="sm:flex-1 mt-8 -mx-side sm:max-w-[32rem] rounded-lg overflow-hidden px-4">
              <img
                src="/_assets/img/metadata/metadata.png"
                alt="A bird flying over a stack of documents"
              />
            </div>
          </div>
        </section>
        <section className="bg-orangeBow bg-100% px-2 mt-0 pt-16 pb-16 mb-20">
          <div className="mt-2 sm:flex text-center text-xl max-w-4xl mx-auto px-4">
            <div className="flex-1 mx-4 pt-4 pb-4">
              <b className="text-brand font-handwritten text-4xl">20,000+</b>
              <br />
              Educational resources have been created with the{' '}
              <Link href="https://serlo.org/editor">Serlo Editor</Link>
            </div>
            <div className="flex-1 mx-4 pt-4 pb-4">
              <b className="text-brand font-handwritten text-4xl">1 Mio+</b>
              <br />
              Users per month are already learning with the materials
            </div>
          </div>
        </section>
        <section className="mt-24 pb-16">
          <div className="text-3xl leading-cozy max-w-4xl text-center mx-auto"></div>

          <div className="mt-12 text-3xl leading-cozy max-w-4xl text-center mx-auto">
            <h2 className="text-center text-4xl leading-cozy tracking-tight font-extrabold mb-4">
              Develop with the Serlo Metadata API
            </h2>
            <div className="text-left mx-side">
              <p className="mt-4 text-xl leading-cozy flex-1">
                Join our growing community by linking to our content through the
                Serlo Metadata API from your apps/website and change the future
                of education with us!
              </p>
              <p className="mt-2 text-xl leading-cozy">
                Licensed under,{' '}
                <Link href="https://creativecommons.org/licenses/by-sa/4.0/">
                  CC-BY-SA 4.0
                </Link>
                , the usage is completely free of cost.
              </p>
              <ul className="serlo-ul text-xl">
                <li>
                  Retrieve metadata of all our articles, videos, courses and
                  quizzes
                </li>
                <li>Easy to use GraphQL interface</li>
                <li>
                  Follow popular aggregators such as{' '}
                  <Link href="https://wirlernenonline.de/">
                    WirLernenOnline
                  </Link>{' '}
                  that have already integrated our metadata
                </li>
                <li>
                  Fully compliant with the state of the art{' '}
                  <Link href="https://dini-ag-kim.github.io/amb/draft/">
                    AMB standard
                  </Link>
                </li>
              </ul>
            </div>
            <CallToAction alignment="center" />
          </div>
        </section>

        <section className="mt-8 mb-32">
          <p className="text-xl leading-cozy flex-1 text-center">
            <b className="tracking-tight">
              Are you interested in using our Metadata API?
            </b>
            <br />
            Contact us with your integration requirements or read more about the
            Metadata API in our{' '}
            <Link href="https://github.com/serlo/documentation/wiki/Metadata-API">
              Wiki
            </Link>
          </p>
          <div className="text-center mt-8 mb-14">
            <EditorContact contact={teamDataKulla} />
          </div>
        </section>
      </div>
    </>
  )
}

interface CallToActionProps {
  alignment?: 'center' | 'left'
}

function CallToAction({ alignment = 'left' }: CallToActionProps) {
  const alignmentClasses =
    alignment === 'center' ? 'sm:ml-auto sm:mr-auto' : 'sm:ml-0 sm:mr-0'
  return (
    <a
      className={`serlo-new-landing-button serlo-button-with-wings mb-12 before:!mt-[-1.1rem] after:!mt-[-1.1rem] transition-colors mt-12 max-w-xs mx-auto ${alignmentClasses}`}
      href="https://github.com/serlo/documentation/wiki/Metadata-API"
    >
      Discover developer docs!
    </a>
  )
}
