import React, { useState, useEffect, useMemo, memo } from 'react'
import SocialIcon from './socialIcon'

const socialMedia = [
  {
    iconName: 'github',
    url: 'https://github.com/drochag',
  },
  {
    iconName: 'linkedIn',
    url: 'https://www.linkedin.com/in/drochag/',
  },
  {
    iconName: 'stackOverflow',
    url: 'https://stackoverflow.com/users/2291591/dan-rocha',
  },
  {
    iconName: 'twitter',
    url: 'https://twitter.com/danrochag',
  },
]

const Icons = () => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    const boxContainer = document.getElementById('home')

    const observer = new IntersectionObserver(
      entries => {
        const { isIntersecting } = entries[0]
        setActive(!isIntersecting)
      },
      { threshold: 1, rootMargin: '64px' },
    )

    observer.observe(boxContainer)
  }, [])

  const socialIcons = useMemo(
    () =>
      socialMedia.map(({ url, iconName }) => (
        <SocialIcon key={url} iconName={iconName} url={url} />
      )),
    [],
  )

  return (
    <div className="fixed transform bottom-20 left-1/2 -translate-x-2/4 sm:bottom-16 z-50 rounded-full ">
      <div
        className={`flex rounded-full overflow-hidden justify-center items-center gap-3 lg:gap-6 ${
          isActive ? 'backdrop-blur' : ''
        }`}
      >
        {socialIcons}
      </div>
    </div>
  )
}

export default memo(Icons)
