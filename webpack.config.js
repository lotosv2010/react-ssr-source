const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node', // 打包内容将要运行的环境
  mode: 'development',
  entry: './src/server/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'server.js'
  },
  // 检测所有引入的node核心模块，
  // 并且告诉webpack不要把核心模块打包到server.js中去
  externals: [webpackNodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-transform-runtime'
          ]
        }
      }
    ]
  }
}