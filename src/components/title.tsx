import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Title = ({ children }) => (
  <h2 className="mb-14 text-center animate-color font-extrabold text-5xl">
    {children}
  </h2>
)

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default memo(Title)
