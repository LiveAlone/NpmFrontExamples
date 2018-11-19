const path = require('path');

// 定义不同的路径支持
const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const TEM_PATH = path.resolve(ROOT_PATH, 'template');

module.exports = {
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
  }
};


