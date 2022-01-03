import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { doLogout } from './auth';

// Atenção:
// Se for testar local no emulador Android ou IOS, 
// precisa colocar o número do ip da sua máquina no lugar do localhost:8080
// ou usar o backend em produção no Heroku: 'https://moises-movieflix.herokuapp.com';

// const BASE_URL = process.env.MOBILE_APP_BACKEND_URL ?? 'https://moises-movieflix.herokuapp.com';
const BASE_URL = process.env.MOBILE_APP_BACKEND_URL ?? 'http://localhost:8080'

export const api = axios.create({
    baseURL: BASE_URL,
});

export async function makeRequest(params: AxiosRequestConfig){
    return axios({
       ...params,
       baseURL: BASE_URL
    });
}


export async function makePrivateRequest(params: AxiosRequestConfig){
    //console.warn("Request", params )
    const token = await AsyncStorage.getItem("@token");
    
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return makeRequest({ ...params, headers })
}