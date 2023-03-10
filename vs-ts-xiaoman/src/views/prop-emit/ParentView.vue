<template>
    <div>
        <span>父组件</span>
        <hr>
        <ChildA @a-click="getDataA"></ChildA>
        <hr>
        <ChildB :data-a="fromChildA"></ChildB>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import ChildA from './ChildA.vue';
import ChildB from './ChildB.vue';
let fromChildA = ref('');
const getDataA = (args: string) => {
    fromChildA.value = args
}

</script>

<style lang='scss' scoped></style>