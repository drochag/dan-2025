import React, { memo } from 'react'
import PropTypes from 'prop-types'

const LinkHover = ({ classNames, children, url }) => (
  <a
    className={`
    ${classNames} inline-block bg-[length:200%_100%] transition-all duration-300 bg-right-bottom hover:bg-left-bottom bg-clip-text text-transparent
    `}
    style={{
      backgroundImage: 'linear-gradient(to right, #FF3399 50%, #3399ff 50%)',
    }}
    href={url}
    target="_blank"
    rel="noreferrer"
  >
    {children}
  </a>
)

LinkHover.propTypes = {
  classNames: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  url: PropTypes.string.isRequired,
}

LinkHover.defaultProps = {
  classNames: '',
}

export default memo(LinkHover)
