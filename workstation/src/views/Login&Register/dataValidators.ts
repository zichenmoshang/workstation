import { ref } from "vue";

interface User {
  username: string;
  password: string;
}

export const loginUser = ref<User>({
  username: "",
  password: "",
});

interface RegisterUser {
  username: string;
  realname: string;
  password: string;
  unit: string;
  department: string;
}

export const registerUser = ref<RegisterUser>({
  username: "",
  realname: "",
  password: "",
  unit: "",
  department: ""
});