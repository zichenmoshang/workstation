import { ref } from "vue"
import { Button } from "../../components/ButtonGroup/type"
import { TableHeader } from "../../components/Table/type"
import { Pagination } from "../../components/Pagination/type"

export const tableHeader = ref<TableHeader>([
  {
    type: "selection",
    label: null,
    prop: null,
    width: "50",
    fixed: "left",
    sortable: false,
    resizable: true,
    align: "center"
  },
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
    label: "激活用户",
    prop: "user_isActive",
    width: "120",
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

export const buttonRroup = ref<Button>([
  {
    type: "success",
    size: "medium",
    plain: true,
    round: true,
    circle: false,
    loading: false,
    disabled: false,
    icon: "el-icon-open",
    autofocus: false,
    label: "激活用户"
  },
  {
    type: "warning",
    size: "medium",
    plain: true,
    round: true,
    circle: false,
    loading: false,
    disabled: false,
    icon: "el-icon-refresh",
    autofocus: false,
    label: "重置密码"
  },
  {
    type: "danger",
    size: "medium",
    plain: true,
    round: true,
    circle: false,
    loading: false,
    disabled: false,
    icon: "el-icon-delete",
    autofocus: false,
    label: "禁用用户"
  }
])

export const pagination = ref<Pagination>({
  small: false,
  background: true,
  pageSize: 10,
  total: 100,
  pageCount: 100,
  pagerCount: 5,
  currentPage: 1,
  layout: "sizes, prev, pager, next, jumper, ->, total, slot",
  pageSizes: [10, 20, 30, 50, 100],
  prevText: "上一页",
  nextText: "下一页",
  disabled: false,
  hideOnSinglPage: false
})
