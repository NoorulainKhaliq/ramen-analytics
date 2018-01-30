const api = require("express").Router();

const {
  getCustomers,
  getMostActiveDays,
  getSalesByType,
  getStreaks,
  getVisitsAsJson
} = require("./ramenFunctions");

//uses getCustomers function defined in the function file
//customers
api.get("/customers", (req, res, next) => {
  getVisitsAsJson()
    .then(json => res.send(getCustomers(json)))
    .catch(err => res.status(500).send(err));
});

//lists every ramen consumed
api.get("/sales/by-type", (req, res, next) => {
  getVisitsAsJson()
    .then(json => res.send(getSalesByType(json)))
    .catch(err => res.status(500).send(err));
});

//returns the most active day by month
api.get("/sales/by-day/most-active", (req, res) => {
  getVisitsAsJson()
    .then(json => res.send(getMostActiveDays(json)))
    .catch(err => res.status(500).send(err));
});

//returns streaks of increased ramen consumption
api.get("/sales/streaks", (req, res) => {
  getVisitsAsJson()
    .then(json => res.send(getStreaks(json)))
    .catch(err => res.status(500).send(err));
});

module.exports = api;
