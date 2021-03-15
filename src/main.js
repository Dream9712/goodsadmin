import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/** 引用全局文件 */
import './plugins/createAjax'
import './plugins/element_ui'
import './styles/reset.scss'
import './styles/common.scss'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
