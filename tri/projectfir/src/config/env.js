/*
解决环境导致后端接口变换问题
可以在不同环境的机器上设置不同的 NODE_ENV，这个字段可以换成其他自定义的。

解决步骤
1.修改代码里的后端地址配置
利用 process.env.NODE_ENV这个字段来判断。（process是node全局属性，直接用就行了）

2.在linux上设置环境变量
export NODE_ENV=dev

纯单页应用，一般是用nginx进行请求转发

*/ 
/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 * 
 */
let baseUrl="https://elm.cangdu.org";
let routerMode="hash";
let imgBaseUrl="";

if (process.env.NODE_ENV == 'development') {
    imgBaseUrl = '/img/';

}else if(process.env.NODE_ENV == 'production'){
	baseUrl = '//elm.cangdu.org';
    imgBaseUrl = '//elm.cangdu.org/img/';
}

export {
	baseUrl,
	routerMode,
	imgBaseUrl,
}
