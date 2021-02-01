export interface Button {
  size: string | null // 尺寸 medium / small / mini
  type: string | null // 类型 primary / success / warning / danger / info / text
  plain: boolean | null // 是否朴素按钮
  round: boolean | null // 是否圆角按钮
  circle: boolean | null // 是否圆角按钮
  loading: boolean | null // 是否加载中状态
  disabled: boolean | null // 是否禁用状态
  icon: string | null // 图标类名
  autofocus: boolean | null // 是否默认聚焦
  nativeType: string | null // 原生 type 属性 button / submit / reset 默认 button
  label: string | null // 按钮文字
}

export interface ButtonGroup {
  [index: number]: Button
}
