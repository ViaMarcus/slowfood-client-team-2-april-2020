import React, { Component } from "react";
import Menu from "./components/Menu";
import NavBar from "./components/NavBar"
import MySidebar from "./components/MySidebar"

class App extends Component {
  state = {
    sidebar: "none"
  }

  onChangeHandler = sidebar => {
    if (this.state.sidebar == sidebar) {
      this.setState({ sidebar: "none" });
    } else {
      this.setState({ sidebar });
    }
  };

  render() {
    return (
      <div>
        <NavBar 
          onClick={this.onChangeHandler}
        />
        <MySidebar
          style={{"padding-top":"100px"}}
          form={this.state.sidebar}
        >
        </MySidebar>
        <Menu />
      </div>
    );
  }
}

export default App;
