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
    resizable: true,
    align: "center"
  },
  {
    type: null,
    label: "警号",
    prop: "user_username",
    width: "180",
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  },
  {
    type: null,
    label: "真实姓名",
    prop: "user_realname",
    width: "180",
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  },
  {
    type: null,
    label: "所在单位",
    prop: "user_unit",
    width: "180",
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  },
  {
    type: null,
    label: "所属部门",
    prop: "user_department",
    width: "180",
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  },
  {
    type: null,
    label: "用户权限",
    prop: "user_permission",
    width: null,
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  }
])
