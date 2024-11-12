import React, { memo } from 'react'
import PropTypes from 'prop-types'

const ExperienceComponent = ({
  date,
  company,
  occupation,
  project,
  information,
}) => (
  <li className="mb-10 flex text-left w-full list-element">
    <span className="max-w-240 flex flex-col">
      <h2
        className="text-white text-xl
                      font-extrabold tracking-wider"
      >
        {company}
      </h2>
      <h3
        className="text-themeBlue text-base
                      font-extrabold mb-3"
      >
        {'<'} {occupation} {'/>'}
      </h3>
      {project && (
        <h4
          className="text-l font-extrabold
                    leading-4 mb-2 text-themePink"
        >
          {project}
        </h4>
      )}
      <h1
        className={`text-white text-xs tracking-wider mb-2 ${
          !project ? '-mt-2' : ''
        }`}
      >
        {date}
      </h1>
      {information && <h5 className="text-base leading-5">{information}</h5>}
    </span>
  </li>
)

ExperienceComponent.propTypes = {
  date: PropTypes.string.isRequired,
  company: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.element,
  ]),
  occupation: PropTypes.string.isRequired,
  project: PropTypes.string,
  information: PropTypes.string,
}

export default memo(ExperienceComponent)
