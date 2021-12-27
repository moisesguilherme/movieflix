import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { doLogout, isAuthenticated } from '../services/auth';

import { nav, text } from '../styles';


const NavBar: React.FC = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();

    async function logged() {
        const result = await isAuthenticated();
        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    function logout() {
        doLogout();
        navigation.navigate("Login");
    }

    useEffect(() => {
        logged();
    }, [])


    return (
        <>
            {authenticated && 
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