import * as React from "react";

import TabContent from "react-bootstrap/TabContent";
import TabPane from "react-bootstrap/TabPane";

import "../styles/tab-content.css";
import LandingPage from "./landing";
import AboutPage from "./about";
import ResumePage from "./resume";
import ContactPage from "./contact";

function TabContentSection() {
  return (
    <TabContent bsPrefix="child-tab-content flow-row">
      <LandingPage />
      <AboutPage />
      <ResumePage />
      <ContactPage />
    </TabContent>
  );
}

export default TabContentSection;
