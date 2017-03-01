module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'boundle.js',
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
    ],
  },
};
