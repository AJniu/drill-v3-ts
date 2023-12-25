// 导入axiox：axios库默认导出的是一个axios实例对象
import axios from 'axios'
// 使用httpbin模拟get请求
axios
    .get('https://httpbin.org/get', {
        params: {
            name: 'polar bear',
            age: 18
        },
        // 局部配置选项
        timeout: 10000,
        headers: {}
    })
    .then((res) => console.log(res.data))

// 模拟post请求
axios
    .post('https://httpbin.org/post', {
        data: {
            name: 'post polar bear',
            age: 18
        }
    })
    .then((res) => console.log(res.data))

// axios的配置选项（全局）
// 1. baseURL
axios.defaults.baseURL = ''
// 2. timeout: 请求超时
axios.defaults.timeout = 60000
// 3. headers：默认请求头信息
// axios.defaults.headers = {}

// axios 请求函数
// 1. axios.all([axios.get(url), axios.post(url) ....]).then((res: [res1, res2]) => console.log(res))

// axios 拦截器
// 请求拦截器(fn1, fn2)
// fn1（请求发送成功会执行的回调）
// fn2（请求发送失败会执行的回调）
axios.interceptors.request.use(
    (config) => {
        // 可以做请求相关操作，如添加token，添加loading等
        // 请求成功的拦截
        return config
    },
    (err) => {
        // 请求失败的拦截
        return err
    }
)
// 相应拦截器
// fn1（数据相应成功会执行的回调, 2xx）
// fn2（数据相应失败会执行的回调）
axios.interceptors.response.use(
    (res) => {
        // 相应成功的拦截
        return res
    },
    (err) => {
        // 相应失败的拦截
        return err
    }
)
