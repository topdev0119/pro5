import cookie from "js-cookie"

import Router from "next/router"

// set in cookie
export const setCookie = (key, value) => {
    if (typeof window !== "undefined") {
        cookie.set(key, value, {
            expires: 1
        })
    }
}

// remove from cookie
export const removeCookie = (key) => {
    if (typeof window !== "undefined") {
        cookie.remove(key)
    }
}

// get from cookie such as stored token
export const getCookie = (key, req) => {
    return typeof window !== "undefined" ? getCookieFromBrowser(key) : getCookieFromServer(key, req)
}

export const getCookieFromBrowser = (key) => {
    return cookie.get(key)
}

export const getCookieFromServer = (key, req) => {
    if (!req.headers.cookie) {
        return undefined
    }
    // console.log('req.headers.cookie', req.headers.cookie)
    let token = req.headers.cookie.split(";").find(c => c.trim().startsWith(key + "="))
    if (!token) {
        return undefined
    }
    let tokenValue = token.split("=")[1]
    // console.log('getCookieFromServer', tokenValue)
    return tokenValue
}


// set in localstorage
export const setLocalStorage = (key, value) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

// remove from localstorage
export const removeLocalStorage = (key) => {
    if (typeof window !== "undefined") {
        localStorage.removeItem(key)
    }
}

// authenticate user by passing data to cookie and localstorage during signin
export const authenticate = (response, next) => {
    // next 这里要看一下之后的实现
    setCookie('token', response.data.token)
    setLocalStorage('user', response.data.user)
    next()
}


// access user info from localstorage
export const isAuth = () => {
    if (typeof window !== "undefined") {
        const cookieChecked = getCookie('token')
        if (cookieChecked) {
            if (localStorage.getItem('user')) {
                return JSON.parse(localStorage.getItem('user'))
            } else {
                return false
            }
        }
    }
}

// logout
export const logout = () => {
    removeCookie('token')
    removeLocalStorage('user')
    Router.push('/login')
}


