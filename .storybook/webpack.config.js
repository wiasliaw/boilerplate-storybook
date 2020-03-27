'use strict';

module.exports = {
  resolve: {
    extensions: [
      ".ts", ".tsx", ".js"
    ]
  },
  module: {
    rules: [
      {
        test: /\.story\.tsx?$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: '@storybook/source-loader',
            options: { parser: 'typescript' },
          }
        ],
        enforce: 'pre',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
};
