<template>
    <el-container>
        <el-header>header</el-header>
        <el-main>
            <div class="main__left">
                <LeftMenu></LeftMenu>
            </div>
            <div class="main__right">
                <!-- 路由占位符 -->
                <RouterView />
            </div>
        </el-main>
        <el-footer>footer</el-footer>
    </el-container>
</template>

<script setup lang='ts'>
import LeftMenu from './LeftMenu.vue';
</script>

<style lang='scss' scoped>
@mixin com-fixed($height, $bc) {
    position: fixed;
    z-index: 999;
    width: 100%;
    height: $height;
    line-height: $height;
    background-color: $bc;
}

.el-container {
    height: 100%;

    // 头部样式
    .el-header {
        @include com-fixed(40px, var(--main-theme-bg));
    }

    .el-main {
        display: flex;
        padding: 40px 0 20px;
        overflow: inherit;

        .main__left {
            border-right: 1px solid #ccc;
        }

        .main__right {
            flex: 1;
            padding: 16px;
        }
    }

    // 底部样式
    .el-footer {
        @include com-fixed(20px, #bfa);
        bottom: 0;
    }
}
</style>