const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
module.exports = {
  entry: {
    main: './src/index.js',
    projects: './src/projects.js',
    video: './src/video.js',
    request: './src/request.js'},
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    // publicPath: path.resolve('./dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
      },
      {
        test: /\.(sass|scss)$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(pug|jade)$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.wav$|\.ico$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img',
              publicPath: '../img'
            },  
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|otf|woff|woff2)$/,
        use: [
         {
           loader: 'file-loader',
           options: {
            name: '[name].[ext]',
            outputPath: '/fonts',
            publicPath: '../fonts'
           }
         }
       ]
      }
    ]
  },
  plugins: [ 
    new ExtractTextPlugin({filename: 'css/main.css'}),
    new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/pug/index.pug',
    chunks: ['main']
    }),
    new HtmlWebpackPlugin({
    filename: 'projects.html',
    template: './src/pug/projects.pug',
    chunks: ['projects']
    }),
    new HtmlWebpackPlugin({
    filename: 'video.html',
    template: './src/pug/video.pug',
    chunks: ['video']
    }),
    new HtmlWebpackPlugin({
    filename: 'request.html',
    template: './src/pug/request.pug',
    chunks: ['request']
    }),
    new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
    }),
  ]
};