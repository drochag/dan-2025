const phrases = [
  "PIZZA DEVOURER", // Pizza
  "UI DEVELOPER", // Mac
  "PET ACCUMULATOR", // Dog
  "JAVASCRIPT WRITER", // Keyboard
];

const pizzaIdx = phrases.indexOf("PIZZA DEVOURER");
const macIdx = phrases.indexOf("UI DEVELOPER");

const pauseTime = 5000;
const charEnterTime = 100;
const charLeaveTime = 40;

const phrasesTimes = phrases.map((phrase) => ({
  total: phrase.length * (charEnterTime + charLeaveTime) + pauseTime,
  enterTime: phrase.length * charEnterTime,
  leaveTime: phrase.length * charLeaveTime,
}));

const phrasesPercentages = phrasesTimes.map(({ total, enterTime, leaveTime }) =>
  [
    0, // starting time
    enterTime / total, // when the enter animation ends
    1 - leaveTime / total, // when the leave animation starts
    1, // ending time
  ].map((x) => x * 100)
);

const dashesLengths = [
  [125.35965728759766, 31.75766372680664], // 0 -- [dash1, dash2] Pizza
  [40, 24.91446304321289], // 1 -- [dash3, dash4] Mac
  [129.83961486816406, 180.40194702148438], // 2 -- [dash5, dash6] Dog
  [127.39048767089844, 167.85104370117188], // 3 -- [dash7, dash8] Keyboard
];

const figuresLength = {
  circle: 18.368804931640625,
  rect: 131.69886779785156,
};

const roundToNum = (precision) => {
  const cache = {};
  return (num) => {
    if (cache[num]) return cache[num];

    const calc = +(Math.round(num + `e+${precision}`) + `e-${precision}`);
    cache[num] = calc;
    return calc;
  };
};

const roundToTwo = roundToNum(2);
const getPercentage = (percentage) => roundToTwo(percentage) + "%";

const keyframes = {
  ...dashesLengths.reduce((acc, dashes, dashesIdx) => {
    [1, 2].forEach((dash) => {
      acc[`dash${dashesIdx * 2 + dash}`] = phrasesPercentages[dashesIdx].reduce(
        (percentages, percentage, percentageIdx) => {
          percentages[getPercentage(percentage)] = {
            "stroke-dashoffset": [1, 2].includes(percentageIdx)
              ? 0
              : percentageIdx === 0
              ? dashes[dash - 1]
              : -dashes[dash - 1],
          };

          return percentages;
        },
        {}
      );
    });
    return acc;
  }, {}),
  ...[
    ["circle", pizzaIdx],
    ["rect", macIdx],
  ].reduce((acc, [figure, itemIdx]) => {
    acc[figure] = phrasesPercentages[itemIdx].reduce(
      (percentages, percentage, percentageIdx) => {
        percentages[getPercentage(percentage)] = {
          "stroke-dashoffset": [1, 2].includes(percentageIdx)
            ? 0
            : percentageIdx === 0
            ? figuresLength[figure]
            : -figuresLength[figure],
        };

        return percentages;
      },
      {}
    );
    return acc;
  }, {}),
  rainbow: {
    "0%": {
      color: "#FF3399",
    },
    "33.33%": {
      color: "#7733FF",
    },
    "66.6666%": {
      color: "#3399FF",
    },
    "100%": {
      color: "#FF3399",
    },
  },
  rainbowBackground: {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
};

const animation = {
  ...dashesLengths.reduce((acc, dashes, dashesIdx) => {
    [1, 2].forEach((dash) => {
      acc[`dash-${dashesIdx * 2 + dash}`] = `dash${dashesIdx * 2 + dash} ${
        phrasesTimes[dashesIdx].total
      }ms linear`;
    });
    return acc;
  }, {}),
  "circle-0": `circle ${phrasesTimes[pizzaIdx].total}ms linear`,
  "rect-0": `rect ${phrasesTimes[macIdx].total}ms linear`,
  color: "rainbow 5s linear infinite",
  background: "rainbowBackground 5s linear infinite",
};

const utilities = {
  ".rainbow-background": {
    background:
      "linear-gradient(-45deg, rgba(255, 51, 153, var(--tw-bg-opacity)), rgba(119, 51, 255, var(--tw-bg-opacity)), rgba(51, 153, 255, var(--tw-bg-opacity)))",
    backgroundSize: "300% 300%",
  },
  ".transition-hero": {
    transition: "filter 2s 500ms ease-in-out",
  },
  ".transition-hero-background": {
    transition: "background-color 2s 500ms ease-in-out",
  },
  ...dashesLengths.reduce((acc, dashes, dashesIdx) => {
    [1, 2].forEach((dash) => {
      acc[`.dash-config-${dashesIdx * 2 + dash}`] = {
        "stroke-dasharray": dashes[dash - 1],
        "stroke-dashoffset": dashes[dash - 1],
      };
    });
    return acc;
  }, {}),
  ...["circle", "rect"].reduce((acc, figure) => {
    acc[`.${figure}-config`] = {
      "stroke-dasharray": figuresLength[figure],
      "stroke-dashoffset": figuresLength[figure],
    };
    return acc;
  }, {}),
};

module.exports = {
  keyframes,
  animation,
  utilities,
};
