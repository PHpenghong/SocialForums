<template>
  <div class="layout">
    <div class="aside"></div>
    <div class="layout">
      <div class="header"></div>
      <div class="main"></div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const test = defineProps([''])
</script>

<style lang="scss">
#app {
  width: 100vw !important;
  height: 100vh !important;
  max-width: 100vw !important;
  padding: 0 !important;
  margin: 0 !important;
  border: 0 !important;
}
.layout {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 60px;
  background-color: red;
}
.main {
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: purple;
}
.footer {
  width: 100%;
  height: 60px;
  background-color: gray;
}
.aside {
  width: 200px;
  height: 100%;
  flex: 0 0 auto;
  background-color: blue;
}
</style>
