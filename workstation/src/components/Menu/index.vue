<template>
  <el-submenu :key="menu.path">
    <template #title>
      <i :class="Item.meta.icon"></i>
      {{ Item.meta.title }}
    </template>
    <template v-if="menu.children.length">
      <template v-for="item in menu.children">
        <el-menu-item
          v-if="item.children"
          :key="item.path"
          :index="menu.path + '/' + item.path"
        >
          <i :class="item.meta.icon"></i>
          {{ item.meta.title }}
        </el-menu-item>
        <Menu v-else :menu="item" :key="item.path" />
      </template>
    </template>
  </el-submenu>
</template>
<script>
export default {
  name: "Menu",
  components: {},
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {
    return {}
  }
}
</script>
<style scoped></style>
