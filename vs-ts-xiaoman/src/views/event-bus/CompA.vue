<template>
    <div>
        <span>CompA</span>
        <button @click="sendMsg">Send</button>
    </div>
</template>

<script setup lang='ts'>
import Bus from "../../utils/event-bus"
import { ref } from "vue";
let msg = ref<string>('a msg from CompA')
const sendMsg = () => {
    Bus.emit("on-send", msg)
}
</script>

<style lang='scss' scoped></style>