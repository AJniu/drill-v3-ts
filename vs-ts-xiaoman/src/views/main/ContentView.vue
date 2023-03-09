<template>
    <div class="content-view">
        <SlotChild>
            <!-- 使用v-slot:name指定插槽名称，不指定为默认插槽v-slot:default -->
            <template v-slot:head-slot>
                <div>head-slot: form parent data</div>
            </template>

            <!-- v-slot可不写 -->
            <template v-slot>
                <div>from parent page v-slot</div>
            </template>

            <!-- 可使用#代替(v-slot:),在开发使用较多 -->
            <!-- 对应作用域插槽第一种写法。在子组件处理数据 -->
            <!-- <template #footer-slot="{ personName, personAge, personIndex }">
                来自子组件作用域插槽：{{ personIndex }} --- {{ personName }} --- {{ personAge }}
            </template> -->

            <!-- 在父组件处理数据 -->
            <template #footer-slot="{ person }">
                <div>
                    <div v-for="(item, index) in person" :key="item.name">
                        来自子组件作用域插槽{{ index }} ：{{ item.name }} --- {{ item.age }}
                    </div>
                </div>

            </template>

            <!-- 动态插槽: 使用一个变量插槽名来动态渲染插槽 -->
            <template #[dynamic]>
                <div>from dynamic slot</div>
            </template>
        </SlotChild>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import SlotChild from './child/SlotChild.vue';

let dynamic = ref<string>('dynamic')

</script>

<style lang='scss' scoped>
.content-view {
    flex: 1;

    .child-comp {
        >div {
            height: 200px;
            margin-top: 20px;
            border: 1px solid saddlebrown;
        }
    }
}
</style>