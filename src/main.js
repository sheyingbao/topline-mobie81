import Vue from 'vue'
import App from './App.vue'
import router from './store/store'
import store from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
