import Vue from 'vue'
import App from './App.vue'
import router from './router/index' // router路由
// import router from './store/index'
import store from './store/index' // store 仓库
// import store from './router/store'
import Vant from 'vant'
import VeeValidate, { Validator } from 'vee-validate'
// 导入VeeValidate的中文包
import zhCN from 'vee-validate/dist/locale/zh_CN'
import 'vant/lib/index.css'
import './styles/index.less'
Vue.use(Vant)
// 配置插件
Vue.use(VeeValidate, {
// 文本框触发验证的事件，默认是input
// 如果为空的话，文本框输入过程中不验证，需要调用validate方法验证
  events: ''
})
// 配置中文
Validator.localize('zhCN', zhCN)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
