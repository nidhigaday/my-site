import * as React from "react";

import TabPane from "react-bootstrap/TabPane";

import BuildingBoxes from "./building-boxes";
import "../styles/landing.css";

function LandingPage() {
  return (
    <TabPane eventKey="home" bsPrefix="child-tab ">
      <div className="flow-column landing">
        <div className="greetings column-center">
          <h2>Hi I'm Nidhi</h2>
          <p>I am a Front-End Developer. I build stuff!</p>
        </div>
        <BuildingBoxes />
      </div>
    </TabPane>
  );
}
export default LandingPage;
