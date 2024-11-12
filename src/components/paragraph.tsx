import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Paragraph = ({ className, isLeftAligned, children }) => (
  <p
    className={`${className} ${
      isLeftAligned ? 'desktop:text-left sm:text-center' : 'sm:text-center'
    } text-lg text-justify mb-5`}
  >
    {children}
  </p>
)

Paragraph.propTypes = {
  className: PropTypes.string,
  isLeftAligned: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default memo(Paragraph)
