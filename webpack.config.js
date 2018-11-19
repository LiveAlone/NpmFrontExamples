const path = require('path');

// 定义不同的路径支持
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const TEM_PATH = path.resolve(ROOT_PATH, 'template');

// plugin 插件方式 导入 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  // mode: 'development',  // 指定mode, WARN 实践 通过命令行指定
  entry: {
    // main: '@/index.js'
    main: '@/vue_main.js'
  },
  output: {
    path: DIST_PATH,
    filename: '[name].js'
    // ,publicPath: '/' // 注意影响html 文件的build!!!
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    contentBase: DIST_PATH
  },
  devtool: '#eval-source-map',
  resolve: {
    extensions: ['*', '.js', '.vue', '.json'],
    alias:{
      '@': SRC_PATH,
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules:[
      { test: /\.vue$/, use: ['vue-loader'] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  },
  plugins: [
    new ManifestPlugin(),
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(TEM_PATH, 'vue_index.html')
    }),
    new VueLoaderPlugin()
  ]
};


