<script setup>
import {IconLock,IconUser} from "@arco-design/web-vue/es/icon/index.js";

import {reactive, ref} from "vue";

const loginParmas = reactive({
  username: '',
  password: ''
})
const loading = ref(false)
async function handleSubmit({ values, errors }) {
  if (errors) return false
  loading.value = true
}
</script>

<template>
  <div class="login-page">
    <div class="login-form-container">
      <div class="login-form-title">链云系统</div>
      <div class="login-form-sub-title">Login ChainCloud system</div>
      <a-form :model="loginParmas" layout="vertical" @submit="handleSubmit">
        <a-form-item
            field="username"
            :rules="[
          { required: true, message: '手机号不能为空' },
          {
            match: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            message: '手机号格式不正确'
          }
        ]"
            :validate-trigger="['change', 'blur']"
            hide-label
        >
          <a-input
              v-model="loginParmas.username"
              placeholder="请输入手机号"
              :max-length="11"
              allow-clear
          >
            <template #prefix>
              <icon-user />
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
            field="password"
            :rules="[{ required: true, message: '密码不能为空' }]"
            :validate-trigger="['change', 'blur']"
            hide-label
        >
          <a-input-password v-model="loginParmas.password" placeholder="请输入密码" allow-clear>
            <template #prefix>
              <icon-lock />
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" long :loading="loading">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>

</template>

<style scoped>
.login-page{
  display: flex;
  height: 70vh;
  justify-content: center;
  align-items: center;
}
.login-form-container {
  width: 320px;
}
.login-form-title {
  color: var(--color-text-1);
  font-size: 26px;
  text-align: center;
  font-weight: 600;
  line-height: 32px;
  margin-bottom: 6px;
}
.login-form-sub-title {
  color: var(--color-text-3);
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
}
</style>