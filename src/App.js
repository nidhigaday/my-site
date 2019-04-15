import * as React from "react";

import "./styles/app.css";
import Container from "./components/container";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <main className="app-main">
          <Container />
        </main>
      </div>
    );
  }
}

export default App;
