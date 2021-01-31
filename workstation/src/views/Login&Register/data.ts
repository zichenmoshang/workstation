import { ref } from "vue"
import { LoginUser } from "../../components/Login/type"
import { RegisterUser } from "../../components/Register/type"

export const loginUser = ref<LoginUser>({
  username: "",
  password: ""
})



export const registerUser = ref<RegisterUser>({
  username: "",
  realname: "",
  password: "",
  unit: "",
  department: ""
})
