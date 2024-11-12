import { memo } from "react";
import { Image } from "astro:assets";

import Github from "../images/github.svg";
import GithubHover from "../images/githubHover.svg";
import GithubActive from "../images/githubActive.svg";
import Twitter from "../images/twitter.svg";
import TwitterHover from "../images/twitterHover.svg";
import TwitterActive from "../images/twitterActive.svg";
import LinkedIn from "../images/linkedIn.svg";
import LinkedInHover from "../images/linkedInHover.svg";
import LinkedInActive from "../images/linkedInActive.svg";
import StackOverflow from "../images/stackOverflow.svg";
import StackOverflowHover from "../images/stackOverflowHover.svg";
import StackOverflowActive from "../images/stackOverflowActive.svg";

const imageStyles =
  "transition-all duration-500 absolute object-cover top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2";
const images = {
  github: {
    Default: Github,
    Hover: GithubHover,
    Active: GithubActive,
  },
  twitter: {
    Default: Twitter,
    Hover: TwitterHover,
    Active: TwitterActive,
  },
  linkedIn: {
    Default: LinkedIn,
    Hover: LinkedInHover,
    Active: LinkedInActive,
  },
  stackOverflow: {
    Default: StackOverflow,
    Hover: StackOverflowHover,
    Active: StackOverflowActive,
  },
};

const SocialIcon = ({
  iconName,
  url,
}: {
  iconName: keyof typeof images;
  url: string;
}) => {
  const { Default, Hover, Active } = images[iconName];
  return (
    <div className="group relative w-14 h-14 flex items-center justify-center">
      <a href={url} target="_blank" rel="noreferrer">
        <Image
          {...Default}
          className={`opacity-100 group-hover:opacity-0 ${imageStyles}`}
          alt="social icon"
        />

        <Image
          {...Hover}
          className={`opacity-0 group-hover:opacity-100 ${imageStyles}`}
          alt="social icon"
        />

        <Image
          {...Active}
          className={`opacity-0 group-active:opacity-100 ${imageStyles}`}
          alt="social icon"
        />
      </a>
    </div>
  );
};

export default memo(SocialIcon);
