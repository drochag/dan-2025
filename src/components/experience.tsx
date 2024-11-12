import { useState, memo, forwardRef } from "react";

import ExperienceComponent from "./experienceComponent";
import SectionTitle from "./sectionTitle";
import { experienceData } from "../utils";
import Title from "./title";

const Experience = (props, ref) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <div
      id="experience"
      ref={ref}
      className={
        "bg-themeDarkBlue text-white min-h-500 mt-32 mb-32" +
        " max-w-240 flex flex-col  text-justify md:text-left content-center"
      }
    >
      <SectionTitle displayText="Experience" />
      <Title>Experience</Title>
      <ul>
        {[...experienceData]
          .slice(0, showAll ? experienceData.length : 3)
          .map((exp, index) => (
            <ExperienceComponent key={`${index}-${exp.date}`} {...exp} />
          ))}
      </ul>
      <button
        className={
          "bg-themeBlue max-w-sm mx-auto w-full text-white" +
          " font-bold py-2 px-4 rounded-md inline-block"
        }
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "Show Less" : "Show All"}
      </button>
    </div>
  );
};

export default memo(forwardRef(Experience));
