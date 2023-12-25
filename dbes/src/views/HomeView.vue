<template>
    <main>
        HomePage---
        <AlertTipView :alert-obj="AlertTip"></AlertTipView>
    </main>
</template>

<script setup lang="ts">
import AlertTipView from "@/components/AlertTipView.vue";
const AlertTip = {
    tipMessage: '111'
}
</script>
