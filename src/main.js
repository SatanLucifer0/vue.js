import Vue from 'vue'
import App from './App.vue'

// css要运用到全局,在main.js里导入
import './assets/css/index.css'
// 导入字体图标
import './assets/css/iconfont.css'


// 导入路由
import VueRouter from 'vue-router'
// 调用路由
Vue.use(VueRouter)

// 导入elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 调用ui
Vue.use(ElementUI);


// 导入axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 设置基地址
axios.defaults.baseURL = 'https://autumnfish.cn/'  




// 导入组件
import slider from './components/slider.vue'
import results from "./components/results.vue"
import player from './components/player.vue'
import mv from './components/mv.vue'
import comment from './components/comment.vue'





// 注册路由
const routes=[
 {path:'/slider',component:slider},
 {path:'/results/:songName',component:results},
 {path:'/player/:id',component:player},
 {path:'/mv/:mvid',component:mv},
 {path:'/comment/:id',component:comment},
]



// 创建路由
const router = new VueRouter({
  routes
})



Vue.config.productionTip = false

new Vue({
  // 挂载路由
  router,
  render: h => h(App),
}).$mount('#app')
