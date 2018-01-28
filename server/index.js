const csv = require("csvtojson");
const express = require("express");
const app = express();
const path = require("path");
let csvFilePath = "./server/ramen.csv";

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

// possible GET route
// using require ('./ramen.csv') as filepath throws an error of unexpected token
// and using filepath './ramen.csv throws an error of module cannot be found
// i suspect it has something to do with webpack not loading the file - possibly because its watching main.js
// i have attempted to add loaders to webpack, but that also did not work
// after much trial and error I was able to load the file using an absolute path
// but soon realized that would not work anywhere but on my machine
// played around with the file path using "path.resolve", but eventually figured i didn't need "path.resolve" either,
// i could just use "./server/ramen.csv" directly and have the file load.
// i'm still a little uncertain why i'm having errors with webpack loading the .csv file.

app.get("/users", (req, res, next) => {
  csv()
    .fromFile(csvFilePath)
    .on("end_parsed", jsonArrObj => {
      console.log(jsonArrObj); // able to view data from csv file as a jSon obj
    })
    .on("error", err => {
      console.log(err);
    });
});

//starts the server
app.listen(3000, (req, res, next) => {
  console.log("connected");
});
