import React, { memo } from 'react'
import LinkHover from './linkHover'

const Information = () => {
  const year = new Date().getFullYear()
  return (
    <div
      className="fixed w-auto min-w-18 sm:w-100vh text-blue-500 flex justify-evenly flex-wrap
                      backdrop-blur
                      left-1/2 -translate-x-1/2
                      transform px-5 sm:px-20 items-center
                      font-light text-sm
                      leading-5 z-50 p-2 bottom-0 translate-y-0
                      rounded-t-xl
                      overflow-hidden
                      sm:justify-between
                      sm:flex-nowrap sm:left-auto sm:rotate-90 sm:-translate-y-4
                      sm:translate-x-10 sm:origin-left sm:leading-4
                      sm:bottom-auto sm:top-0
                      "
    >
      <LinkHover
        classNames="order-1 sm:order-none w-auto"
        url="mailto:hi@danrocha.xyz"
      >
        hi@danielrocha.xyz
      </LinkHover>
      <div
        className="text-center w-full flex flex-wrap order-2
                    sm:w-auto sm:order-none"
      >
        <p className="text-center w-full">
          &copy; {year} Bliss DDM | All Rights Reserved
        </p>
        <p className="text-center w-full hidden sm:block">
          Pachuca de Soto, Hgo., México.
        </p>
      </div>
      <LinkHover
        url="/cv.pdf"
        classNames="order-1 text-right sm:order-none w-auto"
      >
        CV
      </LinkHover>
    </div>
  )
}

export default memo(Information)
