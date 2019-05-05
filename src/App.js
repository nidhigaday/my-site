import * as React from "react";

import "./styles/app.css";
import "./styles/new-style.scss";
import Container from "./components/container";
import AnimatedBackground from "./components/background";

import { GiRoundStar } from "react-icons/gi";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <main className="app">
          <AnimatedBackground />
          <Container />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
