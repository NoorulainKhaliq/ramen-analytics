import React, { Component } from "react";
import { render } from "react-dom";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  render() {
    return (
      <div className="allUsers">
        <h1>"hey"</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));
