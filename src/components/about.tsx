import React, { forwardRef, memo } from "react";
import SectionTitle from "./sectionTitle";
import Title from "./title";
import Subtitle from "./subtitle";
import Paragraph from "./paragraph";
import LinkHover from "./linkHover";
import Phrases from "./animations/phrases";

const list = [
  "Web development",
  "IoT solutions",
  "Digital Marketing",
  "Online Stores",
  "Admin Panels",
  "Desktop or Mobile Apps",
  "Custom Software Development for specific needs",
  "MVP Development",
];

const About = (props, ref) => (
  <div
    ref={ref}
    id="about"
    className={
      "bg-themeDarkBlue text-white mt-6" +
      " flex flex-col justify-center max-w-240 " +
      "text-center content-center mx-auto px-5 sm:px-28"
    }
  >
    <SectionTitle displayText="About" />
    <div className="mb-16">
      <Title>About</Title>
      <Subtitle>Developer, Manager, Software Architect, Tech Lead</Subtitle>
      <Paragraph>
        I am a Software Engineer from Mexico City with over 10 years of
        experience in the software industry and passion for design, UX, A11y and
        maths, running a company named&nbsp;
        <LinkHover url={"https://blissddm.xyz/"}>Bliss DDM</LinkHover>
        &nbsp;(Software Development, Design and Digital Marketing). I have
        worked with a wide range of technologies and some of the most innovative
        companies and startups in the world such as Rivian, Hiatus, American
        Express and Zenfolio.
      </Paragraph>
    </div>
    <Paragraph className="mb-14">
      I offer engineering services to companies in need of software development
      to improve their business processes or flows and their customer experience
      upgrading their digital presence.
    </Paragraph>
    <Subtitle>Helping with</Subtitle>
    <ul
      className="text-themeBlue font-light text-left
                    pb-5 text-lg container mx-auto sm:px-10 px-0"
    >
      {list.map((text) => (
        <li className="list-element list-element--small" key={text}>
          {text}
        </li>
      ))}
    </ul>
    <Paragraph>
      For creative agencies, accounting firms, suit factories, we can work with
      any type of existing companies. From big enterprises to startups.
    </Paragraph>
    <Paragraph>
      I also do some&nbsp;
      <LinkHover url={"https://github.com/drochag"}>Open</LinkHover>
      &nbsp;
      <LinkHover url={"https://stackoverflow.com/users/2291591/dan-rocha"}>
        Source
      </LinkHover>
      , even though most of my work is private.
    </Paragraph>
    <div className="desktop:flex-row flex flex-col-reverse justify-center mt-24">
      <div
        className="desktop:flex desktop:flex-col
                  desktop:flex-1 desktop:justify-center desktop:w-1/2"
      >
        <Paragraph isLeftAligned>
          I like to speak in meetups related to my interests (principally JS)
          sharing my knowledge and experience while working on awesome projects.
        </Paragraph>
        <Paragraph isLeftAligned>
          My wife and I have two kids 👶🏽👶🏽 10 dogs 🐶 3 parrakeets 🦜 5 turtles
          🐢 2 bunnies 🐇🐰 and lots of plants 🪴.
        </Paragraph>
      </div>

      <div className="mb-10 desktop:mb-0 desktop:w-1/2 text-themeBlue font-extrabold text-xl flex items-center desktop:pl-8 justify-center">
        <span className="mr-2">{"<"}</span>
        <Phrases />
        <span className="ml-2">{"/>"}</span>
      </div>
    </div>
  </div>
);

export default memo(forwardRef(About));
