import { defineStore } from 'pinia'
interface LoginForm {
    username: string
    password: string
    verifyCode: string
}
export const useLoginStore = defineStore('login', () => {
    const token = ref('')
    const userInfo = reactive({})
    const count = ref(0)
    // 相当于vuex的getter
    const doubleCount = computed(() => count.value * 2)
    // 相当于veux的action
    function increment() {
        count.value++
    }

    // 用户登录
    const accountLoginFn = (loginForm: LoginForm) => {
        console.log(loginForm)
    }

    return { token, userInfo, accountLoginFn, doubleCount, increment }
})
