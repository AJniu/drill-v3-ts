<template>
    <div>
        <el-form :model="form" ref="loginForm" :rules="rules" label-width="80px" label-position="left">
            <el-form-item label="用户名" prop="username">
                <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item label="验证码">
                <el-input v-model="form.verifyCode" />
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang='ts'>
import { FormInstance, FormRules } from 'element-plus';
import { getRequireRule, formValidate } from '@/utils/hooks/useGetRule'
import LocalCache from '@/utils/cache'
import { useLoginStore } from '@/stores/useLogin'
const loginForm = ref<FormInstance>()
interface LoginForm {
    username: string
    password: string
    verifyCode: string
}
const form = reactive<LoginForm>({
    username: LocalCache.getLocalCache('username') ?? '',
    password: LocalCache.getLocalCache('password') ?? '',
    verifyCode: '',
})
// rules 不需要响应式
const rules = reactive<FormRules<LoginForm>>({
    username: [
        ...getRequireRule('请输入用户名'),
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    password: [
        ...getRequireRule('请输入密码'),
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    verifyCode: [
        ...getRequireRule('请输入验证码'),
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})

const { accountLoginFn } = useLoginStore()
const accountLogin = async (isKeepPwd: boolean) => {
    const validateRes = await formValidate(loginForm.value)
    if (validateRes) {
        if (isKeepPwd) {
            LocalCache.setLocalCache('username', form.username)
            LocalCache.setLocalCache('password', form.password)

        } else {
            LocalCache.deleteLocal('username')
            LocalCache.deleteLocal('password')

        }
        accountLoginFn({ ...form })
        return true
    } else {
        return false
    }
}

defineExpose({
    accountLogin
})

</script>

<style lang='scss' scoped></style>