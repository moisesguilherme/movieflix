import { api } from "./request";
import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { encode as btoa } from 'base-64';

export const CLIENT_ID = process.env.CLIENT_ID ?? 'movieflix'
export const CLIENT_SECRET = process.env.CLIENT_SECRET ?? 'movieflix123'

interface AuthProps {
    username: string;
    password: string;
}

export type Role = 'ROLE_VISITOR' | 'ROLE_MEMBER';

type AccessToken = {
    exp: number;
    user_name: string;
    authorities: Role[];
}

type LoginResponse = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    userFirstName: string,
    userId: number;
}

export async function login(userInfo: AuthProps) {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`

    const data = queryString.stringify({ ...userInfo, grant_type: "password" });

    const result = await api.post('oauth/token', data, {
        headers: {
            Authorization:  `Basic ${btoa(token)}`, //Binary to ASCII
            "Content-Type": "application/x-www-form-urlencoded",
        },
    });
    
    const { access_token } = result.data;
    setAsyncKeys("@token", access_token);

    return result;
}

async function setAsyncKeys(key: string, value: string) {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

export async function isTokenValid(){
    const { exp } = await getAccessTokenDecoded(); 
    return Date.now() <= exp * 1000  //Expira em um dia
}

export async function isAuthenticated() {
    try {
        const token = await AsyncStorage.getItem("@token");
        const valid = await isTokenValid();
        return (token && valid) ? true : false;
    } catch (e) {
        console.warn(e);
    }
}

export async function getAccessTokenDecoded(){
    const access_token = await AsyncStorage.getItem("@token") ?? '';

    try{
        const tokenDecoded = jwtDecode(access_token);
        return tokenDecoded as AccessToken;
    }catch(error){
        return {} as AccessToken;
    }   
}

export async function isAllowedByRole(role: Role){
    const { authorities } = await getAccessTokenDecoded();     
    return  authorities.toString() === role;  
}

export async function doLogout() {
    try {
        AsyncStorage.removeItem("@token");
    } catch (e) {
        console.warn(e);
    }
}