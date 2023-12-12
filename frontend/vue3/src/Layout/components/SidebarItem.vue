<template>
  <div v-if="!menuInfo.meta?.hidden">
    <a-sub-menu
      v-if="menuInfo.children && menuInfo.children.length > 0"
      :key="menuInfo.name"
      :index="menuInfo.path"
    >
      <template #title>
        <section class="menu_title_sec">
          <svg-icon
            v-if="menuInfo.meta.icon"
            class="icon"
            :name="menuInfo.meta.icon"
            :size="1.3"
          />
          <span v-show="!collapsed">{{ menuInfo.meta.title }}</span>
        </section>
      </template>
      <!-- <el-menu-item-group> -->
      <menubar-item
        v-for="item in menuInfo.children"
        :key="item.path"
        :index="item.path"
        :menu-info="item"
      />
      <!-- </el-menu-item-group> -->
    </a-sub-menu>

    <a-menu-item v-else :key="menuInfo.name" :index="menuInfo.path">
      <router-link :to="{ path: menuInfo.path }">
        <section class="menu_title_sec">
          <svg-icon
            v-if="menuInfo.meta.icon"
            class="icon"
            :name="menuInfo.meta.icon"
            :size="1.3"
          />
          <span v-if="!collapsed">
            {{ menuInfo.meta.title }}
          </span>
        </section>
      </router-link>
    </a-menu-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenubarItem',
  props: {
    collapsed: {
      type: Boolean
    },
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 0.5em;
  color: #aaaaaa;
}
.navSpan {
  display: flex;
  align-items: center;
}
.menu_title_sec {
  display: flex;
  align-items: center;
}
</style>
