const csv = require("csvtojson");
const express = require("express");
const app = express();
const path = require("path");
let csvFilePath = "./server/ramen.csv";
//let parseData = require("./functions");
let { parseData, maxMonthConsumption, getDate } = require("./functions");

// i'm using csvtojson which is a wrapper over papa-parser --converts csv files to json
// json objects are easier to work with and easier to send to the frontend as well and can be easily manipulated

//middleware -- serves up public folder to port
app
  .use(express.static(path.join(__dirname, "..", "public")))
  .use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

//uses parseData function defined in the function file
app.get("/users", (req, res, next) => {
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
app.get("/cups", (req, res, next) => {
  csv()
    .fromFile(csvFilePath)
    .on("end_parsed", jsonArrObj => {
      res.send(jsonArrObj);
    })
    .on("error", err => {
      console.log(err);
    });
});

//returns an object of each month with the day most cups were consumed
//the formatting isn't the best for this - so it might change later
//maxMonthConsumption function is defined in the functions.js file
app.get("/maxMonthCount", (req, res, next) => {
  csv()
    .fromFile(csvFilePath)
    .on("end_parsed", jsonArrObj => {
      res.send(maxMonthConsumption(jsonArrObj));
    })
    .on("error", err => {
      console.log(err);
    });
});

//starts the server
app.listen(3000, (req, res, next) => {
  console.log("connected");
});
