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
      entry: ["@babel/polyfill", APP_DIR],
      output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, "../dist"),
      },
      devtool: PLATFORM === "production" ? "source-map" : "inline-source-map",
      resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
          "@": path.resolve(__dirname, "../src/"),
        },
      },
      module: {
        rules: [
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.(ts)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "ts-loader",
                options: { compilerOptions: { noEmit: false } },
              },
            ],
          },
          {
            test: /\.(scss)$/,
            use: [
              PLATFORM === "production"
                ? {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: "",
                    },
                  }
                : "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.css$/,
            use: ["css-loader"],
          },
          {
            test: /\.(gif|woff|woff2|eot|ttf|otf)$/i,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "static/fonts/[name].[ext]",
                },
              },
            ],
          },
          {
            test: /\.(jpg|png)$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: false,
                  name: "static/images/[name].[ext]",
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
          // favicon: "./public/index.html",
          hash: true,
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
        port: 3030,
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
