# Webpack 打包管理

install 安装执行
```
  npm install webpack webpack-cli --save-dev
```

配置文件 webpack.config.js 打包支持, 配置输入输出模块, 打包文件导出路径等等。

## mode 模式开发方式
mode 开发模式: development, production, none, 不同的模式, 不同的插件支持。
支持不同模式下, 不同的配置方式
```javascript
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }
  if (argv.mode === 'production') {
    //...
  }
```
通过 设置 ``` devtool: 'inline-source-map', ```, 方式 追踪对应的异常文件

## 热部署方式
  1. watch 监控方式， 监控文件变化， 自动编译方式 ``` "watch": "webpack --watch", ```
  2. webpack server ``` npm install --save-dev webpack-dev-server ``` 启动对应的服务配置 
    json 中数据配置方式
    ```
    "start": "webpack-dev-server --open", 

    webpack config js 文件修改方式
    devServer: {
      historyApiFallback: true,
      noInfo: true,
      contentBase: DIST_PATH
    },
    ```
  3. 三方插件集成方式
  导入方式 ``` npm install --save-dev express webpack-dev-middleware ```
  webpack.config.js output 指定路径 ``` publicPath: '/' ```
  配置 server.js 启动 node server.js 启动页面路径方式

热部署模块支持, 支持 HotModuleReplacementPlugin, --hot 热部署替换方式。

## chunk 拆分main.js
entry point 入口打包引入文件， 但是 打包生成单个 js 文件, 文件太大需要拆分。 (js 逻辑 分块, 懒加载方式)
代码拆分方式: https://webpack.docschina.org/guides/code-splitting/ 
1. chunk 拆分公用
```
 optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
```
2. import 通过异步加载方式支持, js 单个文件过大的情况。

