import React, { memo } from 'react'
import PropTypes from 'prop-types'

const EducationItem = ({ title, school, studies, years }) => (
  <li className="list-element">
    <h5 className="text-white text-lg mb-1 relative uppercase">{title}</h5>
    <p className="text-lg">
      <span className="text-themePink">[ {school} ]</span> - {studies}
    </p>
    <p className="text-sm mb-4">{years}</p>
  </li>
)

EducationItem.propTypes = {
  title: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  studies: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
}

export default memo(EducationItem)
