import { api, TOKEN } from "./index";
import queryString from 'query-string';

interface AuthProps {
    username: string;
    password: string;
}


export async function login(userInfo: AuthProps) {
    const data = queryString.stringify({ ...userInfo, grant_type: "password" });

    const result = await api.post('oauth/token', data, {
        headers:{
            Authorization: TOKEN,
            "Content-Type": "Content-Type: application/x-www-form-urlencoded",
        },
    });

    return result;
}