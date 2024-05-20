<script setup>
import LayoutHeader from '../components/Layout/LayoutHeader.vue';

LayoutHeader
</script>

<template>
  <a-layout class="layoutContainer">
    <LayoutHeader />
    <a-layout-content class="layoutContent">
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>
<style lang="less" scoped>
.layoutContainer{
  height: 100vh;
  background: var(--color-bg-2);
  color: var(--color-text-2);
  overflow: hidden;
}
.layoutContent{
  background-color: var(--color-fill-2);
  padding: 12px;
  max-height: calc(100vh - 58px);
  overflow-y: auto;
  padding: 12px;
}
</style>
