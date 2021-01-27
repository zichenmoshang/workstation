<template>
  <el-form
    class="loginForm sign-in-form"
    ref="form"
    :model="loginuser"
    label-width="80px"
  >
    <el-form-item label="警号">
      <el-input
        v-model="loginuser.username"
        placeholder="请输入警号..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="loginuser.password"
        placeholder="请输入密码..."
        @keyup.enter="handleLogin"
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleLogin"
        :disabled="
          loginuser.username.length !== 6 || loginuser.password.length < 6
        "
        >立即登录</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { useRouter } from "vue-router"
import { store } from "../../store/index"
export default {
  props: {
    loginUser: {
      type: Object,
      required: true
    }
  },
  setup(props: any) {
    const loginuser = props.loginUser
    const router = useRouter()
    const handleLogin = async () => {
      await store.dispatch("LOGIN", props.loginUser)
      await router.push("/")
    }
    return { loginuser, handleLogin }
  }
}
</script>
<style scoped>
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}
.el-button {
  width: 100%;
}
</style>
