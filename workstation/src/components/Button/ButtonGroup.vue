<template>
  <el-button-group>
    <Button v-for="item in buttonRroup" :key="item.label" :button="item" />
  </el-button-group>
</template>
<script>
import Button from "../../components/Button/Button.vue"
export default {
  name: "",
  components: {
    Button
  },
  props: {
    buttonRroup: {}
  },
  setup() {
    return {}
  }
}
</script>
<style scoped>
.el-button-group {
  padding-bottom: 10px;
}
</style>
