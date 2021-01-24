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
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
              plugins: ["@babel/plugin-transform-runtime"],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: srcPathExtend("index.html"),
    }),
  ],
};
