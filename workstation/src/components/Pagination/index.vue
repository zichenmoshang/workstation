<template>
  <el-pagination
    :small="Pagination.small"
    :background="Pagination.background"
    :page-size="Pagination.pageSize"
    :total="Pagination.total"
    :page-count="Pagination.pageCount"
    :pager-count="Pagination.pagerCount"
    :current-page="Pagination.currentPage"
    :layout="Pagination.layout"
    :page-sizes="Pagination.pageSizes"
    :prev-text="Pagination.prevText"
    :next-text="Pagination.nextText"
    :disabled="Pagination.disabled"
    :hide-on-singl-page="Pagination.hideOnSinglPage"
  >
  </el-pagination>
</template>
<script>
export default {
  name: "",
  props: {
    Pagination: {}
  },
  setup() {
    return {}
  }
}
</script>
<style scoped>
.el-pagination {
  padding-top: 10px;
  margin: 0 auto;
}
</style>
