import * as React from "react";

import TabPane from "react-bootstrap/TabPane";

function AboutPage() {
  return (
    <TabPane eventKey="about" bsPrefix="child-tab flow-column">
      About me, I am awesome!
    </TabPane>
  );
}

export default AboutPage;
