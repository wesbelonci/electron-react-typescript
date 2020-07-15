const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = path.resolve(__dirname, '..')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    mainFields: ['main', 'module', 'browser']
  },
  entry: path.resolve(rootPath, 'src', 'App.tsx'),
  target: 'electron-renderer',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
              '@babel/preset-env',
              '@babel/preset-react'
          ],
          plugins: [
              '@babel/transform-runtime'
          ]
        }
      }
    ]
  },

  devServer: {
    contentBase: path.join(rootPath, 'dist/renderer'),
    historyApiFallback: {
      verbose: true,
      disableDotRule: false,
    },
    port: 4000,
    publicPath: '/',
    compress: true,
    noInfo: false,
    stats: 'errors-only',
    inline: true,
    lazy: false,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    watchOptions: {
      aggregateTimeout: 300,
      ignored: /node_modules/,
      poll: 100,
    },
  },

  output: {
    path: path.resolve(rootPath, 'dist/renderer'),
    libraryTarget: 'commonjs2',
    filename: 'js/[name].js',
    publicPath: './'
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]
}
