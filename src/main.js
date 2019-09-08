import Vue from 'vue'
import App from './App.vue'
import router from './router/index' // router路由
// import router from './store/index'
import store from './store/store' // store 仓库
// import store from './router/store'
import Vant from 'vant'
import 'vant/lib/index.css'
import './styles/index.less'
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
