let baseUrl = ''
let TIME_OUT = 10000

if (import.meta.env.MODE === 'development') {
    baseUrl = ''
    TIME_OUT = 5000
} else if (import.meta.env.MODE === 'prodution') {
    baseUrl = ''
    TIME_OUT = 30000
}

export { baseUrl, TIME_OUT }
