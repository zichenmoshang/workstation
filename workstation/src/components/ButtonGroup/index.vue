<template>
  <el-button-group>
    <el-button
      v-for="(item, i) in buttonRroup"
      :key="i"
      :type="item.type"
      :size="item.size"
      :plain="item.plain"
      :round="item.round"
      :circle="item.circle"
      :loading="item.loading"
      :disabled="item.disabled"
      :icon="item.icon"
      :autofocus="item.autofocus"
      >{{ item.label }}</el-button
    >
  </el-button-group>
</template>
<script>
export default {
  name: "",
  components: {},
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
