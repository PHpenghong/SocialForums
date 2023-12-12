import { listToTree, clone } from '@/utils/tools'
import { useUserStore } from '@/store/modules/user'

// 动态路由名称映射表
const modules = import.meta.glob('../views/**/**.vue')
const components: any = {
  Layout: (() => import('@/Layout/index.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >
}
Object.keys(modules).forEach((key) => {
  const nameMatch = key.match(/^\.\.\/views\/(.+)\.vue/)
  if (!nameMatch) return
  // 排除_Components文件夹下的文件
  if (nameMatch[1].includes('_Components')) return
  // 如果页面以Index命名，则使用父文件夹作为name
  const indexMatch = nameMatch[1].match(/(.*)\/Index$/i)
  let name = indexMatch ? indexMatch[1] : nameMatch[1]
  ;[name] = name.split('/').splice(-1)
  components[name] = modules[key] as () => Promise<typeof import('*.vue')>
})

const asyncRouter: any[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: components['404'],
    meta: {
      title: 'NotFound',
      icon: '',
      hidden: true
    },
    redirect: {
      name: '404'
    }
  }
]

const generatorDynamicRouter = (data: any[]): void => {
  if (data?.length === 0) {
    return
  }
  const { setRoutes } = useUserStore()
  const routerList: any[] = listToTree(data, 0)

  asyncRouter.forEach((v) => routerList.push(v))
  setRoutes(clone(routerList))

  dealWithComponents(routerList)
}

const dealWithComponents = (routerList: any[]) => {
  const f = (data: any[]) => {
    // const f = (data: any[], pData: any | null) => {
    for (let i = 0, len = data.length; i < len; i++) {
      const v: any = data[i]
      if (typeof v.component === 'string') {
        v.component = components[v.component]
      }
      // if (!v.meta.permission || (pData && v.meta.permission.length === 0)) {
      //   v.meta.permission =
      //     pData && pData.meta && pData.meta.permission
      //       ? pData.meta.permission
      //       : []
      // }
      if (v.children && v.children.length > 0) {
        f(v.children)
      }
    }
  }
  f(routerList)
}

export { components, generatorDynamicRouter, dealWithComponents }
