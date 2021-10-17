import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'

import KeSearchBox from './keep-ui/ke-search-box.vue'
import KeButton from './keep-ui/ke-button.vue'
import KeDialog from './keep-ui/ke-dialog.vue'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import CodeBlock from './components/codeblock'

// use
Vue.use(mavonEditor)


Vue.component("ke-search-box",KeSearchBox)
Vue.component(KeButton.name,KeButton)
Vue.component(KeDialog.name,KeDialog)
Vue.component("CodeBlock",CodeBlock)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


