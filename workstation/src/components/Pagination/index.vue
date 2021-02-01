<template>
  <el-pagination
    :small="pagination.small"
    :background="pagination.background"
    :page-size="pagination.pageSize"
    :total="pagination.total"
    :page-count="pagination.pageCount"
    :pager-count="pagination.pagerCount"
    :current-page="pagination.currentPage"
    :layout="pagination.layout"
    :page-sizes="pagination.pageSizes"
    :prev-text="pagination.prevText"
    :next-text="pagination.nextText"
    :disabled="pagination.disabled"
    :hide-on-singl-page="pagination.hideOnSinglPage"
    @size-change="sizeChange"
  >
  </el-pagination>
</template>
<script>
import { inject } from "vue"
export default {
  name: "Pagination",
  // props: {
  //   pagination: {}
  // },
  setup() {
    const pagination = inject("paginationData")
    console.log(pagination)
    function sizeChange(value) {
      // this.props.pagination.pageSize = value
    }
    return { pagination, sizeChange }
  }
}
</script>
<style scoped>
.el-pagination {
  padding-top: 10px;
  margin: 0 auto;
}
</style>
