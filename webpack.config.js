const path = require('path');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.component\.less$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'less-loader',
          }
        ],
      },
      {
        test: /\.less/,
        exclude: /\.component\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ],
      },
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        loader: '@ngtools/webpack'
      },
    ]
  },

  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: './src/main.ts',
      sourceMap: true
    })
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
};