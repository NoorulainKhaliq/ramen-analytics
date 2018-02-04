import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

let filterRamen = (currRamen, allCups) => {
  console.log(images);
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

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../../../public/images", false, /\.(png|jpe?g|svg)$/)
);

export default class SingleRamen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRamen: "",
      cupsSold: "",
      ramenImg: ""
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
    console.log(images, "from render");
    let currentRamen = this.state.currentRamen;
    let cupsSold = this.state.cupsSold;
    return (
      <div className="single-cup">
        <p>Ramen: {currentRamen}</p>
        <p>Sold: {cupsSold}</p>
      </div>
    );
  }
}
