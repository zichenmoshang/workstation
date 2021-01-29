export interface ButtonItem {
  type: string | null // 类型 primary / success / warning / danger / info / text
  size: string | null // 尺寸 medium / small / mini
  plain: boolean | null // 是否朴素按钮
  round: boolean | null // 是否圆角按钮
  circle: boolean | null // 是否圆形按钮
  loading: boolean | null // 是否加载中状态
  disabled: boolean | null // 是否禁用状态
  icon: string | null // 图标类名
  autofocus: boolean | null // 是否默认聚焦
  label: string | null // 按钮文字
}

export interface Button {
  [index: number]: ButtonItem
}
