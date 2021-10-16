import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'

import keSearchBox from './keep-ui/ke-search-box.vue'

Vue.component("ke-search-box",keSearchBox)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


