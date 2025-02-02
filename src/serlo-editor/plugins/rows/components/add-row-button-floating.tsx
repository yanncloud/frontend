import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

import { FaIcon } from '@/components/fa-icon'
import { useEditorStrings } from '@/contexts/logged-in-data-context'
import { tw } from '@/helper/tw'

interface AddRowButtonFloatingProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  focused?: boolean
  hide?: boolean
}

export function AddRowButtonFloating({
  focused,
  onClick,
  hide,
}: AddRowButtonFloatingProps) {
  const rowsStrings = useEditorStrings().plugins.rows

  return (
    <div className="absolute bottom-0 z-[1] h-auto w-full translate-y-full">
      {hide ? null : (
        <div className="group flex justify-center">
          <button
            className={clsx(
              tw`
                add-trigger z-20 h-7 rounded-full py-2 text-gray-600 transition-all
                hover:cursor-pointer hover:text-editor-primary hover:opacity-100
                group-hover:opacity-60
              `,
              focused ? 'opacity-60' : 'opacity-0'
            )}
            title={rowsStrings.addAnElement}
            onClick={onClick}
            data-qa="add-new-plugin-row-button"
          >
            <FaIcon icon={faCirclePlus} className="text-xl" />
          </button>
        </div>
      )}
    </div>
  )
}
