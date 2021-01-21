<template>
  <div class="header">
    <div class="header-menu">
      <a-dropdown placement="bottomRight">
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          Hover me <DownOutlined />
        </a>
        <template #overlay>
          <a-menu @click="onClick">
            <a-menu-item key="0">
              <a href="javascript:;">个人信息</a>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="1">
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>
<script>
import { DownOutlined } from "@ant-design/icons-vue";
export default {
  name: "Header",
  components: {
    DownOutlined
  },
  setup() {
    const onClick =({ key }) => {
    //   console.log(`Click on item ${key}`);
      switch(key){
          case "0": {
              console.log("我还没有做个人信息！");
              break;
          }
          case "1": {
              console.log("我还没有做退出！");
          }
      }
    };
    return { onClick };
  }
};
</script>
<style scoped>
.header {
  padding: 0 20px;
  height: 64px;
}
.header-menu {
  float: right;
}
</style>
