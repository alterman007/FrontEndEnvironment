const path = require('path');
const autoprefixer = require('autoprefixer');
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'boundle.js',
    publicPath: 'build',
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: [
            'transform-decorators-legacy',
            'transform-class-properties',
          ],
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        loaders: [
          'style',
          'css',
          'postcss',
          'sass',
        ],
      },
    ],
  },
  postcss: () => [
    autoprefixer({
      browsers: ['last 5 versions'],
    }),
  ],
};
