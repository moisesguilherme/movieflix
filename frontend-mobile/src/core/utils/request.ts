import axios, { AxiosRequestConfig } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

//const BASE_URL = process.env.MOBILE_APP_BACKEND_URL ?? 'https://moises-movieflix.herokuapp.com';
const BASE_URL = 'https://moises-movieflix.herokuapp.com/';


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
    
    const token = await AsyncStorage.getItem("@token");
    
    const headers = {
        'Authorization': `Bearer ${token}`
    }

    return makeRequest({ ...params, headers })
}