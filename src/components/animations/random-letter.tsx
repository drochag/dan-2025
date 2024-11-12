import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

export const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const getRandomNumber = limit => Math.floor(Math.random() * limit)

const RandomLetter = ({ randomItems, letter }) => {
  const timeoutId = useRef(null)
  const [frame, setFrame] = useState(0)
  const [letters, setLetters] = useState([])

  const nextFrame = useCallback(currentFrame => {
    setFrame(currentFrame)

    if (currentFrame >= randomItems) {
      clearTimeout(timeoutId.current)
    } else {
      timeoutId.current = setTimeout(() => {
        nextFrame(currentFrame + 1)
      }, 80)
    }
  }, [])

  useEffect(() => {
    const randomLetters = [...Array(randomItems)].map(() => {
      const index = getRandomNumber(characters.length)
      return characters[index]
    })
    setLetters([...randomLetters, letter])

    nextFrame(0)

    return () => clearTimeout(timeoutId.current)
  }, [])

  return <span>{letters[frame]}</span>
}

RandomLetter.propTypes = {
  randomItems: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired,
}

export default memo(RandomLetter)
