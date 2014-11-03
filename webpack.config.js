var webpack = require("webpack"),
    exercises = require("./exercises");

var plugins = [
  // require 'react/addons' when we require 'react'
  new webpack.NormalModuleReplacementPlugin(/^react$/, 'react/addons'),
  new webpack.optimize.CommonsChunkPlugin("vendor.bundle.js", 2),
];

if (process.env.NODE_ENV === "production") {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  plugins.push(new webpack.optimize.DedupePlugin());
  plugins.push(new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify("production")
    }
  }));
}

var config = {
  cache: true,
  entry: {
    styles: "./client/styles.less",
    test: "./client/test.jsx",
    todos: "./client/todos/todos.jsx"
  },
  output: {
    path: __dirname + "/public/js",
    filename: "[name].bundle.js",
    publicPath: "/js/"
  },
  devtool: "eval-source-map",
  module: {
    loaders: [
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.jsx$/, loader: "jsx?harmony&sourceMap" }
    ]
  },
  plugins: plugins
};

exercises.forEach(function(ex, idx) {
  var num = idx + 1;
  config.entry["ex" + num] = "./client/ex" + num + "/ex" + num + ".jsx";
});

module.exports = config;
