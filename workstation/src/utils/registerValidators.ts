import { ref } from "vue";

interface RegisterUser {
  username: string;
  realname: string;
  password: string;
  password2: string;
  unit: string;
  department: string;
}

export const registerUser = ref<RegisterUser>({
  username: "",
  realname: "",
  password: "",
  password2: "",
  unit: "",
  department: ""
});

interface RegisterRules {
  username: (
    | {
        message: string;
        required: boolean;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  realname: {
    message: string;
    required: boolean;
    trigger: string;
  }[];
  password: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
  )[];
  password2: (
    | {
        required: boolean;
        message: string;
        trigger: string;
      }
    | {
        min: number;
        max: number;
        message: string;
        trigger: string;
      }
    | {
        validator: (rule: RegisterRules, value: string, callback: any) => void;
        trigger: string;
      }
  )[];
  unit: {
    required: boolean;
    message: string;
    trigger: string;
  }[];
  department: {
    required: boolean;
    message: string;
    trigger: string;
  }[];
}

const validatePass2 = (rule: RegisterRules, value: string, callback: any) => {
  if (value === "") {
    callback(new Error("请再次输入密码"));
  } else if (value !== registerUser.value.password) {
    callback(new Error("两次输入密码不一致!"));
  } else {
    callback();
  }
};

export const registerRules = ref<RegisterRules>({
  username: [
    {
      message: "警号不能为空...",
      required: true,
      trigger: "blur"
    },
    {
      min: 6,
      max: 6,
      message: "长度为6个字符",
      trigger: "blur"
    }
  ],
  realname: [
    {
      message: "真实姓名不能为空...",
      required: true,
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码不能为空...",
      trigger: "blur"
    },
    {
      min: 6,
      max: 30,
      message: "密码的长度必须在6到30位之间...",
      trigger: "blur"
    }
  ],
  password2: [
    {
      required: true,
      message: "确认密码不能为空...",
      trigger: "blur"
    },
    {
      min: 6,
      max: 30,
      message: "确认密码的长度必须在6到30位之间...",
      trigger: "blur"
    },
    { validator: validatePass2, trigger: "blur" }
  ],
  unit: [
    {
      message: "单位不能为空...",
      required: true,
      trigger: "blur"
    }
  ],
  department: [
    {
      required: true,
      message: "部门不能为空...",
      trigger: "blur"
    }
  ]
});
