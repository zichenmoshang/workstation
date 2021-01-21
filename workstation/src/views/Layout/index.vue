<template>
  <a-layout class="layout">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <!-- <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu> -->
      <Aside />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <!-- <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        /> -->
        <Header />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <Main />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import Aside from "@/components/Layout/aside.vue";
import Header from "@/components/Layout/header.vue";
import Main from "@/components/Layout/main.vue";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
export default {
  name: "Layout",
  components: {
    Aside,
    Header,
    Main
  },
  setup(props) {
    const data = reactive({
      selectedKeys: ["1"],
      collapsed: false
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style>
.layout{
  height: 100vh;
}
</style>
