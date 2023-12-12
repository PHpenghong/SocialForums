import lock from './lock'
import { instanceFn } from './request'
import { asyncComposeStop } from '@/utils/tools'

const dealWithFn = (fn: Function) => {
  return (config: any) =>
    new Promise(async (resolve, reject) => {
      try {
        const res = await fn(config)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
}

const instance = async (reqObj: any) => {
  // const reqFn: Function = instanceFn(reqObj)
  // const res = await lock(reqFn)
  // const fn: Function = asyncComposeStop(lock, dealWithFn(req))
  // console.log('🚀 ~ file: index.ts:21 ~ instance ~ fn:', fn)
  // const res = fn(reqObj)
  const res = instanceFn(reqObj)()
  console.log('🚀 ~ file: index.ts:8 ~ instance ~ res:', res)
  return res
}

export default instance
