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
        test: /\.(csv|png)$/,
        use: [
          {
            loader: "file-loader",
            options: { outputPath: "./public" }
          }
        ]
      },
      {
        test: /\.jsx?/,
        include: resolve(__dirname, "./src"),
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  }
};

module.exports = config;
