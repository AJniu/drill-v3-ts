import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { NAxiosRequestConfig } from './type'
// 封装axios(类封装性更强)
class NRequest {
    instance: AxiosInstance
    // loading?: any
    // showLoading: boolean
    // cusInterceptors: NInterceptors // 保存各种拦截器，可不保存，直接使用
    constructor(config: NAxiosRequestConfig) {
        // axios.create()创建一个axios新实例（防止向多处不同服务器请求）
        this.instance = axios.create(config)
        // this.cusInterceptors = config.interceptors
        // this.showLoading = config.showLoading ?? true

        // 拦截器执行顺序：后定义的请求拦截器先执行，先定义的响应拦截器先执行

        // 设置实例自定义请求拦截器（每个实例不同，创建实例时不设置就没有）
        this.instance.interceptors.request.use(
            config.interceptors?.reqIntercepot,
            config.interceptors?.reqErrIntercepor
        )
        // 设置实例自定义响应拦截器（每个实例不同，创建实例时不设置就没有）
        this.instance.interceptors.response.use(
            config.interceptors?.resIntercepot,
            config.interceptors?.reqErrIntercepor
        )

        // 设置请求拦截器(每个实例都有)
        this.instance.interceptors.request.use(
            (config) => {
                const token = 'ssstoken'
                if (token) {
                    config.headers.token = token
                    // config.headers.Authorization = token
                }
                // if (this.showLoading) {
                //     this.loading = ElLoading.service({
                //         lock: true,
                //         text: '请求中',
                //         background: 'rgba(0, 0, 0, 0.5)'
                //     })
                // }
                return config
            },
            (err) => {
                return err
            }
        )

        //设置响应拦截器(每个实例都有)
        this.instance.interceptors.response.use(
            (res) => {
                // switch (res.status) {
                //     case 200:
                //         return res.data
                // }
                // this.loading?.close()
                if (res.status === 200) {
                    return res.data
                } else if (res.status) {
                    return res.statusText
                }
            },
            (err) => {
                // this.loading?.close()
                console.log('errxsxs')
                return err
            }
        )
    }
    // axios.request()方法
    request<T>(config: NAxiosRequestConfig<T>): Promise<T> {
        return new Promise((resolve, reject) => {
            // 为每个请求单独添加请求拦截器
            if (config.interceptors?.reqIntercepot) {
                config = config.interceptors.reqIntercepot(config as any)
            }
            this.instance
                .request<any, T>(config)
                .then((res) => {
                    // 为每个请求单独添加响应拦截器
                    if (config.interceptors?.resIntercepot) {
                        res = config.interceptors.resIntercepot(res)
                    }
                    console.log(`req type`, typeof res)
                    resolve(res)
                })
                .catch((err) => {
                    console.log(err)
                    reject(err)
                })
                .finally(() => {})
        })
    }

    // get方法
    get<T>(config: NAxiosRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'GET' })
    }

    // post方法
    post<T>(config: NAxiosRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'POST' })
    }

    // delete方法
    delete<T>(config: NAxiosRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'DELETE' })
    }

    // put方法
    put<T>(config: NAxiosRequestConfig<T>): Promise<T> {
        return this.request<T>({ ...config, method: 'PUT' })
    }
}
export default NRequest
