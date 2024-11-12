import React, { memo, useEffect, useMemo, useState } from 'react'
import menus from './menus'

const Menu = refs => {
  const [activeElements, setActiveElements] = useState(
    menus.reduce((acc, key) => {
      acc[key] = false
      return acc
    }, {}),
  )

  const lastActiveElement = useMemo(
    () => Object.values(activeElements).lastIndexOf(true),
    [activeElements],
  )

  const menuItems = useMemo(
    () =>
      menus.reduce((acc, item) => {
        acc[item] = {
          hash: item,
          title: item.toUpperCase(),
          ref: refs[item],
        }

        return acc
      }, {}),
    [refs],
  )

  useEffect(() => {
    const observers = Object.entries(refs).map(([item, ref]) => {
      const observer = new IntersectionObserver(
        ([{ isIntersecting }]) => {
          setActiveElements(prevState => ({
            ...prevState,
            [item]: isIntersecting,
          }))
        },
        { threshold: [0.3] },
      )
      observer.observe(ref.current)
      return observer
    })

    return () =>
      refs.forEach((ref, idx) => observers[idx].unobserve(ref.current))
  }, [refs])

  return (
    <nav className="fixed transform -translate-y-1/2 right-5 sm:top-1/2 w-24 top-1/2 hidden sm:block z-50">
      {Object.entries(menuItems).map(([hash, { title }], idx) => (
        <a
          key={hash}
          className="group py-3 px-6 block relative"
          href={`#${hash}`}
        >
          <div
            className={
              (idx === lastActiveElement
                ? 'w-16 border-themePurple'
                : 'w-7.5 border-themeBlue') +
              ' h-0.5 border-2 rounded-full transition-all ' +
              'duration-500 group-hover:w-16 group-hover:border-themePurple'
            }
            content={title}
          >
            <div className="bg-themeDarkBlue bg-opacity-50 rounded-full backdrop-blur p-2 absolute top-1/2 -translate-y-1/2 -translate-x-full opacity-0 group-hover:-translate-x-[115%] transition-all duration-700 group-hover:opacity-100">
              <span className="tracking-[.25em] text-xs text-themePurple whitespace-nowrap transition-all duration-500">
                {`<${title} />`}
              </span>
            </div>
          </div>
        </a>
      ))}
    </nav>
  )
}

export default memo(Menu)
