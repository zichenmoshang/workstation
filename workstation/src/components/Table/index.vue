<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column
      v-for="(item, i) in tableHeader"
      :key="i"
      :type="item.type"
      :label="item.label"
      :prop="item.prop"
      :width="item.width"
      :fixed="item.fixed"
      :sortable="item.sortable"
      :align="item.align"
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
