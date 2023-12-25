import { baseUrl, TIME_OUT } from './envConfig'
import NRequest from './request'

// 导出
export default new NRequest({
    baseURL: baseUrl,
    timeout: TIME_OUT,
    interceptors: {
        reqIntercepot(config) {
            console.log('req success interceptor')

            return config
        },
        reqErrIntercepor(error) {
            console.log('req failed interceptor')
            return error
        },

        resIntercepot(config) {
            console.log('res success interceptor')
            return config
        },

        resErrIntercepor(error) {
            console.log('res failed interceptor')
            return error
        }
    }
})
