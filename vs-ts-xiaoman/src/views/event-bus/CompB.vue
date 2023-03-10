<template>
    <div>
        <span>CompB</span>
        <div>
            <p v-for="(item, index) in receivedMsg" :key="index">{{ item }}</p>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';
import Bus from "../../utils/event-bus"

const receivedMsg = reactive<string[]>([])

Bus.on("on-send", (args: string) => {
    receivedMsg.push(args)
})
</script>

<style lang='scss' scoped></style>