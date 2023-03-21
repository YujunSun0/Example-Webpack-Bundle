const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    home: "./src/index.js",
  },

  output: {
    path: path.resolve(__dirname, "docs"), // join이나 resolve를 사용 가능하다.
    filename: "[name].bundle.js",
    clean: true, //dist 폴더 정리하는 용도
  },

  devtool: "source-map", // 빌드한 파일과 원본 파일을 연결시켜줌

  mode: "development", // 번들링한 코드를 보기 편하게 해주는 모드

  optimization: {
    minimizer: [new TerserWebpackPlugin(), new CssMinimizerPlugin()],
  },

  module: {
    // 로더를 세팅해주는 옵션으로 js이외의 다른 언어들을 js 문법으로 변환시켜줌
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader", // 구형 브라우저에서 지원되는 ES5의 문법으로 변환해주는 '트랜스파일링'을 위한 로더.
        exclude: /node_modules/, //여기있는 파일들은 제외
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        exclude: /node_modules/,
      },
      // {
      //   // write image files under 10k to inline or copy image files over 10k
      //   test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
      //   use: [
      //     {
      //       loader: "url-loader",
      //       options: {
      //         limit: 10000,
      //         fallback: "file-loader",
      //         name: "images/[name].[ext]",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "movie site",
      template: "./public/index.html",
      inject: "body", // 빌드했을 때, 자바스크립트 파일을 head가 아닌 body에 inject하기위함
      filename: "index.html",
      favicon: "./icons8-favorite-office-32.png",
    }),
    new MiniCssExtractPlugin({ filename: "App.css" }),
    new BundleAnalyzerPlugin({
      openAnalyzer: "false",
      analyzerMode: "true",
    }),
  ],
};
