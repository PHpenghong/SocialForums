import axios, { AxiosResponse } from 'axios'
// import codeErr from '../codeErr'
// import { useUserStore } from '@/store/modules/user'
// import { useLocal } from '@/utils/tools'

// import { getToken } from '@/utils/auth'

export const whiteUrl: string[] = []

const instance = axios.create({
  timeout: 1000 * 100,
  responseType: 'json',
  headers: {
    // 'Content-Type': 'application/json'
  }
})

declare const window: Window & { __axiosCancelToken__: any }
if (!window.__axiosCancelToken__) window.__axiosCancelToken__ = {}

// 异常拦截处理器
// const errorHandler = (error: any) => {
//   const { response } = error
//   response && codeErr(response.data)
//   console.log(error.response)

//   if (
//     (error.response && error.response.status === 403) ||
//     error.response.data.code == 1004 ||
//     error.response.data.code == 1003
//   ) {
//     const { logout } = useUserStore()
//     logout()
//   }
//   Promise.reject(error)
// }

// const toLogin = () => {
//   const { logout } = useUserStore()
//   logout()
// }

// // 添加请求拦截器
instance.interceptors.request.use(
  async (config: any) => {
    console.log('in-----interceptors')

    return config
  },
  (error: any) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response
    // if (response.headers?.authorization) {
    //   const { setToken } = useUserStore()
    //   setToken(response.headers.authorization)
    // }
    // if (data.code != 0) {
    //   codeErr(data)
    // }
    return data
  },
  (error: any) => Promise.reject(error)
)

// export const reqFn =

export const instanceFn = (config: any) => {
  return () =>
    new Promise(async (resolve, reject) => {
      try {
        const res = await instance(config)
        resolve(res)
      } catch (error) {
        reject(error)
      }
    })
}

export default instance
