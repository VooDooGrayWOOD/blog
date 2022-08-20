const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
const ARTICLE_KEY = 'article-local-id'

export function setTokens({
    articleId,
    refreshToken,
    accessToken,
    userId,
    expiresIn = 3600
}) {
    const expiresDate = new Date().getTime() + expiresIn * 1000
    localStorage.setItem(USERID_KEY, userId)
    localStorage.setItem(ARTICLE_KEY, articleId)
    localStorage.setItem(TOKEN_KEY, accessToken)
    localStorage.setItem(REFRESH_KEY, refreshToken)
    localStorage.setItem(EXPIRES_KEY, expiresDate)
}

export function getAccessToken() {
    return localStorage.getItem(TOKEN_KEY)
}

export function removeAuthData() {
    localStorage.removeItem(USERID_KEY)
    localStorage.removeItem(ARTICLE_KEY)
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(REFRESH_KEY)
    localStorage.removeItem(EXPIRES_KEY)
}

export function getRefreshToken() {
    return localStorage.getItem(REFRESH_KEY)
}

export function getTokenExpiresDate() {
    return localStorage.getItem(EXPIRES_KEY)
}

export function getUserId() {
    return localStorage.getItem(USERID_KEY)
}

export function getArticleId() {
    return localStorage.getItem(ARTICLE_KEY)
}

const localStorageService = {
    setTokens,
    getAccessToken,
    getRefreshToken,
    getTokenExpiresDate,
    removeAuthData,
    getUserId,
    getArticleId
}

export default localStorageService
