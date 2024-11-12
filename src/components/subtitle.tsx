import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Subtitle = ({ classNames, children }) => (
  <h3 className={`${classNames} mb-5 animate-color font-extrabold text-xl`}>
    {'<'} {children} {'/ >'}
  </h3>
)

Subtitle.propTypes = {
  classNames: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

Subtitle.defaultProps = {
  classNames: '',
}

export default memo(Subtitle)
