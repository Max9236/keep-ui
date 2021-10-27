import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'

import KeSearchBox from './keep-ui/ke-search-box.vue'
import KeButton from './keep-ui/ke-button.vue'
import KeDialog from './keep-ui/ke-dialog.vue'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

// 下拉组件
import Dropdown from './keep-ui/dropdown/dropdown'
import DropdownMenu from './keep-ui/dropdown/dropdow-menu'
import DropdownMenuItem from './keep-ui/dropdown/dropdow-menu-item'

// 代码块
import CodeBlock from './components/codeblock'

// 布局
import keLayOut from './keep-ui/layout/ke-layout-document.vue';
// 侧边栏
import keSidebar from './keep-ui/sidebar/index.vue';
// use
Vue.use(mavonEditor)



Vue.component("ke-search-box",KeSearchBox)

Vue.component(KeButton.name,KeButton)
Vue.component(KeDialog.name,KeDialog)

Vue.component(Dropdown.name,Dropdown)
Vue.component(DropdownMenu.name,DropdownMenu)
Vue.component(DropdownMenuItem.name,DropdownMenuItem)

Vue.component(keLayOut.name,keLayOut)

Vue.component(keSidebar.name,keSidebar)

Vue.component("CodeBlock",CodeBlock)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


