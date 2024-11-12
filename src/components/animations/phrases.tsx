import { memo, useState } from "react";
import TypingAnimation from "./typing-animation";
import PropTypes from "prop-types";
import SvgIcon from "./svgIcon";

const pauseTime = 5000;
const charEnterTime = 100;
const charLeaveTime = 40;

const phrases = [
  "PIZZA DEVOURER", // Pizza
  "UI DEVELOPER", // Mac
  "PET ACCUMULATOR", // Dog
  "JAVASCRIPT WRITER", // Keyboard
];

type Phrase = (typeof phrases)[number];

const Phrases = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  const handleNextPhrase = () => {
    setTimeout(() => {
      if (currentPhrase >= phrases.length - 1) {
        setCurrentPhrase(0);
      } else {
        setCurrentPhrase(currentPhrase + 1);
      }
    }, (phrases[currentPhrase] as Phrase).length * charLeaveTime);
  };

  return (
    <div className="flex items-center">
      <TypingAnimation
        displayText={phrases[currentPhrase] as Phrase}
        handleNextPhrase={handleNextPhrase}
        pauseTime={pauseTime}
        charEnterTime={charEnterTime}
        charLeaveTime={charLeaveTime}
      />

      <div className="ml-4">
        <SvgIcon index={currentPhrase} />
      </div>
    </div>
  );
};

Phrases.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default memo(Phrases);
