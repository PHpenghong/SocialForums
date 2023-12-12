<template>
  <a-layout-header id="layoutHeader">
    <section class="hideNavBtn" @click="hideNav">
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </section>
    <section class="headCenter">
      <section class="breadcrumb">
        <a-breadcrumb>
          <a-breadcrumb-item
            v-for="item in data.breadcrumbList"
            :key="item.path"
            >{{ item.title }}</a-breadcrumb-item
          >
        </a-breadcrumb>
      </section>
    </section>
    <section class="custSection">
      <CustMode />
    </section>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router'
import CustMode from '@/views/Login/components/Cust.vue'

interface IBreadcrumbList {
  path: string
  title: string | symbol
}

// 面包屑导航
const breadcrumb = (route: RouteLocationNormalizedLoaded) => {
  const fn = () => {
    const breadcrumbList: Array<IBreadcrumbList> = []
    const notShowBreadcrumbList = ['Dashboard', 'RedirectPage'] // 不显示面包屑的导航
    if (
      route.matched[0] &&
      notShowBreadcrumbList.includes(route.matched[0].name as string)
    )
      return breadcrumbList
    route.matched.forEach((v) => {
      const obj: IBreadcrumbList = {
        title: v.meta.title as string,
        path: v.path
      }
      breadcrumbList.push(obj)
    })
    return breadcrumbList
  }
  const data = reactive<any>({
    breadcrumbList: fn()
  })
  watchEffect(() => {
    if (route.path) {
      data.breadcrumbList = fn()
    } else {
      data.breadcrumbList = []
    }
  })
  return { data }
}

export default defineComponent({
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CustMode
  },
  props: {
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:collapsed'],
  setup(props, { emit }) {
    const route = useRoute()
    const hideNav = () => {
      emit('update:collapsed', !props.collapsed)
    }
    return {
      hideNav,
      ...breadcrumb(route)
    }
  }
})
</script>

<style lang="scss" scoped>
#layoutHeader {
  background: #fff;
  padding: 0 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .custSection {
    width: 260px;
  }
  .headCenter {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .breadcrumb {
    }
  }
  .hideNavBtn {
    cursor: pointer;
    width: 60px;
    display: inline-block;
    *display: inline;
    *zoom: 1;
  }
}
</style>
