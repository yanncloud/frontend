import clsx from 'clsx'

const roadmapData = [
  {
    title: 'Latest Release',
    steps: ['Migration Algorithm for new versions of data format'],
  },
  {
    title: 'Next up',
    steps: [
      'dozens of smaller UX improvements',
      'Update Slate to 0.82',
      'Release of updated data- and exchange-format for Serlo Editor content',
    ],
  },
  {
    title: 'Soon',
    steps: [
      'H5P integration',
      'Further UX improvements',
      'Fill-in-the-gap exercises',
      'Drag & Drop exercises',
    ],
  },
  {
    title: 'Later',
    steps: [
      'More exercise plugins',
      'Improved focus management',
      'LMS integrations',
      'Global copy & paste',
    ],
  },
]

export function EditorRoadmap() {
  return (
    <div className="text-xl text-center sm:flex">
      {roadmapData.map(({ title, steps }, colIndex) => {
        return (
          <div key={title} className="mb-12 flex-1 px-4">
            <h3 className={clsx('mb-4 font-handwritten text-brand text-3xl')}>
              {title}
            </h3>
            <ul className="">
              {steps.map((title) => {
                return (
                  <li
                    key={title}
                    // className="bg-brand-100 px-2 py-1 rounded-lg inline-block m-1"
                    className={clsx(
                      'block px-2 py-2 mb-5',
                      'rounded-xl hover:bg-brand/5 transition-colors shadow-menu',
                      'text-lg'
                    )}
                  >
                    {title}
                  </li>
                )
              })}
            </ul>
            {colIndex === 0 ? (
              <img
                src="/_assets/img/jobs/impact.svg"
                className="my-5 mx-3 opacity-75"
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
