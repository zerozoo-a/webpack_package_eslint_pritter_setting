const path = require("path");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
// const pmmmwh = require("@pmmmwh/react-refresh-webpack-plugin");
//use only test

module.exports = {
  name: "demo",
  // mode: "development",
  //use only test
  mode: "production",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: {
      import: "./client.jsx",
    },
    // another: {
    //   import: [
    //     "./components/About",
    //     "./components/ErrorPage",
    //     "./components/Footer",
    //   ],
    //   dependOn: "shared",
    // },
    // shared: "styled-components",
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: [
            "@babel/plugin-proposal-class-properties",
            // "react-refresh/babel",
            //use only test
          ],
        }, //endOptions
      },
      {
        test: /\.(txt)/,
        type: "asset/source",
      },
    ], //endRules
  }, //endModules
  // plugins: [new pmmmwh()],
  // plugins: [new BundleAnalyzerPlugin()],
  //use only test
  output: {
    filename: "[name].bundle.js",
    // chunkFilename: "[name].[chunkhash].js",
    path: path.join(__dirname, "dist"),
    publicPath: "dist/",
    clean: true,
  },
  devServer: {
    publicPath: "/dist/",
    hot: true,
  },

  // optimization: {
  //   splitChunks: {
  //     name: "vendor",
  //     // test: /[\\/]node_modules[\\/]/,
  //     chunks: "initial",
  //     minSize: 50000,
  //     minChunks: 1,
  //   },
  // },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]^(react|react-dom)[\\/]/,
  //         name: "vendor",
  //         chunks: "initial",
  //       },
  //     },
  //   },
  // },
  optimization: {
    // runtimeChunk: "single",
  },
  //optimizationEnd,
};
