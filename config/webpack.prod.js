const merge = require("webpack-merge");
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// Configs
const baseConfig = require("./webpack.common.js");

const prodConfiguration = (env) => {
  return merge([
    {
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin(),
          new OptimizeCssAssetsPlugin({
            cssProcessorOptions: {
              preset: "advanced",
              safe: true,
              map: { inline: false },
            },
          }),
        ],
      },

      plugins: [
        new MiniCssExtractPlugin({
          filename: "main.[hash].css",
        }),
        new OptimizeCssAssetsPlugin(),
        new CleanWebpackPlugin(),
      ],
    },
  ]);
};

module.exports = (env) => {
  return merge(baseConfig(env), prodConfiguration(env));
};
