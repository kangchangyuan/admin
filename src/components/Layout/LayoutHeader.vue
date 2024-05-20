<script setup>
import { ref } from 'vue'
import {
  IconHome,
  IconSettings,
  IconMoonFill,
  IconSunFill,
  IconFullscreenExit,
  IconFullscreen,
  IconUser,
  IconLock,
  IconExport,
} from '@arco-design/web-vue/es/icon'

const isDark = ref(false)
const isFullscreen = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.body.setAttribute('arco-theme', 'dark')
  } else {
    document.body.removeAttribute('arco-theme')
  }
}
const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
  if (isFullscreen.value) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>

<template>
  <a-layout-header class="layoutHeader">
    <a-menu mode="horizontal" :default-selected-keys="['1']">
      <a-menu-item
        key="0"
        :style="{ padding: 0, marginRight: '38px' }"
        disabled
      >
        <div
          :style="{
            width: '80px',
            height: '30px',
            borderRadius: '2px',
            background: 'var(--color-fill-3)',
            cursor: 'text',
          }"
        />
      </a-menu-item>
      <a-menu-item key="1">
        <template #icon><IconHome /></template>
        系统首页
      </a-menu-item>
      <a-sub-menu key="2">
        <template #icon><IconSettings /></template>
        <template #title>系统管理</template>
        <a-menu-item key="2_0">人员管理</a-menu-item>
      </a-sub-menu>
    </a-menu>
    <div class="right-content">
      <a-space size="medium">
        
        <a-button
          class="right-btn"
          type="outline"
          shape="circle"
          @click="toggleTheme"
        >
          <template #icon>
            <IconMoonFill v-if="isDark" />
            <IconSunFill v-else />
          </template>
        </a-button>
        <a-button
          class="right-btn"
          type="outline"
          shape="circle"
          @click="toggleFullscreen"
        >
          <template #icon>
            <IconFullscreenExit v-if="isFullscreen" />
            <IconFullscreen v-else />
          </template>
        </a-button>
        <a-dropdown trigger="click">
          <a-avatar
            :size="32"
            :style="{ cursor: 'pointer', backgroundColor: '#3370ff' }"
            ><IconUser
          /></a-avatar>

          <template #content>
            <a-doption>
              <a-space>
                <IconLock />
                <span>修改密码</span>
              </a-space>
            </a-doption>
            <a-doption>
              <a-space>
                <IconExport />
                <span>退出登录</span>
              </a-space>
            </a-doption>
          </template>
        </a-dropdown>
      </a-space>
    </div>
  </a-layout-header>
</template>
<style lang="less" scoped>
.layoutHeader {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background-color: var(--color-bg-2);
}
.right-content {
  padding-right: 30px;
  a {
    color: var(--color-text-1);
    text-decoration: none;
  }
  .right-btn {
    border-color: rgb(var(--gray-2));
    color: rgb(var(--gray-8));
    font-size: 16px;
  }
}
</style>
