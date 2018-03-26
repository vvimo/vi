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
      { path: 'gallery', component: _import('pages/gallery/index'), name: 'gallery' },
      { path: 'article', component: _import('pages/article/index'), name: 'article' },
      { path: 'work', component: _import('pages/work/index'), name: 'work' },
      { path: 'about', component: _import('pages/about/index'), name: 'about' },
      { path: 'info/:id', component: _import('pages/info/index'), name: 'info' }
    ]
  }, {
    path: '/login',
    component: _import('login/index')
  }, {
    path: '*',
    component: layout,
    redirect: 'home'
  }
]

export default new Router({
  routes: routerMap
})
