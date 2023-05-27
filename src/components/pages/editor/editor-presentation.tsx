import clsx from 'clsx'

import { EditorFeatures } from './editor-features'
import { EditorPartnerList, partners } from './editor-partner-list'
import { EditorRoadmap } from './editor-roadmap'
import { EditorTeam, teamData } from './editor-team'
import { EducationPlugins } from './education-plugins'
import { Link } from '@/components/content/link'
import { Video } from '@/components/content/video'
import { HeadTags } from '@/components/head-tags'
import { Logo } from '@/components/navigation/header/logo'
import { breakpoints } from '@/helper/breakpoints'

export const h2Class =
  'text-center text-4xl leading-cozy tracking-tight font-extrabold'
const h3Class = 'text-gray-700 text-[1.3rem] font-extrabold'

export function EditorPresentation() {
  return (
    <>
      <HeadTags
        data={{
          title:
            'Serlo Editor: Seamless Creation of Digital Learning Resources',
        }}
      />
      <header className="px-side pt-6 pb-8 lg:px-side-lg">
        <Logo />
        {renderSupporterLogos()}
      </header>

      <div
        className={clsx(
          'md:relative md:left-[calc(-50vw+50%)]',
          'md:ml-0 md:text-left',
          '-mt-12 sm:text-center',
          'text-gray-700'
        )}
      >
        <section className={clsx('mt-32 px-4 text-center font-bold')}>
          <h1
            className={clsx(
              'text-5xl font-extrabold',
              'leading-tight tracking-tight',
              'mx-auto mt-3'
            )}
          >
            <span className="underlined !pr-0 pb-2">Serlo Editor</span>
            <sup className="relative -top-6 ml-2 inline-block text-base text-brand">
              beta
            </sup>
          </h1>
        </section>

        <section
          className={clsx('mx-auto mt-16 mb-16 max-w-5xl px-4 text-left')}
        >
          <div className="sm:flex sm:justify-between">
            <div className="pr-2 text-xl leading-cozy sm:flex sm:max-w-[31rem] sm:flex-1 sm:flex-col">
              <h2 className={clsx(h3Class, 'tracking-tight')}>
                <br />
                Seamless Creation of Digital Learning Resources
              </h2>
              <p className="mt-4">
                The Serlo Editor makes it easy and intuitive for teachers to{' '}
                <b className="tracking-tight">
                  create multimedia and interactive digital educational
                  resources
                </b>
                . Just drag and drop your content elements where you need them
                and edit everything in-line like in Google Docs.
              </p>
              <p className="mt-4">
                Through its{' '}
                <b className="tracking-tight">flexible plugin architecture</b>{' '}
                the Serlo Editor can be adapted to your LMS. Everything is{' '}
                <b className="tracking-tight">open source and free of charge</b>
                .
              </p>
              <p className="mt-8 text-center md:text-left">
                {renderStayInTouch()}
              </p>
            </div>
            <div className="-mx-side mt-8 pl-2 sm:max-w-[32rem] sm:flex-1">
              <Video src="https://www.youtube.com/watch?v=wjaPgGdw23w" />
            </div>
          </div>
        </section>

        <section
          className={clsx('mt-12 mb-20 bg-orangeBow bg-100% px-4 !pt-20 pb-20')}
        >
          <div className="mx-auto max-w-7xl">
            <EditorFeatures />
          </div>
        </section>

        <section className={clsx('-mb-6 px-4')}>
          <div className="mx-auto mb-28 max-w-7xl">
            <EducationPlugins />
          </div>
        </section>

        <section
          className={clsx('mt-0 mb-20 bg-orangeBow bg-100% px-2 !pt-16')}
        >
          <div className="mx-auto mt-2 max-w-4xl px-4 pb-16 text-center text-xl sm:flex">
            <div className="mt-5 flex-1">
              <b className="font-handwritten text-4xl text-brand">20,000+</b>
              <br />
              Educational resources have been created with the Serlo Editor
            </div>
            <div className="mt-5 flex-1">
              <b className="font-handwritten text-4xl text-brand">1 Mio+</b>
              <br />
              Users per month learn with Serlo Editor content
            </div>
            <div className="mt-5 flex-1">
              <b className="font-handwritten text-4xl text-brand">500+</b>
              <br />
              Authors so far used the Serlo Editor to create open educational
              resources
            </div>
          </div>
        </section>

        <section id="roadmap" className={clsx('mt-24 pb-16')}>
          <div className="mx-auto max-w-4xl text-center text-3xl leading-cozy">
            <h2 className={clsx(h2Class, 'mb-4')}>Roadmap</h2>
            <EditorRoadmap />
            <p className="mt-12 sm:mt-0">{renderStayInTouch()}</p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl text-center text-3xl leading-cozy">
            <h2 className={clsx(h2Class, 'mb-8')}>Serlo Editor in your LMS</h2>

            <div className="mx-side text-left">
              <p className="mt-4 flex-1 text-xl leading-cozy">
                The Serlo Editor is free of charge and open source. We are going
                to offer all integration options requested by the community.
                Those might include:
              </p>
              <ul className="serlo-ul text-xl">
                <li>JavaScript library</li>
                <li>Docker container</li>
                <li>Plugins for the most popular LMS</li>
                <li>Software as a service</li>
              </ul>
              <p className="mt-20 flex-1 text-center text-xl leading-cozy">
                <b className="tracking-tight">
                  Are you interested in implementing the Serlo Editor in your
                  LMS?
                </b>
                <br />
                Please contact us with your integration requirements or feature
                requests.
              </p>
              <div className="mt-8 text-center">{renderContact()}</div>
            </div>
          </div>
        </section>

        <section
          className={clsx(
            'bg-size mt-8 bg-brand-100 bg-topWaveFromWhite bg-contain bg-top bg-no-repeat px-2 pt-20 sm:bg-[length:100%_3vw] md:pt-28'
          )}
        >
          <h2 className={clsx(h2Class, 'mb-8')}>About us</h2>
          <div className="mx-side max-w-4xl text-left sm:mx-auto">
            <p className="mt-4 flex-1 text-xl leading-cozy">
              The Serlo Editor has been developed by Serlo Education, a
              non-profit organization dedicated to providing high quality, free
              of charge and open source educational resources to students and
              teachers worldwide. Find out more about us on{' '}
              <Link href="/serlo">serlo.org/serlo</Link>.
            </p>
          </div>

          <h3
            className={clsx(h2Class, 'mb-8 mt-20 font-handwritten text-brand')}
          >
            Partners
          </h3>
          <div className="mx-auto max-w-[85rem]">
            <EditorPartnerList />
          </div>

          <h3
            className={clsx(h2Class, 'mb-8 mt-3 font-handwritten text-brand')}
          >
            Team
          </h3>
          <div className="mx-auto max-w-7xl px-4">
            <EditorTeam />
            <div className="mb-24 text-center">
              <h2 className={clsx(h2Class)}>Connect</h2>

              <p className="mt-4 flex-1 text-xl leading-cozy">
                Leave us you email address and we will reach out to you with
                updates.
              </p>
              <p className="mt-8">{renderStayInTouch(true)}</p>
            </div>
          </div>
          <footer>
            <div className="text-md py-8 pb-[3.5rem] text-center text-brand ">
              <a
                className="hover:underline"
                href="/datenschutz"
                target="_blank"
              >
                Datenschutz
              </a>
              {' • '}
              <a className="hover:underline" href="/impressum" target="_blank">
                Impressum
              </a>
            </div>
          </footer>
        </section>
      </div>

      <style jsx>{`
        :global(main > h1.serlo-h1) {
          display: none;
        }
        @font-face {
          font-family: 'Karmilla';
          font-style: bolder;
          font-weight: 800;
          src: url('/_assets/fonts/karmilla/karmilla-bolder.woff2')
              format('woff2'),
            url('/_assets/fonts/karmilla/karmilla-bold.woff') format('woff');
          font-display: swap;
        }
        .about {
          padding-top: 7rem;
          padding-bottom: 5rem;
          margin-top: 6rem 0 0 0;
          background-image: url('/_assets/img/landing/about-container.svg');
          background-repeat: no-repeat;
          background-size: 100vw 100%;
        }
        @media (min-width: ${breakpoints.sm}) {
          .about {
            padding-top: 11rem;
            padding-bottom: 9rem;
            background-position: 20% 19%;
            background-size: 82%, 100vw 100%;
          }
        }
        .underlined {
          padding-right: 1rem;
          white-space: nowrap;
          background: url('/_assets/img/landing/simple-underline.svg') no-repeat
            bottom;
        }
        :global(.landing-button-with-wings):after,
        :global(.landing-button-with-wings):before {
          content: ' ';
          background: url('/_assets/img/landing/wing-left.svg') no-repeat;
          position: absolute;
          margin-top: -0.6rem;
          width: 4rem;
          height: 4rem;
          pointer-events: none;
          opacity: 0;
          transition: opacity ease-in 0.2s;
        }
        :global(.landing-button-with-wings):after {
          margin-left: 1rem;
          transform: scaleX(-1);
        }
        :global(.landing-button-with-wings):before {
          margin-left: -5rem;
        }
        :global(.landing-button-with-wings):hover:after,
        :global(.landing-button-with-wings):hover:before {
          opacity: 1;
        }
        :global(.landing-button-with-wink):after,
        :global(.landing-button-with-wink):before {
          background: url('/_assets/img/landing/wink-left.svg') no-repeat !important;
          margin-top: -2rem !important;
          background-size: 65% !important;
        }
        .p-with-wink:after,
        .p-with-wink:before {
          margin-top: -1rem !important;
          background-size: 75%;
          width: 2.5rem;
          height: 2.5rem;
          opacity: 1;
        }
        .p-with-wink:after {
          margin-left: -0.5rem;
        }
        .p-with-wink:before {
          margin-left: -1.5rem;
        }
        :global(body) {
          max-width: 100vw;
          overflow-x: hidden;
          background: white;
        }
        :global(html) {
          background-color: #eff7fb;
        }
      `}</style>
    </>
  )

  function renderStayInTouch(final?: boolean) {
    return (
      <a
        href="https://forms.gle/A6qZrkHoW4Q5K3Mb6"
        className={clsx(
          'landing-button-with-wings serlo-new-landing-button !mb-8 inline-block rounded-full transition-colors before:!mt-[-1.1rem] after:!mt-[-1.1rem]',
          final ? '' : 'bg-brand-200 text-brand hover:text-white'
        )}
      >
        Stay updated!
      </a>
    )
  }

  function renderContact() {
    const {
      firstName,
      lastName,
      position,
      photo,
      extraLinkUrl,
      extraLinkText,
    } = teamData.find((person) => person.firstName === 'Simon')!

    return (
      <div className="flex justify-center text-left text-base">
        <img
          className="mr-4 max-w-[6rem] rounded-full"
          alt={`${firstName} ${lastName}`}
          src={photo}
        />
        <div className="-mt-2 h-min self-center">
          <b>
            {firstName} {lastName}
          </b>
          <br />
          {position}
          <br />
          <Link href={extraLinkUrl} className="mt-1 inline-block">
            {extraLinkText}
          </Link>
        </div>
      </div>
    )
  }

  function renderSupporterLogos() {
    const { padding, logo, name } = partners[0]

    const euLogo = {
      name: 'European Union',
      logo: '/_assets/img/editor/partners/logo_eu.svg',
      padding: 2,
    }
    return (
      <div className="hidden sm:absolute sm:right-8 sm:top-5 sm:block sm:w-32">
        <img
          className="sm:ml-auto"
          style={{
            paddingTop: `${padding}px`,
            paddingBottom: `${padding}px`,
          }}
          src={logo}
          alt={`Logo von ${name}`}
        />
        <img
          className="sm:ml-auto sm:-mt-8"
          style={{
            paddingTop: `3px`,
            paddingBottom: `3px`,
          }}
          src={euLogo.logo}
          alt={`Logo von ${euLogo.name}`}
        />
      </div>
    )
  }
}
