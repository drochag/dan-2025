import { useRef, type MutableRefObject } from "react";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Experience from "../components/experience";

import "rc-slider/assets/index.css";
// import "react-alice-carousel/lib/alice-carousel.css";
import Education from "../components/education";
import menus from "../components/menus";
type Menus = (typeof menus)[number];

const Index = () => {
  const refs = menus.reduce((acc, item) => {
    acc[item as Menus] = useRef();
    return acc;
  }, {} as Record<Menus, MutableRefObject<HTMLDivElement | null | undefined>>);

  return (
    <main className="w-full bg-themeDarkBlue pb-28">
      <SEO
        keywords={["Daniel Rocha", "personal website", "software engineer"]}
        title="Dan Rocha | Software Engineer"
      />
      <Layout {...refs} />
      <Hero ref={refs.home} />
      <About ref={refs.about} />

      <div className="bg-themeDarkBlue my-40 text-white font-sans pt-10">
        <div
          className="w-full max-w-240 flex flex-col
                    text-justify md:text-left content-center
                    container mx-auto px-5 sm:px-28"
        >
          <Skills ref={refs.skills} />
          <Experience ref={refs.experience} />
          <Education ref={refs.education} />
        </div>
      </div>
    </main>
  );
};
export default Index;
