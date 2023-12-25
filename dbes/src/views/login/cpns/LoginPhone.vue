<template>
    <div>
        <el-form :model="form" :rules="rules" label-width="80px" label-position="left">
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone" />
            </el-form-item>
            <el-form-item label="验证码" prop="verifyCode">
                <el-input v-model="form.verifyCode" />
                <el-button type="primary" class="verify-code" @click="onSubmit">获取验证码</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script setup lang='ts'>
import { getRequireRule } from '@/utils/hooks/useGetRule'
const form = reactive({
    phone: '',
    verifyCode: '',
})

const rules = reactive({
    phone: [
        ...getRequireRule('请输入手机号'),
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    verifyCode: [
        ...getRequireRule('请输入验证码'),
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
})

const onSubmit = () => {
    console.log('submit!')
}
</script>

<style lang='scss' scoped>
.verify-code {
    transform: translateX(16px);
}
</style>