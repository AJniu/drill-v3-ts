<template>
    <div class="child-comp">
        <!-- 具名插槽 -->
        <slot name="head-slot">

        </slot>
        <slot>匿名插槽默认数据</slot>

        <!-- 作用域插槽第一种写法 -->
        <!-- <div :key="item.name" v-for="(item, index) in data">
            <slot name="footer-slot" :personName="item.name" :personAge="item.age" :personIndex="index">

            </slot>
        </div> -->

        <slot name="footer-slot" :person="data"></slot>

        <slot name="dynamic"></slot>

    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';

interface Person {
    name: string
    age: number
}

const data = reactive<Person[]>([
    {
        name: 'xx',
        age: 23
    },
    {
        name: 'xy',
        age: 25
    },
    {
        name: 'zx',
        age: 24
    }
])
</script>

<style lang='scss' scoped></style>