import * as React from "react";

import Nav from "react-bootstrap/Nav";

import { Navs, socialLinks } from "../db/navigations";
import "../styles/navs.css";

function NavigationSection() {
  return (
    <Nav variant="tabs" bsPrefix="nav-section flow-column">
      <Nav.Link eventKey="home" bsPrefix="nav-brand">
        NG
      </Nav.Link>
      <Nav.Item bsPrefix="nav-tabs flow-column">
        {Navs.map(({ key, label }) => (
          <Nav.Link eventKey={key} bsPrefix="nav-link">
            {label}
          </Nav.Link>
        ))}
      </Nav.Item>
      <Nav.Item bsPrefix="social-links">
        {socialLinks.map(({ link, icon }) => (
          <a href={link} target="_blank">
            {icon}
          </a>
        ))}
      </Nav.Item>
    </Nav>
  );
}

export default NavigationSection;
