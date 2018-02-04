"use strict";
const { resolve } = require("path");

var config = {
  entry: "./src/client/index.js",
  output: {
    path: __dirname,
    filename: "./public/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(csv|png|jpe?g|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
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
