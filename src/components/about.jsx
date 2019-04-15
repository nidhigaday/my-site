import * as React from "react";

import TabPane from "react-bootstrap/TabPane";

import "../styles/about.css";
import * as Data from "../db/about";

function AboutPage() {
  return (
    <div id="about" className="child-tab flow-column">
      <div className="flow-row about">
        <div className="image-pane">sdkfbsjdfbs</div>
        <div className="info-pane">
          <p>{Data.Intro}</p>
          <p>{Data.Statemanet}</p>
          <p>{Data.Prefix}</p>
          {/* <div>{Data.Education}</div> */}
        </div>
      </div>
    </div>
  );
}

// function AboutPage() {
//   return (
//     <TabPane eventKey="about" bsPrefix="child-tab flow-column">
//       <div className="flow-row about">
//         <div className="image-pane">sdkfbsjdfbs</div>
//         <div className="info-pane">
//           <p>{Data.Intro}</p>
//           <p>{Data.Statemanet}</p>
//           <p>{Data.Prefix}</p>
//           {/* <div>{Data.Education}</div> */}
//         </div>
//       </div>
//     </TabPane>
//   );
// }

export default AboutPage;
