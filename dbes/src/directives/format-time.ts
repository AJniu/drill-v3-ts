// import dayjs from 'dayjs' // dayjs
import { dayjs } from 'element-plus' // element-plus 自带了dayjs 的支持

export default function (app) {
  // 注册全局自定义指令 - 对时间戳进行格式化
  app.directive('format-time', {
    // 在指令周期mounted进行修改
    mounted(el, bindings, vnode, preVnode) {
      // 获取指令绑定元素所展示的时间戳（字符串格式）
      const textContent = el.textContent
      let timestamp = parseInt(textContent)

      //   时间戳， 10位数字是以秒为单位， 13位数字以毫秒为单位
      if (textContent.length === 10) {
        timestamp *= 1000
      }
      //   dayjs格式化时间戳 - 根据使用者传递的值处理格式，未传递则使用默认值
      el.textContent = dayjs(timestamp).format(bindings.value || 'YYYY-MM-DD HH:mm:ss')

      console.log('tx', textContent)
    }
  })
}
