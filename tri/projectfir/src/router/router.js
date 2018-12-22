import App from "../App"

//引入组件
const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
//const foo = r => require.ensure([], () => r(require('../components/foot.vue')), 'foo')
const profile = r => require.ensure([], () => r(require('../page/profile/profile')), 'profile')
const login = r => require.ensure([], () => r(require('../page/login/login')), 'login')
const balance = r => require.ensure([], () => r(require('../page/balance/balance.vue')), 'balance')
const benifit = r => require.ensure([], () => r(require('../page/benifit/benifit.vue')), 'benifit')
const point = r => require.ensure([], () => r(require('../page/points/point.vue')), 'point')
const msite = r => require.ensure([], () => r(require('../page/msite/msite.vue')), 'msite')
const city = r => require.ensure([], () => r(require('../page/city/city.vue')), 'city')
const food = r => require.ensure([], () => r(require('../page/food/food.vue')), 'food')
export default [{
    path: "/",
    component: App, //顶层路由，对应index.html
     children:[
      //当地址为空时，跳转到home页面
      {
        path:"",
        redirect:"/home",
      },

      //首页城市列表
      {
        path: '/home',
        component: home,
        name:"home",
      },
      //个人页面
      {
        path: '/profile',
        component: profile,
        name:"profile",
      },
      //登录页面
      {
        path: '/login',
        component: login,
        name:"login",
      },
      //我的余额
      {
        path: '/balance',
        component: balance,
        name:"balance",
      },
      //优惠页面
      {
        path: '/benifit',
        component: benifit,
        name:"benifit",
      },
      //积分页面
      {
        path: '/point',
        component: point,
        name:"point",
      },
      //积分页面
      {
        path: '/msite',
        component: msite,
        name:"msite",
      },
      //测试城市页面
      {
        path: '/city/:cityid',
        component: city,
        name:"city",
      },
      //食品页面
      {
        path: '/food',
        component: food,
        name:"food",
      },
    ]
}]



