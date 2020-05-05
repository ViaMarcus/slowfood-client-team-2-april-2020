import React, { Component } from "react";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Menu />
      </div>
    );
  }
}

export default App;
