<template>
  <el-button
    :size="button.size"
    :type="button.type"
    :plain="button.plain"
    :round="button.round"
    :circle="button.circle"
    :loading="button.loading"
    :disabled="button.disabled"
    :icon="button.icon"
    :autofocus="button.autofocus"
    :native-type="button.nativeType"
    >{{ button.label }}</el-button
  >
</template>
<script>
export default {
  name: "Button",
  props: {
    button: {}
  },
  setup() {
    return {}
  }
}
</script>
<style scoped></style>
