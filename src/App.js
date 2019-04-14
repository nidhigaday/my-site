import * as React from "react";

import "./styles/app.css";
import TabContainer from "./components/tab-container";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <main className="app-main">
          <TabContainer />
        </main>
      </div>
    );
  }
}

export default App;
