<template>
    <div class="sync">
        <div class="sync-content">
            <div><img :src="person.data.url" alt=""></div>
            <div class="sync-pop">
                <div>{{ person.data.name }}</div>
                <div>{{ person.data.age }}</div>
            </div>
        </div>
        <hr>
        <div>{{ person.data.desc }}</div>

    </div>
</template>

<script setup lang='ts'>
import axios from 'axios'
import { reactive } from 'vue';
interface Data {
    data: {
        name: string
        age: number
        url: string
        desc: string
    }
}
let person = reactive<Data>({
    data: {
        name: '',
        age: 0,
        url: '',
        desc: '',
    }
})

const { data } = await axios.get('./data.json')

person.data = data

</script>

<style lang='scss' scoped></style>