<template>
  <el-form
    class="registerForm sign-up-form"
    ref="form"
    :model="registeruser"
    label-width="80px"
  >
    <el-form-item label="警号">
      <el-input
        v-model="registeruser.username"
        placeholder="请输入警号..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        v-model="registeruser.password"
        placeholder="请输入密码..."
        show-password
      ></el-input>
    </el-form-item>
    <el-form-item label="真实姓名">
      <el-input
        v-model="registeruser.realname"
        placeholder="请输入真实姓名..."
      ></el-input>
    </el-form-item>
    <el-form-item label="所在单位">
      <el-select
        v-model="registeruser.unit"
        placeholder="请选择所在单位..."
        clearable
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所属部门">
      <el-input
        v-model="registeruser.department"
        placeholder="请输入所属部门..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        type="primary"
        @click="handleRegister"
        :disabled="
          registeruser.username.length !== 6 ||
            registeruser.password.length < 6 ||
            registeruser.unit.length === 0 ||
            registeruser.realname.length < 2 ||
            registeruser.department.length === 0
        "
        >立即注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { useRouter } from "vue-router"
import { store } from "../../store/index"
export default {
  props: {
    registerUser: {
      type: Object,
      required: true
    }
  },
  setup(props: any) {
    const router = useRouter()
    const registeruser = props.registerUser
    const options = [
      {
        value: "哈尔滨铁路公安局",
        label: "哈尔滨铁路公安局"
      },
      {
        value: "佳木斯公安处",
        label: "佳木斯公安处"
      }
    ]
    const handleRegister = async () => {
      await store.dispatch("REGISTER", props.registerUser)
      const data = {
        token: sessionStorage.getItem("token"),
        userId: sessionStorage.getItem("userId")
      }
      await store.dispatch("USERINFO", data)
      await router.push("/")
    }
    return { registeruser, options, handleRegister }
  }
}
</script>
<style scoped>
.el-button {
  width: 100%;
}
</style>
