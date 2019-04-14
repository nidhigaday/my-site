import * as React from "react";

import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";
import Nav from "react-bootstrap/Nav";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

class Tabs extends React.Component {
  render() {
    return (
      <TabContainer id="structure" defaultActiveKey="home">
        <div className="main-container flow-row">
          <Nav variant="tabs" bsPrefix="nav-section flow-column">
            <Nav.Link eventKey="home" bsPrefix="nav-brand">
              NG
            </Nav.Link>
            <Nav.Item bsPrefix="nav-tabs flow-column">
              <Nav.Link eventKey="about" bsPrefix="nav-link">
                About
              </Nav.Link>
              <Nav.Link eventKey="resume" bsPrefix="nav-link">
                Resume
              </Nav.Link>
              <Nav.Link eventKey="contact" bsPrefix="nav-link">
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item bsPrefix="social-links">
              <a href="https://www.linkedin.com/in/nidhigaday/" target="_blank">
                <IoLogoLinkedin font-size="inherit" />
              </a>
              <a href="https://github.com/nidhigaday" target="_blank">
                <IoLogoGithub font-size="inherit" />
              </a>
            </Nav.Item>
          </Nav>
          <TabContent bsPrefix="child-tab-content flow-row">
            {/* <div className="flow-column"> */}
            <TabPane eventKey="home" bsPrefix="child-tab flow-column">
              <h2>Hi I'm Nidhi</h2>
              <p>I am a Front-End Developer. I build stuff!</p>
            </TabPane>
            <TabPane eventKey="about" bsPrefix="child-tab flow-column">
              About me, I am awesome!
            </TabPane>
            <TabPane eventKey="resume" bsPrefix="child-tab flow-column">
              Resume, oh this is my resume!
            </TabPane>
            <TabPane eventKey="contact" bsPrefix="child-tab flow-column">
              Contact me on my email!
            </TabPane>
            {/* </div> */}
          </TabContent>
        </div>
      </TabContainer>
    );
  }
}

export default Tabs;
