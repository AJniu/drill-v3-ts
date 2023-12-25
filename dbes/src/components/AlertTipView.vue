<template>
    <el-alert title="info alert" type="info" show-icon id="common-alert-tip" v-show="isShowTip(path)">
        <div class="alert-message" v-html="alertObj.tipMessage"></div>
        <el-checkbox v-model="showTip" @change="showTipChange">总是显示</el-checkbox>
    </el-alert>

    <el-dialog v-model="showTipDialog" width="30%" draggable :close-on-click-modal="false" :close-on-press-escape="false"
        :show-close="false" title="帮助提示">
        <span>请选择隐藏帮助提示的页面范围</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="closeAllTip">
                    所有页面不再展示
                </el-button>
                <el-button @click="closeCurTip">
                    仅当前页面不再显示
                </el-button>
                <el-button @click="cancelChange">取消</el-button>

            </span>
        </template>
    </el-dialog>
</template>

<script setup lang='ts'>
import Cache from '@/utils/cache'
const props = defineProps<{
    alertObj: {
        tipMessage: string
    }
}>()
const { alertObj } = props
const route = useRoute()
const path = route.fullPath

let showTip = ref(true)
const showTipChange = (val: boolean) => {
    if (!val) {
        showTipDialog.value = true
    }
}
// 帮助提示确认弹窗数据
let showTipDialog = ref(false)

// 取消展示
const cancelChange = () => {
    showTip.value = true
    showTipDialog.value = false
}

type HideTip = string[] | boolean | undefined
// 当前页面不再展示
const closeCurTip = () => {
    let hideTip: HideTip = Cache.getLocalCache('hideTip')
    if (Array.isArray(hideTip)) {
        hideTip.push(path)
    } else {
        hideTip = [path]
    }
    Cache.setLocalCache('hideTip', hideTip)
    initVal()
}
// 所有页面不再显示
const closeAllTip = () => {
    Cache.setLocalCache('hideTip', true)
    initVal()
}

// 当前/所有页面不再显示的通用处理
const initVal = () => {
    showTipDialog.value = false
    showTip.value = true
}

// 判断组件在页面的显隐
const isShowTip = (path: string) => {
    let hideTip: HideTip = Cache.getLocalCache('hideTip')
    if (!hideTip) {
        return true
    } else if (hideTip === true) {
        return false
    } else if (hideTip.includes(path)) {
        return false
    } else {
        return true
    }
}
</script>

<style lang='scss' scoped></style>