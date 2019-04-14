import * as React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Fade from "react-reveal/Fade";

import "./App.css";
import Tabs from "./tabs";

class App extends React.Component {
  state = {
    showLink: "#home"
  };

  render() {
    return (
      <div className="App">
        <main className="App-main">
          {/* <header /> */}
          <Tabs />
          {/* <footer>links copyright</footer> */}
        </main>
      </div>
    );
  }
}

export default App;
