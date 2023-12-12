/**
 * list结构转tree
 * @param data list原始数据
 * @param pid 最外层pid
 */
export const listToTree = (
  arr: any[],
  pid: string | number = 0,
  pidStr = 'parentId'
) => {
  const map: { [key: string]: any[] } = {}
  const res: any[] = []
  for (let i = 0, len = arr.length; i < len; i++) {
    const obj = arr[i]
    const parentId = obj[pidStr]
    const { id } = obj
    if (!map[id]) {
      map[id] = []
    }
    if (parentId == pid) {
      obj.children = map[id]
      res.push(obj)
      continue
    }
    if (!map[parentId]) {
      map[parentId] = []
    }
    obj.children = map[id]
    map[parentId].push(obj)
  }
  return res
}

/**
 * 两次编码url
 * @param url
 * @returns
 */
export function decode(url: string): string {
  return decodeURIComponent(decodeURIComponent(url))
}

/**
 * 两次解码url
 * @param url
 * @returns
 */
export function encode(url: string): string {
  return encodeURIComponent(encodeURIComponent(url))
}

/**
 * localStorage设置有效期
 * @param name localStorage设置名称
 * @param data 数据对象
 * @param pExpires 有效期(默认100年)
 */
export function setLocal(
  name: string,
  data: any,
  pExpires = 1000 * 60 * 60 * 24 * 365 * 100
): void {
  const d = data as any
  d.startTime = Date.now()
  d.expires = pExpires
  localStorage.setItem(name, JSON.stringify(data))
}

/**
 * 获取localStorage对象并转成对应的类型
 * @param name localStorage设置名称
 */
export function getLocal<T>(name: string): T {
  const l = localStorage.getItem(name)
  const local = JSON.parse(l !== null ? l : '{}') as unknown as T
  return local
}

/**
 * 判断localStorage有效期是否失效
 * @param name localStorage设置名称
 */
export async function useLocal(name: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const local = getLocal<any>(name)
    if (local.startTime + local.expires < Date.now()) {
      reject(Error(`${name}已超过有效期`))
    }

    resolve(local)
  })
}

/**
 * 函数节流
 * @param time 间隔时间
 */
export function throttle(time = 500): () => Promise<void> {
  let timer: any = null
  let firstTime = true
  return () =>
    new Promise((resolve: any) => {
      if (firstTime) {
        resolve()
        firstTime = false
      } else if (!timer) {
        timer = setTimeout(() => {
          if (timer) clearTimeout(timer)
          timer = null
          resolve()
        }, time)
      }
    })
}

export function makeMap(str: string, expectsLowerCase = false) {
  const map = Object.create(null)
  const list = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? (val: any) => map[val.toLowerCase()]
    : (val: any) => map[val]
}

export const clone = (target: any): any => {
  let obj: any
  if (typeof target === 'object') {
    if (target instanceof Array) {
      obj = []
      for (const i in target) {
        obj.push(clone(target[i]))
      }
    } else if (target === null) {
      obj = null
    } else if (target.constructor === RegExp) {
      obj = target
    } else {
      obj = {}
      for (const key in target) {
        obj[key] = clone(target[key])
      }
    }
  } else {
    obj = target
  }
  return obj
}

const jsonType: { [key: string]: string } = { '{': '}', '[': ']' }

// 对象或数组类型 转 字符串
export const dealWithJs = (data: any | any[]) => {
  let startStr = ''
  let centerStr = ''
  let endStr = ''
  const type = typeof data
  if (type !== 'object') {
    return type === 'string' ? `'${data}'` : data
  }
  if (data instanceof Array) {
    startStr = '['
    endStr = jsonType[startStr]
    data.map((item: any, index: number) => {
      centerStr = `${centerStr}${dealWithJs(item)}${
        index === data.length - 1 ? '' : ',\n'
      }`
      return item
    })
  } else if (data === null) {
    return null
  } else if (data.constructor === RegExp) {
    return data
  } else {
    startStr = '{'
    endStr = jsonType[startStr]
    const arr = Object.keys(data)
    arr.map((item: any, index: number) => {
      centerStr = `${centerStr}${item}: ${dealWithJs(data[item])}${
        index === arr.length - 1 ? '' : ',\n'
      }`
      return item
    })
  }
  return `${startStr}\n\n${centerStr}\n\n${endStr}`
}

// 函数编排
// 1. 同步编排
export const compose =
  (...rest: any) =>
  (startNum: any) =>
    rest.reduce((total: any, item: any) => item(total), startNum)

// 2. 异步编排

export const asyncCompose =
  (...rest: any) =>
  (startNum: any) =>
    rest.reduce(
      (total: any, item: any) => total.then((result: any) => item(result)),
      Promise.resolve(startNum)
    )
// 3. 异步编排且中断
export const asyncComposeStop =
  (...rest: any) =>
  (startNum: any) =>
    rest
      .reduce(
        (total: any, item: any) =>
          total.then((result: any) => {
            if (result === 'abort') {
              // 中断并返回特定值
              throw new Error('Compose aborted')
            }
            return item(result)
          }),
        Promise.resolve(startNum)
      )
      .catch((error: any) => {
        if (error.message === 'Compose aborted') {
          // 中断时返回特定值
          return 'Aborted value'
        }
        // 其他错误处理
        throw error
      })

/**
 *
 * @param {Object} config 请求参数，配置等
 * @param {Function} fn Promise方法
 * @param {Object} { exec, execFn } 是否立即执行，false时返回可执行函数, execFn: 是否返回promise方法
 * @returns
 */
export const dealWithFn = (
  config: any,
  fn: Function,
  { exec = false, execFn = false } = {}
) => {
  console.log('dealWithFn----', exec, execFn)

  if (exec && !execFn) {
    return fn(config)
  } else if (execFn) {
    return () =>
      new Promise(async (resolve, reject) => {
        try {
          const res = await fn(config)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      })
  } else {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await fn(config)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
  }
}
