import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import { doLogout, isAuthenticated, isTokenValid } from '../utils/auth';

import { nav, text } from '../assets/styles';


const NavBar: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    async function logout() {
        await doLogout();
        navigation.navigate("Login");        
    }

    useEffect(() => {
        logged()        
    }, [])

    return (
        <>
            { (authenticated && route.name != "Login") && 
            (
                <TouchableOpacity
                    style={nav.logoutBtn}
                    onPress={() => logout()}
                >
                    <Text
                        style={text.logoutText}
                    >
                      Sair
                    </Text>
                </TouchableOpacity>
            ) 
         }
        </>
    )

}

export default NavBar;