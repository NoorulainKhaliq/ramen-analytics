import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Image, rounded, Accordion } from "react-bootstrap";
import createBrowserHistory from "history/createBrowserHistory";
import { importAll, filterRamen } from "../functions";
const images = importAll(
  require.context("../../../images", false, /\.(png|jpe?g|svg)$/)
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
    let ramenImg = images.find(fileName => fileName.includes(currentRamen));
    this.setState({
      currentRamen: ramen[0],
      cupsSold: ramen[1],
      ramenImg: "/" + ramenImg
    });
  }

  render(props) {
    let currentRamen = this.state.currentRamen;
    let cupsSold = this.state.cupsSold;
    return (
      <div className="single-cup">
        <p>Ramen: {currentRamen}</p>
        <p>Sold: {cupsSold}</p>
        <img src={this.state.ramenImg} />
      </div>
    );
  }
}
