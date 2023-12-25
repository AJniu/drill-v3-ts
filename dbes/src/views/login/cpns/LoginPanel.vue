<template>
    <div class="login-panel">
        <h1 class="welcome">欢迎登录</h1>
        <el-tabs type="border-card" stretch>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <i-ep-User />
                        </el-icon>
                        <span>账户登录</span>
                    </span>
                </template>
                <login-account ref="accountRef" />
            </el-tab-pane>
            <el-tab-pane>
                <template #label>
                    <span class="custom-tabs-label">
                        <el-icon>
                            <i-ep-Iphone />
                        </el-icon>
                        <span>手机登录</span>
                    </span>
                </template>
                <login-phone />
            </el-tab-pane>
        </el-tabs>

        <div class="account-control">
            <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
        </div>

        <el-button class="login-btn" type="primary" @click="userLogin">立即登录</el-button>
    </div>
</template>

<script setup lang='ts'>
import LoginAccount from './LoginAccount.vue';
import LoginPhone from './LoginPhone.vue'

// 子组件类型
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const isKeepPwd = ref(true)

const userLogin = async () => {
    const res = await accountRef.value?.accountLogin(isKeepPwd.value)
    if (res) {
        console.log(2111);
    }

}
</script>

<style lang='scss' scoped>
.login-panel {
    height: 300px;
    width: 420px;

    .welcome {
        margin-bottom: 16px;
        font-size: 20px;
        text-align: center;
    }

    .account-control {
        display: flex;
        justify-content: space-between;
        margin: 10px 0;
    }

    .login-btn {
        width: 100%;
    }
}
</style>