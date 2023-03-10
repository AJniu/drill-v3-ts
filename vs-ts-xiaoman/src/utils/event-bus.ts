// 定义Bus类的类型约束，BusType
type BusType = {
    emit: (eventName: string) => void
    on: (eventName: string, callback: Function) => void
}

// 定义事件列表类型
type EventListType = {
    [key: string | number | symbol]: Array<Function>
}

// 约束类Bus必须有emit方法与on方法
class Bus implements BusType {
    // 定义事件列表
    eventList: EventListType

    constructor() {
        // 初始化时间列表
        this.eventList = {}
    }

    // 定义emit方法(发布者)
    // 当发布者触发发布时，遍历订阅者的callback事件列表
    emit(eventName: string, ...args: Array<any>) {
        const callbackArr: Array<Function> = this.eventList[eventName] || []
        console.log('emit run', callbackArr)
        for (const callback of callbackArr) {
            callback.apply(this, args)
        }
    }

    // 定义监听事件方法（订阅者）
    // 在调用Bus.on()的时候已经将callback加入订阅者的callback列表
    on(eventName: string, callback: Function) {
        console.log('on run') // 由此可知，此处先执行，将callback加入对应事件的callback列表
        const callbackArr: Array<Function> = this.eventList[eventName] || []
        callbackArr.push(callback)
        this.eventList[eventName] = callbackArr
    }
}

export default new Bus()
