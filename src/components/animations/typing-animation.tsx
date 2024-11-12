import React, {
  memo,
  useMemo,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react'
import PropTypes from 'prop-types'
import RandomLetter from './random-letter'

const TypingAnimation = ({
  displayText,
  handleNextPhrase,
  charEnterTime,
  charLeaveTime,
  pauseTime,
  startingDelay,
}) => {
  const ref = useRef()

  const [isFirstRender, setIsFirstRender] = useState(true)
  const [isReverse, setIsReverse] = useState(false)
  const [currentLetter, setCurrentLetter] = useState(0)

  const nextLetter = useCallback(() => {
    setCurrentLetter(isReverse ? currentLetter - 1 : currentLetter + 1)
  }, [currentLetter])

  useEffect(() => {
    if (currentLetter >= displayText.length) {
      return clearTimeout(ref.current)
    }

    setTimeout(
      () => {
        setIsFirstRender(false)
        ref.current = setTimeout(
          nextLetter,
          isReverse ? charLeaveTime : charEnterTime,
        )
      },
      isFirstRender ? startingDelay : 0,
    )

    return () => clearTimeout(ref.current)
  }, [nextLetter, isFirstRender])

  useEffect(() => {
    let timeout
    if (currentLetter >= displayText.length) {
      if (handleNextPhrase) {
        setIsReverse(true)

        timeout = setTimeout(() => {
          setCurrentLetter(currentLetter - 1)
          handleNextPhrase()
        }, pauseTime)
      }
    } else if (currentLetter <= 1) {
      setIsReverse(false)
    }

    return () => clearTimeout(timeout)
  }, [currentLetter])

  const htmlElements = useMemo(
    () =>
      displayText
        .slice(0, currentLetter)
        .split('')
        .map((character, index) => (
          <RandomLetter
            key={`${displayText}-${index}-${character}`}
            randomItems={3}
            letter={character}
          />
        )),
    [currentLetter],
  )

  return <span>{htmlElements}</span>
}

TypingAnimation.propTypes = {
  displayText: PropTypes.string.isRequired,
  handleNextPhrase: PropTypes.func,
  charEnterTime: PropTypes.number.isRequired,
  charLeaveTime: PropTypes.number,
  pauseTime: PropTypes.number,
  startingDelay: PropTypes.number,
}

TypingAnimation.defaultValues = {
  startingDelay: 0,
}

export default memo(TypingAnimation)
