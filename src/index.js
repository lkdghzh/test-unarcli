import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/css/base'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  render: h => h(App)
})

// hmr necessary
if (module.hot) {
  module.hot.accept()
}
