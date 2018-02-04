import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.path.substring(0, 8) === '/console') {
    if (getToken()) {
      if (to.path === '/login') {
        next({ path: '/console' })
        NProgress.done()
      } else {
        if (store.getters.number === '') { // 判断当前用户是否已拉取完user_info信息
          store.dispatch('GetUserInfo').then(res => { // 拉取user_info
            next()
          }).catch(() => {
            next({ path: '/console/user' })
            NProgress.done()
          })
        } else {
          next()
        }
      }
    } else {
      next({ path: '/login' })
      NProgress.done()
    }
  } else {
    next()
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
