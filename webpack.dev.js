const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/js/index.js",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    //compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/html/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    alias: {
      '@css': path.resolve(__dirname, 'src/css'),
      '@html': path.resolve(__dirname, 'src/html'),
      '@img': path.resolve(__dirname, 'src/img'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "index.js"
  }
};
