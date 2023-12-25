<template>
    <div class="login-page">
        <login-panel />
    </div>
</template>

<script setup lang='ts'>
import LoginPanel from './cpns/LoginPanel.vue'
</script>

<style lang='scss' scoped>
@import '../../assets/global-mixin';

.login-page {
    @include flex-center;
    height: 100%;
    background: #ccc;
}
</style>