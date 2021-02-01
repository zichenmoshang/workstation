import { ref } from "vue"
import { ButtonGroup } from "../../components/Button/type"
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
    width: "120",
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  },
  {
    type: null,
    label: "真实姓名",
    prop: "user_realname",
    width: "120",
    fixed: null,
    sortable: false,
    resizable: false,
    align: "center"
  },
  {
    type: null,
    label: "密码",
    prop: "user_password",
    width: "300",
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

export const buttonRroup = ref<ButtonGroup>([
  {
    size: "medium",
    type: "success",
    plain: true,
    round: true,
    circle: false,
    loading: false,
    disabled: false,
    icon: "el-icon-open",
    autofocus: false,
    nativeType: "button",
    label: "激活用户"
  },
  {
    size: "medium",
    type: "warning",
    plain: true,
    round: true,
    circle: false,
    loading: false,
    disabled: false,
    icon: "el-icon-refresh",
    autofocus: false,
    nativeType: "button",
    label: "重置密码"
  },
  {
    size: "medium",
    type: "danger",
    plain: true,
    round: true,
    circle: false,
    loading: false,
    disabled: false,
    icon: "el-icon-delete",
    autofocus: false,
    nativeType: "button",
    label: "禁用用户"
  }
])

export const pagination: Pagination = {
  small: false,
  background: true,
  pageSize: 0,
  total: 0,
  pageCount: 0,
  pagerCount: 0,
  currentPage: 1,
  layout: "total, sizes, prev, pager, next, jumper",
  pageSizes: [10, 20, 30, 50, 100],
  prevText: "上一页",
  nextText: "下一页",
  disabled: false,
  hideOnSinglPage: true
}
