const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const settings = {
  distPath: path.join(__dirname, "dist"),
  srcPath: path.join(__dirname, "src"),
};

function srcPathExtend(subpath) {
  return path.join(settings.srcPath, subpath);
}

module.exports = {
  entry: srcPathExtend("index.js"),
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  output: {
    path: settings.distPath,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: srcPathExtend("index.html"),
    }),
  ],
};