function pluralize (time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

function timeStamp (time) {
  if (typeof time === 'object') {
    time = Date.parse(time) / 1000
  } else {
    time = Date.parse(new Date(time)) / 1000
  }
  return time
}

export function timeAgo (time) {
  time = timeStamp(time)
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

export function parseTime (time, cFormat) {
  if (arguments.length === 0) {
    return null
  }

  time = timeStamp(time)

  if ((time + '').length === 10) {
    time = +time * 1000
  }

  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    date = new Date(parseInt(time))
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const timeStr = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]
    if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
    if (result.length > 0 && value < 10) {
      value = '0' + value
    }
    return value || 0
  })
  return timeStr
}

export function formatTime (time, option) {
  time = timeStamp(time)
  time = +time * 1000
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) { // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日 ' + d.getHours() + '时 ' + d.getMinutes() + '分'
  }
}

/* 数字 格式化 */
export function nFormatter (num, digits) {
  const si = [
    { value: 1E18, symbol: 'E' },
    { value: 1E15, symbol: 'P' },
    { value: 1E12, symbol: 'T' },
    { value: 1E9, symbol: 'G' },
    { value: 1E6, symbol: 'M' },
    { value: 1E3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

export function html2Text (val) {
  const div = document.createElement('div')
  div.innerHTML = val
  return div.textContent || div.innerText
}

export function toThousandslsFilter (num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

// 根据身份证号码获取性别
export function getIdCardSex (UUserCard) {
  if (UUserCard === '') return
  return parseInt(UUserCard.substr(16, 1)) % 2 === 1 ? '男' : '女'
}

// 根据身份证号码获取出生日期
export function getIdCardBirth (UUserCard) {
  if (UUserCard === '') return
  return UUserCard.substring(6, 10) + '-' + UUserCard.substring(10, 12) + '-' + UUserCard.substring(12, 14)
}

// 根据身份证号码获取年龄
export function getIdCardAge (UUserCard) {
  if (UUserCard === '') return
  let myDate = new Date()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  let age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1
  if ((UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) === month) && UUserCard.substring(12, 14) <= day) age++
  return age
}
