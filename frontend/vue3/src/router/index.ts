import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { components } from '@/router/asyncRouter'

const Components: any = {
  ...components,
  Layout: (() => import('@/Layout/index.vue')) as unknown as () => Promise<
    typeof import('*.vue')
  >
  // Redirect: (() => import('@/layout/redirect.vue')) as unknown as () => Promise<
  //   typeof import('*.vue')
  // >,
  // LayoutBlank: (() => import('@/layout/blank.vue')) as unknown as () => Promise<
  //   typeof import('*.vue')
  // >
}

// 静态路由页面
export const allowRouter: Array<any> = [
  {
    name: 'root',
    path: '/',
    component: Components.Layout,
    redirect: '/Dashboard',
    meta: { title: '仪表盘', icon: 'dashboard' },
    children: [
      {
        name: 'Dashboard',
        path: '/Dashboard',
        component: Components.Dashboard,
        meta: { title: '工作台' }
      }
    ]
  },
  {
    name: 'ErrorPage',
    path: '/ErrorPage',
    meta: { title: '错误页面', hidden: true },
    component: Components.Layout,
    redirect: '/ErrorPage/404',
    children: [
      {
        name: '401',
        path: '/ErrorPage/401',
        component: Components['401'],
        meta: { title: '401' }
      },
      {
        name: '404',
        path: '/ErrorPage/404',
        component: Components['404'],
        meta: { title: '404' }
      }
    ]
  },
  {
    name: 'RedirectPage',
    path: '/redirect',
    component: Components.Layout,
    meta: { title: '重定向页面', icon: 'dashboard', hidden: true },
    children: [
      {
        name: 'Redirect',
        path: '/redirect/:pathMatch(.*)*',
        meta: {
          title: '重定向页面',
          icon: ''
        },
        component: Components.Redirect
      }
    ]
  },
  {
    name: 'Login',
    path: '/Login',
    component: Components.Login,
    meta: { title: '登录', icon: 'dashboard', hidden: true }
  },
  {
    name: 'viewSvg',
    path: '/viewSvg',
    component: Components.ViewSVG,
    meta: { title: 'svg', icon: 'dashboard', hidden: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: allowRouter as RouteRecordRaw[]
})

export default router
