<template>
    <header>
        <div class="head-left">
            中安星云
        </div>
        <div class="head-right">修改密码</div>
    </header>
    <main>
        <LeftSide></LeftSide>
        <ContentView></ContentView>
    </main>
</template>

<script setup lang="ts">
import LeftSide from './LeftSide.vue';
import ContentView from './ContentView.vue'
</script>

<style lang="scss" scoped>
@import "@/assets/import-scss/_color.scss";

header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: $main-color;
    display: flex;
    justify-content: space-between;
}

main {
    flex: 1;
    display: flex;
}
</style>
