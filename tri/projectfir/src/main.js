// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//引入vue
import Vue from 'vue';
//引入路由
import vueRouter from "vue-router";
import routes from "./router/router.js";
import store from "./store/";
import "./config/rem.js";
//引入'./config/env'中的routerMode
import {routerMode} from "./config/env";
Vue.use(vueRouter);

//利用mint-ui的插件实现msite.vue页面中的无缝轮播
import mintui from "mint-ui";
Vue.use(mintui);
import "mint-ui/lib/style.css";

const router = new vueRouter({
  routes,
  mode: routerMode,
	strict: process.env.NODE_ENV !== 'production',
	scrollBehavior (to, from, savedPosition) {
	    if (savedPosition) {
		    return savedPosition
		} else {
			if (from.meta.keepAlive) {
				from.meta.savedPosition = document.body.scrollTop;
			}
		    return { x: 0, y: to.meta.savedPosition || 0 }
		}
	}
  
})

//Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
})
