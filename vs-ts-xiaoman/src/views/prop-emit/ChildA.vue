<template>
    <div>
        <span>ChildA</span>
        <button @click="ASend">Send to Parent</button>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

let dataA = ref("I come from ChildA")

// 定义emit
const emit = defineEmits(['a-click'])

const ASend = () => {
    emit('a-click', dataA.value)
}



</script>

<style lang='scss' scoped></style>