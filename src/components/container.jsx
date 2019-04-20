import * as React from "react";

import TabContainer from "react-bootstrap/TabContainer";

import NavigationSection from "./navs";
import TabContentSection from "./content";

class TabContainerSection extends React.Component {
  render() {
    return (
      <TabContainer id="structure" defaultActiveKey="home">
        <NavigationSection />
        <TabContentSection />
      </TabContainer>
    );
  }
}

export default TabContainerSection;
