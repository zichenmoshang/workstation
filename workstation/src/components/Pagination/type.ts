export interface Pagination {
  small: boolean | null // 是否使用小型分页样式
  background: boolean | null // 是否为分页按钮添加背景色
  pageSize: number | null // 每页显示条目个数，支持 .sync 修饰符
  total: number | null // 总条目数
  pageCount: number | null // 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性
  pagerCount: number | null // 页码按钮的数量，当总页数超过该值时会折叠
  currentPage: number | null // 当前页数，支持 .sync 修饰符
  layout: string | null // 组件布局，子组件名用逗号分隔 sizes, prev, pager, next, jumper, ->, total, slot
  pageSizes: number[] | null // 每页显示个数选择器的选项设置
  prevText: string | null // 替代图标显示的上一页文字
  nextText: string | null // 替代图标显示的下一页文字
  disabled: boolean | null // 是否禁用
  hideOnSinglPage: boolean | null // 只有一页时是否隐藏
}
