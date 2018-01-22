import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/views/layout'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)
export const routerMap = [
  {
    path: '/',
    component: layout,
    redirect: 'home',
    children: [
      { path: 'home', component: _import('pages/home/index'), name: 'home' },
      { path: 'html', component: _import('pages/html/index'), name: 'html' },
      { path: 'css', component: _import('pages/css/index'), name: 'css' },
      { path: 'js', component: _import('pages/js/index'), name: 'js' },
      { path: 'case', component: _import('pages/case/index'), name: 'case' }
    ]
  }, {
    path: '*',
    component: layout,
    redirect: 'home'
  }
]

export default new Router({
  mode: 'history',
  routes: routerMap
})
