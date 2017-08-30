const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './js/app.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 8080,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      filename: 'api/index.html'
    })
  ],
  output: {
    filename: 'assignment.bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    loaders: [
      { 
        test: /\.js$/, 
        loader: 'babel-loader', 
        exclude: "/node_modules/", 
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-react',
            'babel-preset-stage-1',
          ].map(require.resolve),
        }
      },
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: "/node_modules/", 
        query: {
          presets: [
            'babel-preset-es2015',
            'babel-preset-react',
            'babel-preset-stage-1',
          ].map(require.resolve),
        }
      }
    ]
  }
};