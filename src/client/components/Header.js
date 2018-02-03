import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="nav">
        <header>
          <div className="pull-right">
            <Link to="/customers">
              <button type="button" className="btn btn-secondary btn-lg">
                Customers
              </button>
            </Link>
            <Link to="/sales/by-type">
              <button type="button" className="btn btn-secondary btn-lg">
                Sales
              </button>
            </Link>
          </div>
        </header>
        <hr />
      </div>
    );
  }
}
