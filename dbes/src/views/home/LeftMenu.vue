<template>
    <div class="menu-box" :class="{ 'collaps-wid': !isCollapse }">
        <div class="collaps-box" @click="handleCollaps">
            <el-icon v-if="isCollapse"><i-ep-DArrowLeft /></el-icon>
            <el-icon v-else><i-ep-DArrowRight /></el-icon>
        </div>
        <el-menu default-active="/base-type" class="el-menu-vertical-demo" :collapse="isCollapse" router>
            <template v-for="item in menuList[0].children">
                <template v-if="item.meta">
                    <el-menu-item :index="item.path">{{ item.meta.title }}</el-menu-item>
                </template>
            </template>
        </el-menu>

    </div>
</template>

<script setup lang='ts'>
let isCollapse = ref<boolean>(true)
// 处理收缩
const handleCollaps = () => {
    isCollapse.value = !isCollapse.value
}
const router = useRouter()
const menuList = router.options.routes.filter(item => item.children)

</script>

<style lang='scss' scoped>
@mixin height-line($height) {
    height: $height;
    line-height: $height;
}

.menu-box {
    width: 220px;
    height: 100%;
    position: relative;

    .el-menu {
        border-right: none;

        .el-menu-item {
            @include height-line(32px)
        }
    }

    .collaps-box {
        @include height-line(32px);
        width: 100%;
        text-align: center;
        background-color: #ccc;
    }
}

.collaps-wid {
    width: 32px;
}
</style>