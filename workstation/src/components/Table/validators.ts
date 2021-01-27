import { ref } from "vue"

export interface TableHeaderItem {
  type: string | null // 对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮
  label: string | null // 显示的标题
  prop: string | null // 对应列内容的字段名，也可以使用 property 属性
  width: string | null // 对应列的宽度
  fixed: string | null // 列是否固定在 left 左侧或者 right 右侧
  sortable: boolean | null // 对应列是否可以排序
  resizable: boolean // 对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）
  align: string | null // 对齐方式 left/center/right
}

export interface TableHeader {
  [index: number]: TableHeaderItem
}

interface TableData {
  username: string
  realname: string
  password: string
  unit: string
  department: string
}

export const tableData = ref<TableData>({
  username: "",
  realname: "",
  password: "",
  unit: "",
  department: ""
})
