/* eslint max-len: 0 */
import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Pizza = (
  <svg width="37" height="46">
    <g
      transform="translate(1 1)"
      stroke="#39F"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    >
      <circle
        className="circle-config animate-circle-0"
        cx="12"
        cy="19"
        r="3"
      />
      <circle
        className="circle-config animate-circle-0"
        cx="23"
        cy="15"
        r="3"
      />
      <circle
        className="circle-config animate-circle-0"
        cx="18"
        cy="30"
        r="3"
      />
      <path
        className="animate-dash-1 dash-config-1"
        d="M15.67 42.794.42 8.13a5 5 0 0 1 3.699-6.936A76.078 76.078 0 0 1 17.499 0c4.461 0 8.922.398 13.383 1.193A5 5 0 0 1 34.58 8.13L19.33 42.794a2 2 0 0 1-3.661 0Z"
      />
      <path
        className="animate-dash-2 dash-config-2"
        d="M2 10c5.167-2 10.333-3 15.5-3S27.833 8 33 10"
        strokeLinecap="square"
      />
    </g>
  </svg>
)
const Mac = (
  <svg width="43" height="38">
    <g stroke="#39F" strokeWidth="2" fill="none" fillRule="evenodd">
      <rect
        x="1"
        y="1"
        width="41"
        height="31"
        rx="7"
        className="animate-rect-0 rect-config"
      />
      <path
        className="animate-dash-3 dash-config-3"
        d="M1 23.25h40"
        strokeLinecap="square"
      />
      <circle fill="#D8D8D8" cx="21.5" cy="27.5" r="1.5" />
      <path
        className="animate-dash-4 dash-config-4"
        d="M18.88 32 17 37h9l-1.894-5H18.88Z"
      />
    </g>
  </svg>
)
const Keyboard = (
  <svg width="50" height="26">
    <g stroke="#39F" strokeWidth="2" fill="none" fillRule="evenodd">
      <path
        className="animate-dash-5 dash-config-5"
        d="M10.942 1a6 6 0 0 0-5.7 4.127l-3.943 12A6 6 0 0 0 7 25h36a6 6 0 0 0 5.76-7.68l-3.499-12A6 6 0 0 0 39.5 1H10.942Z"
      />
      <path
        className="animate-dash-6 dash-config-6"
        d="m6.567 17-.53 2.231A1.437 1.437 0 0 0 7.433 21h35.063a1.505 1.505 0 0 0 1.475-1.802L43.529 17H6.567ZM11.49 10l-.489 2H15v-2h-3.51ZM38.51 10l.489 2H35v-2h3.51ZM19.197 10 19 12h4v-2h-3.803ZM31.802 10 32 12h-4v-2h3.802ZM13.405 5l-.408 2H16V5h-2.595ZM36.595 5H34v2h3c0-.01-.001-.02-.003-.028L36.595 5ZM20.164 5l-.165 2H23V5h-2.836ZM29.836 5H27v2h3v-.015L29.835 5ZM27 7c0 .033-.028 0-.152 0H27Z"
      />
    </g>
  </svg>
)
const Pet = (
  <svg width="54" height="47" fill="none" fillRule="evenodd">
    <path
      d="M40.781 17.482C44.488 19.523 47 23.468 47 28c0 6.627-5.373 12-12 12-3.073 0-5.877-1.155-8-3.056-2.123 1.9-4.927 3.056-8 3.056-6.627 0-12-5.373-12-12 0-4.532 2.512-8.477 6.219-10.518C13.075 16.676 13 15.847 13 15c0-7.732 6.268-14 14-14s14 6.268 14 14c0 .847-.075 1.676-.219 2.482z"
      stroke="#39f"
      className="animate-dash-7 dash-config-7"
      strokeWidth="2"
    />
    <g fill="#39f">
      <ellipse cx="19.5" cy="25.5" rx="2.5" ry="3.5" />
      <ellipse cx="34.5" cy="25.5" rx="2.5" ry="3.5" />
    </g>
    <path
      d="M26.992 36c-1.427 0-3.556-3.165-2.854-4.197s4.955-1.108 5.708 0S28.419 36 26.992 36zM27 46c2.209 0 4-1.879 4-4.196v-2.319c-.737-.241-1.442-.578-2.113-1.008a12.74 12.74 0 0 1-1.623-1.234L27 37l-.337.326c-.489.45-1.028.855-1.62 1.214-.731.445-1.412.759-2.043.944v2.319C23 44.121 24.791 46 27 46zM20 3.069c-4.008-.405-7.545.967-10.609 4.115-4.597 4.723-7.747 9.993-8.235 13.806S.993 27.527 7.054 28c.041-2.074.52-4.066 1.84-6.246 1.202-1.984 2.723-3.433 4.562-4.347-.503-3.036-.088-5.887 1.246-8.552s3.1-4.593 5.298-5.786zm15 .008c3.571-.43 6.828.929 9.772 4.077 4.417 4.722 7.622 9.965 8.09 13.777s.02 6.596-5.803 7.068c-.039-2.074-.37-3.973-1.639-6.153-1.155-1.983-2.656-3.462-4.503-4.437.52-3.04.139-5.892-1.142-8.557S36.902 4.263 35 3.077z"
      stroke="#39f"
      className="animate-dash-8 dash-config-8"
      strokeWidth="2"
    />
  </svg>
)

const icons = [Pizza, Mac, Pet, Keyboard]

const SvgIcon = ({ index }) => icons[index]

SvgIcon.propTypes = {
  index: PropTypes.number.isRequired,
}

export default memo(SvgIcon)
