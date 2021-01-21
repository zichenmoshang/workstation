<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="警号" prop="username">
      <el-input
        v-model="registerUser.username"
        placeholder="输入警号..."
      ></el-input>
    </el-form-item>
    <el-form-item label="姓名" prop="realname">
      <el-input
        v-model="registerUser.realname"
        placeholder="输入真实姓名..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="输入密码..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="输入确认密码..."
      ></el-input>
    </el-form-item>
    <el-form-item label="选择单位" prop="unit">
      <el-select v-model="registerUser.unit" placeholder="请选择单位">
        <el-option label="佳木斯公安处" value="佳木斯公安处"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="所在部门" prop="department">
      <el-input
        v-model="registerUser.department"
        placeholder="输入所在部门..."
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="handleRegister('registerForm')"
        type="primary"
        class="submit-btn"
        >注册</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    registerUser: {
      type: Object,
      required: true
    },
    registerRules: {
      type: Object,
      required: true
    }
  },
  setup(props: any) {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    const handleRegister = (formName: string) => {
      ctx.$refs[formName].validate((valid: boolean) => {
        if (valid) {
          alert("注册提交!");
        } else {
          console.log("注册提交失败!!");
          return false;
        }
      });
    };
    return { handleRegister };
  }
};
</script>
<style scoped>
</style>
