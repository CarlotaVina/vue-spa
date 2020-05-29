import Vue from 'vue'

import AppLayout from './theme/Layout.vue'
import router from './router'
import store from './vuex/index.js'

Vue.component('app', {
  template: `

`
})

const app = new Vue({
  router,
  ...AppLayout,
  store
})

global.vm = app
Vue.config.devtools = true

export { app, router, store }
