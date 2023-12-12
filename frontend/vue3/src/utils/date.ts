// 转时间戳： Date.parse(time)
export function turnParse(time: any) {
  return Date.parse(time)
}

export function add0(time: any) {
  return time < 10 ? `0${time}` : time
}
// 日期时间格式
export function comDateFormat(iTime: any, strFormat: string) {
  if (undefined == iTime) {
    iTime = new Date().getTime()
  }

  if (undefined == strFormat) {
    strFormat = 'yyyy-MM-dd hh:mm:ss'
  }

  const dateObj = new Date(iTime)

  const o: any = {
    'M+': dateObj.getMonth() + 1, // 月份
    'd+': dateObj.getDate(), // 日
    'h+': dateObj.getHours(), // 小时
    'm+': dateObj.getMinutes(), // 分
    's+': dateObj.getSeconds(), // 秒
    'q+': Math.floor((dateObj.getMonth() + 3) / 3), // 季度
    S: dateObj.getMilliseconds() // 毫秒
  }

  // 取年份
  if (/(y+)/.test(strFormat)) {
    strFormat = strFormat.replace(
      RegExp.$1,
      `${dateObj.getFullYear()}`.substr(4 - RegExp.$1.length)
    )
  }

  // 取其他部分
  for (const k in o) {
    if (new RegExp(`(${k})`).test(strFormat)) {
      strFormat = strFormat.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : `00${o[k]}`.substr(`${o[k]}`.length)
      )
    }
  }

  return strFormat
}

// 传入时间戳
export function parseTime(time: number, is = true) {
  // export function parseTime (time:any, cFormat = '') {
  if (!time) {
    return ''
  }
  // eslint-disable-next-line no-unused-vars
  // const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time == 'object') {
    date = time
  } else {
    if (`${time}`.length === 10) time *= 1000
    date = new Date(time)
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
  const ymd = `${formatObj.y}-${add0(formatObj.m)}-${add0(formatObj.d)}`
  const hmd = is
    ? `${add0(formatObj.h)}:${add0(formatObj.i)}:${add0(formatObj.s)}`
    : ''
  return `${ymd} ${hmd}`
}

// 传入时间戳
export function dealWithDate(time: number, option = false) {
  if (!time) return ''
  const d: any = new Date(time)
  const now = Date.now()
  const diff = (now - d) / 1000
  if (diff < 30) {
    return '刚刚'
  }
  if (diff < 3600) {
    // less 1 hour
    return `${Math.ceil(diff / 60)}分钟前`
  }
  if (diff < 3600 * 24) {
    return `${Math.ceil(diff / 3600)}小时前`
  }
  if (diff < 3600 * 24 * 2) {
    return '一天前'
  }
  if (option) {
    return parseTime(time)
  }
  // return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  return `${d.getMonth() + 1}月${d.getDate()}日`
}

// 两个时间相隔天数   传入时间戳    day未传取当前时间
export function septumDay(time: string | number, day: string | number) {
  const t: any = new Date(time)
  const d: any = day ? new Date(day) : Date.now()
  const diff = (d - t) / 1000
  if (diff <= 3600 * 24) {
    return 1
  }
  return Math.floor(diff / (3600 * 24))
}

// 图标显示时间处理，时间差，传入时间戳
export function timeDiff(startTime: number, endTime: number) {
  const diff: number = (endTime - startTime) / 1000
  if (diff < 3600 * 24) {
    return 'h'
  }
  if (diff < 3600 * 24 * 30) {
    return 'd'
  }
  if (diff < 3600 * 24 * 30 * 12) {
    return 'm'
  }
  return 'y'
}

// 转国际时间
export const turnUTC = (time: any) => {
  if (!time) return ''
  return new Date(time).toISOString()
}
// 国际时间转标准时间戳
export const utcTurn = (time: any) => new Date(time).getTime()

// 中国标准时间转时间戳
export function dateToMs(date: any) {
  return new Date(date).getTime()
}
