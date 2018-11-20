# webpack vue support

## vue basic

### install config
npm vue ``` npm install vue --save ```, 开发环境支持
vue-loader loader支持vue 文件加载 ``` npm install vue-loader --save-dev ``` 支持方式

### 安装 babel 支持 es6 装换Es5 支持
插件转换支持 ``` npm install babel babel-core babel-eslint babel-loader babel-preset-vue-app --save-dev ```

添加 babelrc 文件配置, 支持 es6 vue-app 转换

### vue-loader 
vue-loader 支持对 .vue 文件加载安装, 修改配置文件支持 
命令 ``` npm install vue-loader vue-html-loader vue-template-compiler  --save-dev ``` 

### vue-router 
install 方式 ``` npm install vue-router --save ``` vue-router 支持路由导入方式, 不同界面导航方式。

定义 router-link router-view 定义Link路由方式, js 文件方式, 支持 :id 路由。

### vuex 监控状态修改
支持页面 Application State 监控方式 ``` npm install vuex --save ``` 
1. Vue.use(Vuex) 方式, 适用 Vuex 状态管理
2. Vuex 基于状态管理方式, 动态状态修改

### 组件之间的数据传递
1. 父子组件之间数据传递, (通过标签参数修改数据)
2. 兄弟之间组件传递
3. 基于 Bus.js 组件, 事件传递方式 ``` npm install bus --save ```, 支持事件方式 消息传递

### 后端数据交互
1. 后台nodejs 服务提供, ``` npm install koa koa-router --save-dev ``` 提供访问方式
2. koa2 提供跨域访问方式 ``` npm install koa2-cors --save-dev ```
3. axios 后台Server 数据访问 ``` npm install axios --save ```
封装request 参数, 用于http 请求方式

### 前端样式支持
1. element-ui 
2. css less 提供 样式数据的转换方式。