<script  setup></script>

<template>
  <a-row style="margin-bottom: 16px">
    <a-col :span="8">
      <slot name="tab"></slot>
    </a-col>
    <a-col :span="16" style="text-align: right">
      <a-space>
        <slot name="button"></slot>
      </a-space>
    </a-col>
  </a-row>
</template>
<style lang="less" scoped></style>
