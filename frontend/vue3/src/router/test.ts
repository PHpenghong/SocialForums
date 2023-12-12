export const list = [
  {
    component: 'Layout',
    id: 1,
    name: 'Sys',
    parentId: 0,
    path: '/Sys',
    sort: null,
    redirect: '/Sys/Sys_power',
    meta: {
      title: '系统管理',
      title2: '',
      icon: 'setting',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: ''
    }
  },
  {
    component: 'Sys_power',
    id: 2,
    name: 'Sys_power',
    parentId: 1,
    path: '/Sys/Sys_power',
    sort: null,
    redirect: '',
    meta: {
      title: '权限分配',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Sys'
    }
  },
  {
    component: 'Sys_router',
    id: 3,
    name: 'Sys_router',
    parentId: 1,
    path: '/Sys/Sys_router',
    sort: null,
    redirect: '',
    meta: {
      title: '路由管理',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Sys'
    }
  },
  {
    component: 'Sys_user',
    id: 4,
    name: 'Sys_user',
    parentId: 1,
    path: '/Sys/Sys_user',
    sort: null,
    redirect: '',
    meta: {
      title: '用户管理',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Sys'
    }
  },
  {
    component: 'Layout',
    id: 5,
    name: 'Sundry',
    parentId: 0,
    path: '/Sundry',
    sort: null,
    redirect: '/Sundry/Chore',
    meta: {
      title: '杂项',
      title2: 'ttt',
      icon: 'sundry',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: ''
    }
  },
  {
    component: 'Chore',
    id: 8,
    name: 'Chore',
    parentId: 5,
    path: '/Sundry/Chore',
    sort: '3',
    redirect: '',
    meta: {
      title: '杂项',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Sundry'
    }
  },
  {
    component: 'Test',
    id: 9,
    name: 'Test',
    parentId: 5,
    path: '/Sundry/Test',
    sort: '2',
    redirect: '',
    meta: {
      title: '测试',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Sundry'
    }
  },
  {
    component: 'Layout',
    id: 10,
    name: 'Nav',
    parentId: 0,
    path: '/Nav',
    sort: '',
    redirect: '',
    meta: {
      title: '多级导航',
      title2: '',
      icon: 'nav',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: ''
    }
  },
  {
    component: 'SecondNav',
    id: 11,
    name: 'SecondNav',
    parentId: 10,
    path: '/Nav/SecondNav',
    sort: '',
    redirect: '',
    meta: {
      title: '二级导航',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Nav'
    }
  },
  {
    component: 'SecondText',
    id: 12,
    name: 'SecondText',
    parentId: 10,
    path: '/Nav/SecondText',
    sort: '',
    redirect: '',
    meta: {
      title: '二级文本',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Nav'
    }
  },
  {
    component: 'NavPage1',
    id: 13,
    name: 'NavPage1',
    parentId: 11,
    path: '/Nav/SecondNav/NavPage1',
    sort: '',
    redirect: '',
    meta: {
      title: 'NavPage1',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'SecondNav'
    }
  },
  {
    component: 'NavPage2',
    id: 14,
    name: 'NavPage2',
    parentId: 11,
    path: '/Nav/SecondNav/NavPage2',
    sort: '',
    redirect: '',
    meta: {
      title: 'NavPage2',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'SecondNav'
    }
  },
  {
    component: 'Layout',
    id: 15,
    name: 'Create',
    parentId: 0,
    path: '/Create',
    sort: '',
    redirect: '',
    meta: {
      title: '创建模版',
      title2: '',
      icon: 'vue',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: ''
    }
  },
  {
    component: 'CreateForm',
    id: 16,
    name: 'CreateForm',
    parentId: 15,
    path: '/Create/CreateForm',
    sort: '',
    redirect: '',
    meta: {
      title: '创建Form',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Create'
    }
  },
  {
    component: 'CreateTable',
    id: 17,
    name: 'CreateTable',
    parentId: 15,
    path: '/Create/CreateTable',
    sort: '',
    redirect: '',
    meta: {
      title: '创建Table',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Create'
    }
  },
  {
    component: 'MainPage',
    id: 18,
    name: 'MainPage',
    parentId: 10,
    path: '/Nav/MainPage',
    sort: '',
    redirect: '',
    meta: {
      title: '主页面',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Nav'
    }
  },
  {
    component: 'MainDetails',
    id: 20,
    name: 'MainDetails',
    parentId: 10,
    path: '/Nav/MainDetails',
    sort: '',
    redirect: '',
    meta: {
      title: '详情页面',
      title2: '',
      icon: '',
      hidden: true,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Nav'
    }
  },
  {
    component: 'Layout',
    id: 22,
    name: 'Lib',
    parentId: 0,
    path: '/Lib',
    sort: '',
    redirect: '',
    meta: {
      title: '组件库',
      title2: '',
      icon: 'lib',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: ''
    }
  },
  {
    component: 'Docs',
    id: 23,
    name: 'Docs',
    parentId: 22,
    path: '/Lib/Docs/:type',
    sort: '',
    redirect: '',
    meta: {
      title: '文档',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Lib'
    }
  },
  {
    component: 'Antd',
    id: 25,
    name: 'Antd',
    parentId: 22,
    path: '/Lib/Antd',
    sort: '',
    redirect: '',
    meta: {
      title: 'Antd快捷代码',
      title2: '',
      icon: '',
      hidden: false,
      isEdit: false,
      disable: false,
      keepAlive: false,
      parentRoute: 'Lib'
    }
  }
]
