const path = require("path");

module.exports = {
  entry: "./web/src/index.ts",
  module: {
    rules: [
      {
        test: /\.web.+\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "web", "assets"),
  },
  mode: "production",
};
