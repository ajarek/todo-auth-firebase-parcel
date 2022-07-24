import {refreshTokens} from './refreshTokens';
export const checkIfUserIsLoggedIn = () => {
    if(refreshTokens()) {
    return refreshTokens()
        .then(res => {
            if (res.error) {
                return res.error.message;
            }
            localStorage.setItem('token',res.id_token);
            localStorage.setItem('refreshToken',res.refresh_token);
            return res;
        })
    }
}
