const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


const APP_DIR = path.resolve(__dirname, "../src");
//const apiUrl = require("./apiUrl.js");

module.exports = (env) => {
  const { PLATFORM, VERSION } = env;
  return merge([
    {
      entry: [APP_DIR],
      output: {
         filename: '[name].[contenthash].js',
         path: path.join(__dirname, "../dist"),
       },
      devtool: PLATFORM === "production" ? "source-map" : "inline-source-map",
      resolve: {
        extensions: [".js"],
        alias: {
          "@": path.resolve(__dirname, "../src/"),
          public: path.resolve(__dirname, "../public/"),
        },
      },
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.(scss)$/,
            use: [
              PLATFORM === "production"
                ? MiniCssExtractPlugin.loader
                : "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif|woff|woff2|eot|ttf|otf)$/i,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "dirname/[contenthash].[ext]",
                },
              },
            ],
          },
          {
            test: /\.svg$/,
            loader: "svg-inline-loader",
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
         // favicon: "./public/index.html",
          hash: true
        }),
        new webpack.DefinePlugin({
          "process.env.VERSION": JSON.stringify(env.VERSION),
          "process.env.PLATFORM": JSON.stringify(env.PLATFORM),
        }),
      ],
      devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, "../dist"),
        compress: true,
        port: 2000,
      },
    //   externals: {
    //     // global app config object
    //     config: JSON.stringify({
    //       apiUrl: apiUrl.API_BACKEND_URL,
    //     }),
    //   },
 
    },
  ]);
};
