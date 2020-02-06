const path = require("path");

module.exports = {
  entry: "./app/assets/scripts/App.js", // The file which we want webpack to watch and process and bundle lives at this path

  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  watch: true
};
