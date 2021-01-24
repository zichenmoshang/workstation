<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column
      v-for="(item, i) in tableHeader"
      :key="i"
      :prop="item.prop"
      :label="item.label"
      :width="item.width"
    ></el-table-column>
  </el-table>
</template>
<script>
export default {
  name: "",
  props: {
    tableHeader: {},
    tableData: {}
  },
  setup() {
    return {}
  }
}
</script>
<style scoped></style>
