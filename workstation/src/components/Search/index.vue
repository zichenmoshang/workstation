<template>
  <el-input
    placeholder="请输入搜索关键字"
    v-model="input"
    class="input-with-select"
    ><template #prepend>搜索:</template>
    <template #append>
      <el-button icon="el-icon-search"></el-button>
    </template>
  </el-input>
</template>
<script>
import { ref } from "vue"
export default {
  name: "",
  components: {},
  setup() {
    return {
      input: ref("")
    }
  }
}
</script>
<style scoped>
.input-with-select {
    padding-bottom: 10px;
}
</style>
