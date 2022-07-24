import {fetchMethod} from "./fetchMethod";
const SIGN_IN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCMKT92lcL-zfLubUcdoraW87_xm8-JDP4';

export const signIn = (email, password) => {
    return fetchMethod('POST', SIGN_IN_URL, {
        email,
        password,
        returnSecureToken: true
    });
    
}