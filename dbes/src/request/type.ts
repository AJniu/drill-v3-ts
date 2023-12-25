import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'
interface NInterceptors<T = AxiosResponse> {
    reqIntercepot?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    reqErrIntercepor?: (error: any) => any

    resIntercepot?: (config: T) => T
    resErrIntercepor?: (error: any) => any
}
// 自定义Axios请求参数config的接口
interface NAxiosRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: NInterceptors<T>
    showLoading?: boolean
}

export { NAxiosRequestConfig }
