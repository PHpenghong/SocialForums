<template>
  <a-layout id="layoutComponents">
    <a-layout-sider
      v-model:collapsed="collapsed"
      width="280"
      :trigger="null"
      collapsible
    >
      <div class="logoName flexClass">
        <article v-show="!collapsed">测试系统</article>
      </div>
      <Nav :collapsed="collapsed" />
    </a-layout-sider>
    <a-layout>
      <Header ref="layoutHeader" v-model:collapsed="collapsed" />
      <a-layout-content class="layoutContent">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import Header from './components/Header.vue'
// import Nav from './components/Nav.vue'

const Nav = defineAsyncComponent(() => import('./components/Nav.vue'))

const collapsed = ref<boolean>(false)
</script>

<style lang="scss" scoped>
#layoutComponents {
  width: 100vw;
  height: 100vh;
  :deep .ant-layout-sider {
    background-color: #ffffff !important;
  }
  .layoutContent {
    height: 100%;
    margin: 5px;
    padding: 10px;
    // background: #fff;
    min-height: 280px;
    overflow-y: auto;
  }
  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
  }
  .trigger:hover {
    color: #1890ff;
  }
  .logoName {
    height: 32px;
    color: #444444;
    font-size: 20px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
