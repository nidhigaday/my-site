import * as React from "react";

import TabPane from "react-bootstrap/TabPane";

import "../styles/about.css";
import * as Data from "../db/about";

function AboutPage() {
  return (
    <TabPane eventKey="about" bsPrefix="child-tab">
      <div className="flow-row about">
        <div className="image-pane">
          <div className="flow-row about-image" />
        </div>
        <div className="info-pane">
          <p>{Data.Intro}</p>
          <p>{Data.Prefix}</p>
          <p>{Data.Statemanet}</p>
          <div className="education">
            {Data.Education.map(({ study, location, school }) => (
              <div className="edu-inner">
                <h5>{study}</h5>
                <p>
                  <em>{location}</em>
                </p>
                <p>{school}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TabPane>
  );
}

export default AboutPage;
