import * as React from "react";

import TabPane from "react-bootstrap/TabPane";
import "../styles/landing.css";

function LandingPage() {
  return (
    <div id="home" className="child-tab flow-column landing">
      <div className="greetings">
        <h2>Hi I'm Nidhi</h2>
        <p>I am a Front-End Developer. I build stuff!</p>
      </div>
    </div>
  );
}

// function LandingPage() {
//   return (
//     <TabPane eventKey="home" bsPrefix="child-tab flow-column landing">
//       <div className="greetings">
//         <h2>Hi I'm Nidhi</h2>
//         <p>I am a Front-End Developer. I build stuff!</p>
//       </div>
//     </TabPane>
//   );
// }

export default LandingPage;
