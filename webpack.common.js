const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PATHS = {
  src: path.join(__dirname, './src'),
  dist: path.join(__dirname, './dist'),
  css: 'css/'
};
module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    woonder: `${PATHS.src}/stylus/woonder/woonder.styl`
  },
  module: {
    rules: [
      
      {
        test: /\.(styl)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `./postcss.config.js`
              }
            }
          },
          {
            loader: 'stylus-loader',
            options: {
              sourceMap: true,
              url: false
            }
          }

        ]
      }
    ]
  },
  plugins: [

    new MiniCssExtractPlugin({
      filename: `${PATHS.css}[name].css`,
    })
  ],
};
