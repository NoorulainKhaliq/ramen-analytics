const api = require("express").Router();
const csv = require("csvtojson");

let csvFilePath = "./server/ramen.csv";
let {
  parseData,
  maxMonthConsumption,
  getDat,
  totalCups
} = require("./functions");

//uses parseData function defined in the function file
api.get("/users", (req, res, next) => {
  csv()
    .fromFile(csvFilePath)
    .on("end_parsed", jsonArrObj => {
      // using 'end_parsed" so that work can be done once everything has been parsed
      res.send(parseData(jsonArrObj)); // sends parsed data to the frontend
    })
    .on("error", err => {
      console.log(err);
    });
});

//lists every ramen consumed
api.get("/cups", (req, res, next) => {
  csv()
    .fromFile(csvFilePath)
    .on("end_parsed", jsonArrObj => {
      let check = totalCups(jsonArrObj);
      res.send(totalCups(jsonArrObj));
    })
    .on("error", err => {
      console.log(err);
    });
});

api.get("/maxMonthCount", (req, res, next) => {
  csv()
    .fromFile(csvFilePath)
    .on("end_parsed", jsonArrObj => {
      res.send(maxMonthConsumption(jsonArrObj));
    })
    .on("error", err => {
      console.log(err);
    });
});

module.exports = api;
