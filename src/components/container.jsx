import * as React from "react";

import TabContainer from "react-bootstrap/TabContainer";
import { GoHome, GoInfo, GoDeviceMobile } from "react-icons/go";
import {
  GiSmartphone,
  GiBarracksTent,
  GiHighShot,
  GiBowman,
  GiRoundStar,
  GiMailbox,
  GiAstronautHelmet,
  GiBookshelf,
  GiArcher
} from "react-icons/gi";
import { TiInfoLargeOutline } from "react-icons/ti";
import classNames from "classnames";

import ContentSection from "./content";

class TabContainerSection extends React.Component {
  state = {
    activeNav: "about"
  };

  render() {
    return (
      <div className="wrapper">
        <ContentSection sectionChange={this.setActiveNav} />
        <div className="nav-section">
          <div className="logo">
            <div className="initials">NG</div>
            <span className="fullname">Nidhi Gaday</span>
          </div>
          <nav className="navs" id="appNav">
            <a
              className={classNames("navs__link", {
                active: "home" === this.state.activeNav
              })}
              target="_self"
              href="#home"
            >
              <GoHome />
              <span>Welcome</span>
            </a>
            <a className="navs__link" target="_self" href="#about">
              <TiInfoLargeOutline />
              <span>About</span>
            </a>
            <a className="navs__link" target="_self" href="#work">
              <GiAstronautHelmet />
              <span>Work</span>
            </a>
            <a className="navs__link" target="_self" href="#education">
              <GiBookshelf />
              <span>Education</span>
            </a>
            <a className="navs__link" target="_self" href="#skills">
              <GiBowman />
              <span>Skills</span>
            </a>
            <a className="navs__link" target="_self" href="#contact">
              <GiSmartphone />
              <span>Contact</span>
            </a>
          </nav>
        </div>
      </div>
    );
  }

  setActiveNav = activeNav => this.setState({ activeNav });
}

export default TabContainerSection;
