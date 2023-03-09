<template>
    <Suspense>
        <SyncView></SyncView>

        <template #fallback>
            <SkeletonViewVue></SkeletonViewVue>
        </template>
    </Suspense>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
import SkeletonViewVue from './SkeletonView.vue';

// 模拟异步组件
const SyncView = defineAsyncComponent(async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(1)
        }, 2000);
    })
    return import("./SyncView.vue")
})
</script>

<style lang='scss' scoped></style>