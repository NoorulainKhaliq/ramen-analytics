import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

let filterRamen = (currRamen, allCups) => {
  let selectedRamen;
  let cups;
  allCups.filter(ramen => {
    if (Object.keys(ramen)[0] === currRamen) {
      selectedRamen = Object.keys(ramen)[0];
      cups = Object.values(ramen)[0];
    }
  });
  return [selectedRamen, cups];
};

export default class SingleRamen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRamen: "",
      cupsSold: ""
    };
  }

  componentWillMount() {
    let allCups = this.props.allCups;
    const customHistory = createBrowserHistory();
    let ramenObj = customHistory.location.pathname.split("/");
    let currentRamen = ramenObj[ramenObj.length - 1];
    let ramen = filterRamen(currentRamen, allCups);
    this.setState({ currentRamen: ramen[0], cupsSold: ramen[1] });
  }

  render(props) {
    let currentRamen = this.state.currentRamen;
    let cupsSold = this.state.cupsSold;
    console.log(this.state.currentRamen, this.state.cupsSold);
    return (
      <div className="single-cup">
        <p>Ramen: {currentRamen}</p>
        <p>Sold: {cupsSold}</p>
      </div>
    );
  }
}
