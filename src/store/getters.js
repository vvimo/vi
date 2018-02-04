const getters = {
  nickname: state => state.user.nickname,
  number: state => state.user.number,
  photo: state => state.user.photo,
  email: state => state.user.email,
  phone: state => state.user.phone,
  wechat: state => state.user.wechat,
  qq: state => state.user.qq,
  card: state => state.user.card,
  token: state => state.user.token
}

export default getters
