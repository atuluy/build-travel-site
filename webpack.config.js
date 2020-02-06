const path = require("path");

const postCSSPlugins = [
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer")
];

module.exports = {
  entry: "./app/assets/scripts/App.js", // The file which we want webpack to watch and process and bundle lives at this path

  output: {
    filename: "bundled.js",
    path: path.resolve(__dirname, "app")
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } }
        ]
      }
    ]
  }
};
