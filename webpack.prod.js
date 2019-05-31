const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./assets/js/dashboard.jsx",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "public/js/"),
    publicPath: "/js/",
    filename: "dashboard.js"
  }
};
