import * as React from "react";

import TabPane from "react-bootstrap/TabPane";

function LandingPage() {
  return (
    <TabPane eventKey="home" bsPrefix="child-tab flow-column">
      <h2>Hi I'm Nidhi</h2>
      <p>I am a Front-End Developer. I build stuff!</p>
    </TabPane>
  );
}

export default LandingPage;
