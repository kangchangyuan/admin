import { ref, reactive } from 'vue'
export default function useTableSetting() {
  const scrolly = { maxHeight: 'calc(100vh - 320px)' }
  const listLoading = ref(false)
  const saveLoading = ref(false)
  const deleteLoading = ref(false)
  const downLoading = ref(false)
  const upLoading = ref(false)
  const createVisible = ref(false)
  const editVisible = ref(false)
  const paginationModel = reactive({
    showTotal: true,
    showPageSize: true,
    pageSizeOptions: [15, 30, 45, 60, 80],
    total: 0,
    defaultPageSize: 15,
    current: 1,
  })
  return {
    listLoading,
    saveLoading,
    deleteLoading,
    downLoading,
    upLoading,
    scrolly,
    createVisible,
    editVisible,
    paginationModel,
  }
}
