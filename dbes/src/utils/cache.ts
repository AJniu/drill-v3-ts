class LocalCache {
    setLocalCache(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value))
    }

    getLocalCache(key: string) {
        const val = JSON.parse(localStorage.getItem(key))
        if (val !== null) {
            return val
        }
    }

    deleteLocal(key: string) {
        localStorage.removeItem(key)
    }

    clearCache() {
        localStorage.clear()
    }

    setSessionCache(key: string, value: any) {
        sessionStorage.setItem(key, JSON.stringify(value))
    }

    getSessionCache(key: string) {
        const val = JSON.parse(sessionStorage.getItem(key))
        if (val !== null) {
            return val
        }
    }

    deleteSession(key: string) {
        sessionStorage.removeItem(key)
    }

    clearSession() {
        sessionStorage.clear()
    }
}

export default new LocalCache()
