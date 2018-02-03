import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <div className="header" mt={2} mb={2}>
        <nav>
          <div xs={6} md={4} style={{ margin: 10 }}>
            <Link to="/">
              <Button
                bsStyle="warning"
                type="button"
                className="btn btn-secondary btn-lg"
              >
                Home
              </Button>
            </Link>
          </div>
          <div xs={6} md={4} style={{ margin: 10 }}>
            <Link to="/customers">
              <Button
                bsStyle="warning"
                type="button"
                className="btn btn-secondary btn-lg"
              >
                Customers
              </Button>
            </Link>
          </div>
          <div xs={6} md={4} style={{ margin: 10 }}>
            <Link to="/sales/by-type">
              <Button
                bsStyle="warning"
                type="button"
                className="btn btn-secondary btn-lg"
              >
                Sales
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}
