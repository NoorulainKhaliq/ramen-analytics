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
  componentDidMount() {
    axios
      .get("/users")
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render() {
    console.log(this.state.users, "from frontend");
    return (
      <div className="allUsers">
        <h1>"hey"</h1>
      </div>
    );
  }
}

render(<App />, document.getElementById("main"));
