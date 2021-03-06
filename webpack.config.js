const HtmlWebPackPlugin = require('html-webpack-plugin')
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'stylus-loader'
          ]
        })
      },
      {
        test: /\.(svg|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: './src/icon/favicon32.png',
      template: './src/index.html',
      filename: './index.html',
      inlineSource: '.(js|css|styl)$' // embed all javascript and css inline
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new ExtractTextPlugin('index.css')
  ],
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
}
