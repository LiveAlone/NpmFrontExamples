const path = require('path');

// 定义不同的路径支持
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const TEM_PATH = path.resolve(ROOT_PATH, 'template');

// plugin 插件方式 导入 
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: '@/index.js'
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias:{
      '@': SRC_PATH,
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '前端项目搭建',
      inject: 'body',
      filename: 'index.html',
      template: path.resolve(TEM_PATH, 'index.html')
    })
  ]
};


