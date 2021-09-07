const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const base = require('./webpack.base');
const { merge } = require('webpack-merge');

module.exports = merge(base, {
  target: 'node', // 打包内容将要运行的环境
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
        test: /\.css$/,
        use: [
          'isomorphic-style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  }
});
