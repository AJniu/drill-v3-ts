import { App } from 'vue'
import registerElement from './registerElement'
export default function (app: App) {
    // 对按需导入的组件进行全局引入
    registerElement(app)
}
