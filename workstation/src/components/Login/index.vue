<template>
  <a-form
    class="loginForm sign-in-form"
    layout="horizontal"
    v-bind="formItemLayout"
    :model="loginUser"
    @submit="handleLogin"
    @submit.native.prevent
  >
    <a-form-item label="警号">
      <a-input
        v-model:value="loginUser.username"
        size="large"
        defaultValue="admin."
        allow-clear
        placeholder="输入警号..."
      >
        <template #prefix
          ><UserOutlined style="color:rgba(0,0,0,.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item label="密码">
      <a-input-password
        v-model:value="loginUser.password"
        size="large"
        defaultValue="123456"
        allow-clear
        placeholder="输入密码..."
        pressEnter="handleLogin"
      >
        <template #prefix
          ><LockOutlined style="color:rgba(0,0,0,.25)"
        /></template>
      </a-input-password>
    </a-form-item>
    <a-form-item :wrapper-col="formItemLayout.buttonCol">
      <a-button
        class="submit-btn"
        type="primary"
        block
        html-type="submit"
        :disabled="
          loginUser.username.length != 6 || loginUser.password.length < 6
        "
      >
        立即登录
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { UserOutlined, LockOutlined } from "@ant-design/icons-vue";
import { store } from "../../store/index";
export default {
  props: {
    loginUser: {
      type: Object,
      required: true
    }
  },
  components: {
    UserOutlined,
    LockOutlined
  },
  setup(props: any) {
    const router = useRouter();
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      buttonCol: { span: 18, offset: 4 }
    };
    const handleLogin = async () => {
      await store.dispatch("LOGIN", props.loginUser);
      const data = {
        token: sessionStorage.getItem("token"),
        user_id: sessionStorage.getItem("user_id")
      };
      await store.dispatch("USERINFO", data);
      await router.push("/");
    };
    return { formItemLayout, handleLogin };
  }
};
</script>
<style scoped>
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
</style>
