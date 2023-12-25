// 自定义指令列表项
import { App } from 'vue'
import registerFormatTime from './format-time'

export default function registerDirectives(app: App) {
    registerFormatTime(app)
}
