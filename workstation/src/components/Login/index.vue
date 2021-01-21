<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item label="警号" prop="username">
      <el-input
        v-model="loginUser.username"
        placeholder="输入警号..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="输入密码..."
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleLogin('loginForm')"
        type="primary"
        class="submit-btn"
        >提交</el-button
      >
    </el-form-item>

    <!-- 找回密码 -->
    <div class="tiparea">
      <p>忘记密码？联系 <a>网安支队</a></p>
    </div>
  </el-form>
</template>

<script lang="ts">
import { ref, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { store } from "../../store/index";
import { ElMessage } from "element-plus";
export default {
  props: {
    loginUser: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    }
  },
  setup(props: any) {
    // @ts-ignore
    const { ctx } = getCurrentInstance();
    const router = useRouter();
    // 触发登录方法
    const handleLogin = (formName: string) => {
      ctx.$refs[formName].validate(async (valid: boolean) => {
        if (valid) {
          // login(ctx, props.loginUser)
          //   .then((res: any) => {
          //     console.log(res);
          //     if (res.status === 1) {
          //       ElMessage.success(res.msg);
          //       const token = res.data.token;
          //       console.log(token)
          //       localStorage.setItem("token", token);
          //       // router.push('/');
          //     } else {
          //       ElMessage.error(res.msg);
          //     }
          //   })
          //   .catch((err: any) => {
          //     console.log(err);
          //   });
          // alert("注册提交!");
          await store.dispatch("LOGIN", props.loginUser)
          // await store.dispatch("USERINFO")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    };

    return { handleLogin };
  }
};
</script>
<style scoped>
/* form */
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit-btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
}
.tiparea p a {
  color: #409eff;
}
</style>