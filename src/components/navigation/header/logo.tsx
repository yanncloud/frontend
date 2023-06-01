import clsx from 'clsx'

import { Link } from '@/components/content/link'
import { useInstanceData } from '@/contexts/instance-context'

export interface LogoProps {
  foldOnMobile?: boolean
}

export function Logo({ foldOnMobile }: LogoProps) {
  const { strings } = useInstanceData()

  return (
    <Link href="/" className="w-min sm:w-auto">
      <img
        className="inline"
        alt="Serlo"
        src="/_assets/img/serlo-logo.svg"
        width="120"
        height="80"
      />
      <span
        className={clsx(
          'align-text-top font-handwritten text-xl text-almost-black',
          foldOnMobile
            ? 'ml-9 mt-2 block mobileExt:ml-9 mobileExt:inline-block mobileExt:whitespace-nowrap sm:mt-4 sm:ml-2'
            : 'absolute mt-4 ml-2 inline-block'
        )}
      >
        {strings.header.slogan}
      </span>
    </Link>
  )
}
