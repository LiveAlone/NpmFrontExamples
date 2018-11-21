# NpmFrontExamples
init 一个前端项目, 用于学习不同的前端架构, 不同的网页类型, 路由方式等等。

## 项目目录结构
src js 业务逻辑文件相关内容, 通过目录区分不同的业务规则 

template html 文件目录。

src/assets 存放资源文件 css img 等
1. style .css .less 支持样式问价结构。
2. pic jpg png 等 不同的资源文件加载方式。
3. data 存储数据文件内容

src/components 支持绘制不同的组件
1. app 网页整体架构支持
2. commons 通用界面, 支持数据的显示修改方式。
3. util 通用数据 常量配置方式

src/router 导航界面路由方式

## 项目查询结构
Home 主进入界面, Main 通过 layout 导航方式, 获取对应的主页信息

## npm 依赖包管理方式
初始化 npm 依赖包管理 ``` npm init -y ```

## webpack 依赖包管理方式
npm 安装 webpack 依赖包内容, 见 doc/webpack_doc.md
  1. 不同模式开发, webpack-dev-server 服务方式启动

## lodash 安装支持
lodash 数组简化操作支持 ``` npm install --save lodash ``` 

## css style load 加载支持
npm 样式文件加载器 ```npm install --save-dev style-loader css-loader```
rules 支持 use 对应的loader

## file-loader 
通过File-loader ``` npm install --save-dev file-loader ``` 支持 img 图片资源加载。 Font 字体文件加载方式。

## webpackage-html-plugin 
WebpackHtmlPlugin 支持 生成 index.html ``` npm install html-webpack-plugin --save-dev ```
dist 自动生成 html 插件内容。

## cvs xml loader 文件配置加载方式
cvs xml 文件内容loader  加载方式 ``` npm install --save-dev csv-loader xml-loader ```

## output 相关插件
  1. 上面 html-webpack-plugin html 插件, 生成定义的html 文件
  2. clean-webpack-plugin 通过插件方式, 启动的时候, 删除 dist ``` npm install --save-dev clean-webpack-plugin ```
  3. webpack-manifest-plugin 插件 生成manifest 打包目录清单 ``` npm install --save-dev webpack-manifest-plugin ```

## vue 模块开发集成
doc vue_doc.md vue 不同的模块支持

## pug vue support
pug html 插件编译生成方式, 支持自定义语法标签 ``` npm install pug pug-loader --save-dev ```
pug, 拦截方式 ``` npm install --save-dev pug-plain-loader ```

<b>todo transition pug 参数方式</b>

## Tag 标签相关支持
1. v1 基础 webpack vue element-ui 集成配置方式
