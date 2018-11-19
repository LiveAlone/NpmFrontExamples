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
