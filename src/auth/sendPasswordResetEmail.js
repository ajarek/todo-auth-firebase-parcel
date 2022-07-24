import {fetchMethod} from "./fetchMethod";
const PASSWORD_RESET_EMAIL_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCMKT92lcL-zfLubUcdoraW87_xm8-JDP4';

export const sendPasswordResetEmail = (email) => {
    return fetchMethod('POST', PASSWORD_RESET_EMAIL_URL, {
        requestType: 'PASSWORD_RESET',
        email,
       
    });
    
}