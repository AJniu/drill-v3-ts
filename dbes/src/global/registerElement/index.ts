import { App } from 'vue'
// 按需导入element-plus 全局注册组件
import { ElButton, ElAside, ElCard, ElInput } from 'element-plus'

const components = [ElButton, ElAside, ElCard, ElInput]
export default function (app: App) {
    for (const component of components) {
        app.component(component.name, component)
    }
}
