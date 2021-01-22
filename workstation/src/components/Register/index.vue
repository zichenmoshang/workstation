<template>
  <a-form
    class="registerForm sign-up-form"
    layout="horizontal"
    v-bind="formItemLayout"
    :model="registerUser"
    @submit="handleRegister('registerForm')"
    @submit.native.prevent
  >
    <a-form-item label="警号">
      <a-input
        v-model:value="registerUser.username"
        size="large"
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
        v-model:value="registerUser.password"
        size="large"
        allow-clear
        placeholder="输入密码..."
      >
        <template #prefix
          ><LockOutlined style="color:rgba(0,0,0,.25)"
        /></template>
      </a-input-password>
    </a-form-item>
    <a-form-item label="姓名">
      <a-input
        v-model:value="registerUser.realname"
        size="large"
        allow-clear
        placeholder="输入姓名..."
      >
        <template #prefix
          ><SolutionOutlined style="color:rgba(0,0,0,.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item label="单位">
      <a-select
        v-model:value="registerUser.unit"
        size="large"
        allow-clear
        placeholder="选择单位..."
      >
        <a-select-option value="哈尔滨铁路公安局">
          哈尔滨铁路公安局
        </a-select-option>
        <a-select-option value="佳木斯公安处">
          佳木斯公安处
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="部门">
      <a-input
        v-model:value="registerUser.department"
        size="large"
        allow-clear
        placeholder="输入部门..."
        pressEnter="handleRegister('registerForm')"
      >
        <template #prefix
          ><SolutionOutlined style="color:rgba(0,0,0,.25)"
        /></template>
      </a-input>
    </a-form-item>
    <a-form-item :wrapper-col="formItemLayout.buttonCol">
      <a-button
        class="submit-btn"
        type="primary"
        html-type="submit"
        block
        :disabled="
          registerUser.username.length != 6 ||
            registerUser.password.length < 6 ||
            registerUser.realname === '' ||
            registerUser.unit === '' ||
            registerUser.department === ''
        "
      >
        立即注册
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import {
  UserOutlined,
  LockOutlined,
  SolutionOutlined
} from "@ant-design/icons-vue";
import { store } from "../../store/index";
export default {
  props: {
    registerUser: {
      type: Object,
      required: true
    }
  },
  components: {
    UserOutlined,
    LockOutlined,
    SolutionOutlined
  },
  setup(props: any) {
    const router = useRouter();
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      buttonCol: { span: 18, offset: 4 }
    };
    const handleRegister = async () => {
      props.registerUser.unit = props.registerUser.unit.key;
      console.log(props.registerUser);
      await store.dispatch("REGISTER", props.registerUser);
      const data = {
        token: sessionStorage.getItem("token"),
        user_id: sessionStorage.getItem("user_id")
      };
      await store.dispatch("USERINFO", data);
      // await router.push("/");
    };
    return { formItemLayout, handleRegister };
  }
};
</script>
<style scoped></style>
