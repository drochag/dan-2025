import React, { memo, useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TypingAnimation from './animations/typing-animation'

const SectionTitle = ({ displayText }) => {
  const [attempts, setAttempt] = useState(0)
  const [isActive, setActive] = useState(false)
  const shadowRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([{ isIntersecting, intersectionRatio }]) => {
        setActive(!isIntersecting)
        if (intersectionRatio > 0) {
          setAttempt(attempts => attempts + 1)
        }
      },
      { threshold: [1] },
    )
    observer.observe(shadowRef.current)

    return () => observer.unobserve(shadowRef.current)
  }, [shadowRef])

  return (
    <>
      <div className="relative">
        <div ref={shadowRef} className="absolute top-0 left-0 right-0" />
      </div>
      <div className="sticky z-40 top-1 w-full mb-32 -bottom-sticky">
        <div className="max-w-240 w-full absolute left-1/2 -translate-x-1/2 text-white text-left">
          <div className="p-2 pl-0 inline-block rounded-3xl">
            <div
              className={`
                p-2 inline-block text-xl font-extrabold
                rounded-3xl duration-300 ease-in-out relative before:-z-10 before:rounded-xl before:transition-all
                uppercase before:rainbow-background before:block before:inset-0 before:absolute
                before:animate-background
                ${
    isActive
      ? 'before:opacity-100'
      : 'before:opacity-0 animate-color'
    }
              `}
            >
              {'< '}
              {!isActive && attempts > 1 ? displayText : null}
              {isActive && attempts <= 1 ? (
                <TypingAnimation
                  charEnterTime={200}
                  displayText={displayText}
                />
              ) : isActive ? (
                displayText
              ) : null}
              {' />'}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SectionTitle.propTypes = {
  displayText: PropTypes.string.isRequired,
}

export default memo(SectionTitle)
