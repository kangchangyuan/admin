<script setup>
import {
  IconSearch,
  IconRefresh
} from '@arco-design/web-vue/es/icon'
import { computed,ref } from 'vue';


const props = defineProps(['searchModel','searchColumns'])

const emits = defineEmits(['onSearch','onReset'])

const formRef = ref()

const columnsType = computed(() => (props.searchColumns?.length > 3 ? 1 : 0))


const onReset = ()=>{
  formRef.value.resetFields()
  emits('onReset')
}
const onSearch = ()=>{
  emits('onSearch')
}
</script>

<template>
  <a-row>
    <a-col :flex="1">
      <a-form
        :model="searchModel"
        :label-col-props="{ span: 6 }"
        :wrapper-col-props="{ span: 18 }"
        label-align="left"
        ref="formRef"
      >
        <a-row :gutter="8">
          <a-col :span="8" v-for="item in searchColumns" :key="item.field">
            <a-form-item :field="item.field" :label="item.label">
              <template v-if="item.type == 'input'">
                <a-input
                  v-model="searchModel[item.field]"
                  :placeholder="item.placeholder"
                  allow-clear
                  @keyup.enter="onSearch"
                />
              </template>
              <template v-if="item.type == 'select'">
                <a-select
                  v-model="searchModel[item.field]"
                  :options="item.options"
                  :placeholder="item.placeholder"
                  allow-clear
                />
              </template>
              <template v-if="item.type == 'picker'">
                <a-range-picker v-model="searchModel[item.field]" />
              </template>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-col>

    <a-divider
      direction="vertical"
      :style="{ height: columnsType ? '84px' : '32px' }"
    />
    <a-col :flex="columnsType ? '86px' : '180px'" style="text-align: right">
      <a-space
        :direction="columnsType ? 'vertical' : 'horizontal'"
        :size="columnsType ? 18 : 8"
      >
        <a-button type="primary" html-type="submit" @click="onSearch">
          <template #icon>
            <IconSearch />
          </template>
          查询
        </a-button>
        <a-button @click="onReset">
          <template #icon>
            <IconRefresh />
          </template>
          重置
        </a-button>
      </a-space>
    </a-col>
  </a-row>
</template>
<style lang="less" scoped></style>
