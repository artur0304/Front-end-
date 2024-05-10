const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  performance: {
    maxAssetSize: 5000000,
    maxEntrypointSize: 5000000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'news.html',
      template: './src/pages/news.html'
    }),    
    new HtmlWebpackPlugin({
      filename: 'photo.html',
      template: './src/pages/photo.html'
    }),    
    new HtmlWebpackPlugin({
      filename: 'rozklad.html',
      template: './src/pages/rozklad.html'
    }),
    new CopyPlugin({
      patterns: [{ 
        from: "./src/assets", 
        to: "./assets" 
      }],
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
};
