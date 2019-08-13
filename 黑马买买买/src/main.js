import Vue from 'vue'
import App from './App.vue'
// 导入全局样式
import './assets/css/style.css'
// 导入 axios
import axios from 'axios'
// 挂载成全局
Vue.prototype.$axios = axios;
// 设置及地址
axios.defaults.baseURL = 'http://111.230.232.110:8899/'

// 设置让axios发请求时默认带cookie   （axios请求默认是不带cookie的）
axios.defaults.withCredentials = true;





// 导入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入moment
import moment from 'moment'
// 全局事件过滤器
// 全局过滤器
// 参数1：过滤器的名字
// 参数2：过滤器的回调函数
Vue.filter("formatTime", function (value, format) {
  return moment(value).format(format)
})


// 导入组件
import index from './components/index.vue'
import detail from './components/detail.vue'
import login from './components/login.vue'
import user from './components/user/user.vue'
import userindex from "./components/user/index.vue"
import list from "./components/user/list.vue"
import orderdetail from "./components/user/detail.vue"


// 导入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter)




// 注册路由
const routes = [

  { path: '/index', component: index },
  { path: '/detail/:id', component: detail },
  // 默认到首页index  重定向
  { path: '', redirect: '/index' },

  { path: '/login', component: login },
  { path: '/user', component: user,
  
  // 设置子路由规则
  children:[
    {path:'userindex',component:userindex},
    { path: 'list', component: list },
    { path: 'detail', component: orderdetail },
    { path: '', redirect: 'userindex' },
  ]},

]


// 创建路由
const router = new VueRouter({
  routes
})




// 全局守卫
// 他是vue里面的路由插件,,前面已经创建了路由
router.beforeEach((to, from, next) => {
  // to 是路由要去到那个页面,from表示从哪个路由过来的,,,比如去首页
  // console.log(to,from);   打印得到 '/index', '/login'
  // next 是一个方法,,相当于调用它就放行,
  if (to.path.indexOf('/user') != -1) {
    axios.get(`site/account/islogin`).then(res => {
      if (res.data.code == "nologin") {
        Vue.prototype.$message.error('请登录')
        router.push('/login')
        return
        } else {
        next();
      }
    })
  }else{
    next();
  }
})




Vue.config.productionTip = false

new Vue({
  // 实例上挂载路由
  router,
  render: h => h(App),
}).$mount('#app')
