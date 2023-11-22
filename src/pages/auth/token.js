import { getCookie } from 'cookies-next';

export const getAuthToken = () => {

    const token = getCookie('token');

    return token;

}