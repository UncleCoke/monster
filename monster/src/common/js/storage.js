/**
 * 对sessionStorage操作
 */
export const _setSessionStore = (key, value, type) => {
    if (!key) return
    if (type === 'json') {
        value = JSON.stringify(value)
    }
    sessionStorage.setItem(key, value)
}

export const _getSessionStore = (key, type) => {
    if (!sessionStorage.getItem(key)) {
        return
    }
    if (type === 'json') {
        return JSON.parse(sessionStorage.getItem(key))
    } else {
        return sessionStorage.getItem(key)
    }
}

export const _removeSessionStore = key => {
    if (!key) return
    sessionStorage.removeItem(key)
}

/**
 * 对localStorage操作
 */
export const _setLocalStore = (key, value, type) => {
    if (!key) return
    if (type === 'json') {
        value = JSON.stringify(value)
    }
    localStorage.setItem(key, value)
}
export const _getLocalStore = (key, type) => {
    if (!localStorage.getItem(key)) {
        return
    }
    if (type === 'json') {
        return JSON.parse(localStorage.getItem(key))
    } else {
        return localStorage.getItem(key)
    }
}
export const _removeLocalStore = key => {
    if (!key) return
    localStorage.removeItem(key)
}