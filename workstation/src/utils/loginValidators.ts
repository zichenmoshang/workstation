import { ref } from "vue";

interface User {
  username: string;
  password: string;
}

export const loginUser = ref<User>({
  username: "",
  password: "",
});

interface Rules {
  username: {
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: ({
    required: boolean;
    message: string;
    trigger: string;
    min?: undefined;
    max?: undefined;
  } | {
    min: number;
    max: number;
    message: string;
    trigger: string;
    required?: undefined;
  })[];
}

// 校验规则
export const rules = ref<Rules>({
  username: [
    {
      message: "警号不能为空...",
      required: true,
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空...",
      trigger: "blur",
    },
    {
      min: 6,
      max: 30,
      message: "密码的长度必须在6到30位之间...",
      trigger: "blur",
    },
  ],
});