const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    filename: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    assetModuleFilename: "[name][ext]",
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 51200,
  },
  devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
      { test: /\.(png|svg|jpeg|jpg|gif)$/i, type: "asset/resource" },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      title: "My web page",
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
