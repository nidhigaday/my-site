import * as React from "react";

import TabContainer from "react-bootstrap/TabContainer";

import NavigationSection from "./navs";
import TabContentSection from "./tab-content";

class Tabs extends React.Component {
  render() {
    return (
      <TabContainer id="structure" defaultActiveKey="home">
        <div className="main-container flow-row">
          <NavigationSection />
          <TabContentSection />
        </div>
      </TabContainer>
    );
  }
}

export default Tabs;
