import * as React from "react";

import Nav from "react-bootstrap/Nav";

import { Navs, socialLinks } from "../db/navigations";
import "../styles/navs.css";

function NavigationSection() {
  return (
    <nav className="nav-section">
      <div className="nav-brand flow-column">
        <a href="#home">NG</a>
      </div>
      <ul className="nav-list flow-column">
        {Navs.map(({ key, label }) => (
          <li>
            <a href={`#${key}`} className="nav-link">
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="social-links flow-row">
        {socialLinks.map(({ link, icon }) => (
          <a href={`#${link}`} target="blank">
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
}

// function NavigationSection() {
//   return (
//     <Nav variant="tabs" bsPrefix="nav-section">
//       <Nav.Link eventKey="home" bsPrefix="nav-brand">
//         NG
//       </Nav.Link>
//       <Nav.Item bsPrefix="nav-tabs flow-column">
//         {Navs.map(({ key, label }) => (
//           <Nav.Link eventKey={key} bsPrefix="nav-link">
//             {label}
//           </Nav.Link>
//         ))}
//       </Nav.Item>
//       <Nav.Item bsPrefix="social-links">
//         {socialLinks.map(({ link, icon }) => (
//           <a href={link} target="blank">
//             {icon}
//           </a>
//         ))}
//       </Nav.Item>
//     </Nav>
//   );
// }

export default NavigationSection;
