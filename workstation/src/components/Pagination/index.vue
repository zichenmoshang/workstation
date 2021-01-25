<template>
  <el-pagination background layout="prev, pager, next" :total="1000">
  </el-pagination>
</template>
<script>
export default {
  name: "",
  props: {
      layout: "",
      total: 0,
  },
  setup() {
    return {}
  }
}
</script>
<style scoped></style>
