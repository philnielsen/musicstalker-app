import Vue from 'vue'
import axios from 'axios'

import Modal from 'vue-js-modal'
import App from './App'
import router from './router'
import store from './store'
import 'materialize-css/dist/css/materialize.css'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(Modal)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
