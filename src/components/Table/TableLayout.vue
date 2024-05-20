<script  setup>

</script>

<template>
  <div class="tableLayout">
    <slot name="search"></slot>
    <a-divider  :style="{ marginTop: 0 }" />
    <slot name="action"></slot>
    <slot name="operation"></slot>
    <slot></slot>
  </div>
</template>
<style lang="less" scoped>
.tableLayout {
  border-radius: 4px;
  padding: 20px;
  background: var(--color-bg-2);
  transition: box-shadow 0.2s cubic-bezier(0, 0, 1, 1);
}
</style>