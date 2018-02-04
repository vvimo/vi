// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import i18n from './lang'
import elementUI from 'element-ui'
import happyScroll from 'vue-happy-scroll'
import VueQuillEditor from 'vue-quill-editor'

import component from './components'
import * as filters from './filters'

import 'vue-happy-scroll/docs/happy-scroll.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './utils/flexible'
import './permission'
import './mock'

Vue.config.productionTip = false

Vue.use(VueQuillEditor)
Vue.use(happyScroll)
Vue.use(elementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// register global utility components.
Object.keys(component).forEach(key => {
  Vue.component(key, component[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
