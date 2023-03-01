<template>
  <div class="about">
    <h1>新鲜功能模块</h1>
	<div>
      	<!-- 动态事件：与对象属性类似，使用[]包裹的元素会被解析为变量 -->
      	<button @[clickEvent]="handleChange">单击/双击事件切换</button>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
let clickEvent = ref('click')

const handleChange = () => {
  console.log(clickEvent)
  if (clickEvent.value === 'click') {
    clickEvent.value = 'dblclick'
    return
  }
  clickEvent.value = 'click'
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
