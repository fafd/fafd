# projectfir

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


自己补充：
1.使用npm（需要安装node环境）全局安装webpack，打开命令行工具输入：npm install webpack -g
2.新建一个文件夹作为项目存放地，在当前项目点右键运行命令行输入：vue init  webpack 项目名称 很多内容都是yes，但是其中的 use eslint to lint you code? 输入no
3.安装依赖npm install
4.启动项目 npm run  dev

1.入口js文件是src文件下的main.js
2.入口路由文件是src文件夹目录下的router文件夹下的router.js
3.先在main.js文件下引入路由 ，并且将路由挂载到Vue上面，new一个实例化路由对象（也要挂载到Vue的实例化对象上去），将src文件夹目录下的router文件夹下的router.js引入到全局去，并且挂载的new的实例化路由对象上去，可以使用router-view和router-link，主入口文件要引用router-view
4.关于vuex，src文件夹下创建一个store文件夹，store文件下创建5个子文件，分别是：
    action.js(用于存放异步请求的方法)
    getters.js
    index.js(引入相关组件和vuex,可以定义全局的数据,要将vuex挂载到vue上面去，要将引入的组件和数据用export default导出去)
    mutation-types.js(定义常量)
    mutation.js(定义一些函数)
5.关于样式，src文件夹下的style文件夹下的common.scss和minx.scss,在vue页面中style标签会加一个lang=scss属性，然后需要引入相关的样式文件如@import '../../style/minx.scss'，所以需要安装一些插件，如：npm install vue-style-loader --save 
    npm install css-loader --save
    npm install sass-loade --save
    npm install node-sass  --save
6.src文件夹下的service文件夹下的getData.js
7.src文件夹下的config文件夹下的env.js、fetch.js、mUtils.js、rem.js
