<template>
  <el-aside width="250px">
    <div class="logo">
      <span>Work-Station</span>
    </div>
    <el-menu background-color="#e9eef3" router @open="handleOpen">
      <template v-for="Item in routers">
        <el-menu-item
          v-if="!Item.children && !Item.hidden"
          :key="Item.path"
          :index="Item.path"
        >
          <template #title>
            <i :class="Item.meta.icon"></i>
            {{ Item.meta.title }}
          </template>
        </el-menu-item>
        <el-submenu
          v-else-if="!Item.hidden"
          :key="Item.path"
          :index="Item.path"
        >
          <template #title>
            <i :class="Item.meta.icon"></i>
            {{ Item.meta.title }}
          </template>
          <el-menu-item
            v-for="item in Item.children"
            :key="item.path"
            :index="Item.path + '/' + item.path"
          >
            <i :class="item.meta.icon"></i>
            {{ item.meta.title }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-aside>
</template>
<script>
import { reactive } from "vue"
import { useRouter } from "vue-router"
export default {
  name: "Aside",
  setup() {
    const { options } = useRouter()
    const routers = options.routes
    const data = reactive({
      selectedKey: ["2"],
      openKey: ["sub1"]
    })
    console.log(routers)
    const handleOpen = async (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      routers,
      data,
      handleOpen
    }
  }
}
</script>
<style scoped>
.el-aside {
  background-color: #e9eef3;
}
.logo {
  line-height: 60px;
  text-align: center;
  font-weight: bold;
  font-size: x-large;
  color: #409eff;
}
#text {
  font-size: 14px;
}
</style>
