<template>
    <div>
        <span>ChildB</span>
        <br>
        <span>{{ props.dataA || 'default value' }}</span>
    </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
    dataA: string
}>()

</script>

<style lang='scss' scoped></style>