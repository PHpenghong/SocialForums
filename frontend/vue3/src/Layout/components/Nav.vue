<template>
  <div id="layoutNav">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="light"
      mode="inline"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <Sidebar
        v-for="item in routerList"
        v-show="!item.meta?.hidden"
        :key="item.name"
        :index="item.path"
        :menu-info="item"
        :collapsed="collapsed"
      />
    </a-menu>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  reactive,
  ref,
  toRefs,
  computed,
  watchEffect
} from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import Sidebar from './SidebarItem.vue'

interface IState {
  openKeys: string[]
  rootSubmenuKeys: string[]
  selectedKeys: any[]
}

export default defineComponent({
  name: 'LayoutSider',
  components: { Sidebar },
  props: ['collapsed'],
  setup() {
    const { getUserInfo } = useUserStore()
    const routerList = ref()
    const state = reactive<IState>({
      openKeys: [],
      rootSubmenuKeys: [], // 有多少个子菜单可以打开
      selectedKeys: []
    })
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(
        (key: string) => !~state.openKeys.indexOf(key)
      )
      if (!~state.rootSubmenuKeys.indexOf(latestOpenKey!)) {
        state.openKeys = openKeys
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    }
    const resetRoute = (routeInfo: any) => {
      state.selectedKeys.length = 0
      state.selectedKeys.push(routeInfo.name)
      const routeList: string[] = routeInfo.path.split('/')
      onOpenChange([
        ...routeList.filter(
          (i: string, index: number) => i && index !== routeList.length - 1
        )
      ])
    }
    const route = useRoute()
    watchEffect(() => {
      if (route.path) {
        const nameArr: string[] = route.path.split('/')
        const len = nameArr.length
        if (len > 2) {
          state.openKeys = nameArr.slice(1, len - 1)
        } else {
          state.openKeys = []
        }
      }
    })
    onMounted(() => {
      resetRoute(route)
    })
    const filterMenubar = (menuList: any[]) => {
      const f = (menuList: any[]) => {
        const arr: any[] = []
        menuList
          .filter((v: any) => !v.meta.hidden)
          .forEach((v: any) => {
            const child =
              v.children && v.children.filter((v: any) => !v.meta.hidden)
            let currentItem = v
            if (!v.meta.alwaysShow && child && child.length === 1) {
              ;[currentItem] = child
            }
            arr.push(currentItem)
            if (currentItem.children && currentItem.children.length > 0) {
              arr[arr.length - 1].children = f(currentItem.children)
            }
          })
        return arr
      }
      return f(menuList)
    }
    routerList.value = filterMenubar(getUserInfo.router)
    const activeMenu = computed(() => {
      if (route.meta.activeMenu) return route.meta.activeMenu
      return route.path
    })
    return {
      ...toRefs(state),
      routerList,
      onOpenChange,
      activeMenu
    }
  }
})
</script>

<style lang="scss" scoped>
#layoutNav {
  width: 100%;
}
</style>
