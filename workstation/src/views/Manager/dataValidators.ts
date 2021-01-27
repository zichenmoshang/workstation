import { ref } from "vue"
import { TableHeader } from "../../components/Table/validators"

export const tableHeader = ref<TableHeader>([
  {
    type: "index",
    label: "序号",
    prop: null,
    width: "50",
    fixed: "left",
    sortable: false,
    align: "center"
  },
  {
    type: null,
    label: "日期",
    prop: "date",
    width: null,
    fixed: "left",
    sortable: false,
    align: "center"
  },
  {
    type: null,
    label: "姓名",
    prop: "name",
    width: null,
    fixed: "left",
    sortable: false,
    align: "center"
  },
  {
    type: null,
    label: "地址",
    prop: "address",
    width: null,
    fixed: "left",
    sortable: false,
    align: "center"
  }
])
