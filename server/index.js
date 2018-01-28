const csv = require("csvtojson");
const express = require("express");
const app = express();
const path = require("path");
let csvFilePath = "./server/ramen.csv";
let parseData = require("./functions");

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

//cups route -- display all cups consumed in general

//starts the server
app.listen(3000, (req, res, next) => {
  console.log("connected");
});
