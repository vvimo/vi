import { loginByUsername, logout, getUserInfo, join } from '@/api/login'
import { cardAdd, cardInfo } from '@/api/card'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    nickname: '',
    number: '',
    photo: '',
    email: '',
    phone: '',
    wechat: '',
    qq: '',
    card: '',
    token: getToken()
  },

  mutations: {
    SET_NICKNAME: (state, nickname) => {
      state.nickname = nickname
    },
    SET_NUMBER: (state, number) => {
      state.number = number
    },
    SET_PHOTO: (state, photo) => {
      state.photo = photo
    },
    SET_EMAIL: (state, email) => {
      state.email = email
    },
    SET_PHONE: (state, phone) => {
      state.phone = phone
    },
    SET_WECHAT: (state, wechat) => {
      state.wechat = wechat
    },
    SET_QQ: (state, qq) => {
      state.qq = qq
    },
    SET_CARD: (state, card) => {
      state.card = card
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername ({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        loginByUsername(userName, userInfo.password).then(response => {
          const data = response.data.data
          commit('SET_TOKEN', data.token)
          setToken(data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo ({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          const data = response.data.data[0]
          commit('SET_NICKNAME', data.nickname)
          commit('SET_NUMBER', data.number)
          commit('SET_PHOTO', data.photo)
          commit('SET_EMAIL', data.email)
          commit('SET_PHONE', data.phone)
          commit('SET_WECHAT', data.wechat)
          commit('SET_QQ', data.qq)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut ({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NUMBER', '')
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut ({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 注册
    Join ({ commit }, userInfo) {
      const userName = userInfo.userName.trim()
      return new Promise((resolve, reject) => {
        join(userName, userInfo.password).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // card添加
    CardAdd ({ commit }, item) {
      return new Promise((resolve, reject) => {
        cardAdd(item).then(response => {
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // card添加
    CardInfo ({ commit }, item) {
      return new Promise((resolve, reject) => {
        cardInfo(item).then(response => {
          const data = response.data.data[0]
          commit('SET_CARD', data.name)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user
