import { fetchMethod } from "./fetchMethod";
const REFRESH_TOKEN_URL = 'https://identitytoolkit.googleapis.com/v1/token?key=AIzaSyCMKT92lcL-zfLubUcdoraW87_xm8-JDP4'

export const refreshTokens = () => {
    const refreshToken = localStorage.getItem('refreshToken')
    if (refreshToken) {
    return fetchMethod('POST', REFRESH_TOKEN_URL, {
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
    })
}
else {
    return
}
}
