<script setup>
import { ref, reactive } from 'vue'

import TableLayout from '@/components/Table/TableLayout.vue'
import TableAction from '@/components/Table/TableAction.vue'
import TableSearch from '@/components/Table/TableSearch.vue'

import useTableSetting from '@/hooks/useTableSettings'

const {scrolly,paginationModel} = useTableSetting()

const searchModel = reactive({
  name: '',
})
const searchColumns = ref([
  {
    type: 'input',
    field: 'name',
    label: '用户名',
    placeholder: '请输入',
  },
])
const tableColumns = [
{
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '手机号',
    dataIndex: 'phone',
  },
  {
    title: '姓名',
    dataIndex: 'name',
  },
  {
    title: '操作',
    slotName: 'optional',
  },
]
const tableData = ref()
const onSearch = () => {
  console.log(searchModel)
}
const onReset = () => {
  console.log(searchModel)
}
const onPageChange = (page) => {
  console.log(page)
}
const onPageSizeChange = (limit) => {
  console.log(limit)
}

</script>

<template>
  <TableLayout>
    <template #search>
      <TableSearch
        :searchModel="searchModel"
        :searchColumns="searchColumns"
        @onSearch="onSearch"
        @onReset="onReset"
      />
    </template>
    <template #action>
      <TableAction>
        <template #button>
          <a-button type="primary">新增</a-button>
        </template>
      </TableAction>
    </template>
    <a-table
      :columns="tableColumns"
      :data="tableData"
      :bordered="false"
      :scroll="scrolly"
      :pagination="paginationModel"
      @page-change="onPageChange"
      @page-size-change="onPageSizeChange"
    >
      <template #optional="{ record }">
        <a-button type="text">编辑</a-button>
      </template>
    </a-table>
  </TableLayout>
</template>
<style lang="less" scoped></style>
