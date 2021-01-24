<template>
  <Table :tableHeader="tableHeader" :tableData="tableData" />
</template>
<script>
import Table from "../../components/Table/index.vue"
export default {
  name: "",
  components: { Table },
  setup() {
    const tableHeader = [
      {
        type: "index",
        label: "序号",
        width: "50"
      },
      {
        prop: "date",
        label: "日期",
        width: "180"
      },
      {
        prop: "name",
        label: "姓名",
        width: "180"
      },
      {
        prop: "address",
        label: "地址",
        width: "180"
      }
    ]
    const tableData = [
      {
        date: "2016-05-03",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-04",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-01",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-08",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-06",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      },
      {
        date: "2016-05-07",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄"
      }
    ]
    return { tableHeader, tableData }
  }
}
</script>
<style scoped></style>
