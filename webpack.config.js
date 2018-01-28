"use strict";
const { resolve } = require("path");

var config = {
  entry: "./src/client/main.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
    publicPath: "./public"
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: resolve(__dirname, "./src"),
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.csv$/,
        loader: "csv-loader",
        options: {
          dynamicTyping: true,
          header: true,
          skipEmptyLines: true
        }
      }
    ]
  }
};

module.exports = config;
