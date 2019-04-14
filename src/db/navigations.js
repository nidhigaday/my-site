import * as React from "react";

import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export const Navs = [
  {
    key: "about",
    label: "About"
  },
  {
    key: "resume",
    label: "Resume"
  },
  {
    key: "contact",
    label: "Contact"
  }
];

export const socialLinks = [
  {
    link: "https://www.linkedin.com/in/nidhigaday/",
    icon: <IoLogoLinkedin font-size="inherit" />
  },
  {
    link: "https://github.com/nidhigaday",
    icon: <IoLogoGithub font-size="inherit" />
  }
];
