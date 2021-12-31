import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Alert} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme } from "../core/assets/styles";

import eyesOpened from "../core/assets/eyes-opened.png"
import eyesClosed from "../core/assets/eyes-closed.png"
import { login } from '../core/utils/auth';

const Login: React.FC = () => {
    const navigation = useNavigation();
    const [hidePassword, setHidePassord] = useState(true);
    const [userFetchData, setUserFechData] = useState({});
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    });


    async function handleLogin() {
        try{
            const data = await login(userInfo);
            setUserFechData(data);
            navigation.navigate("Movies");
        }catch(e){
            //console.warn("Login inválido")
            Alert.alert('Login', 'O nome do usuário ou a senha está incorreta.', [
                { text: 'OK', style:'cancel' }
              ])
        }       
    }

//<ScrollView style={theme.container}>

    return (
        <ScrollView contentContainerStyle={ theme.container }>
            <View style={theme.loginCard}>
                <Text style={text.loginTitle}>Login</Text>
                <View style={theme.form}>
                    <TextInput
                        placeholder="Email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        style={theme.textInput}
                        value={userInfo.username}
                        onChangeText={
                            (e) => {
                                const newUserInfo = { ...userInfo };
                                newUserInfo.username = e;
                                setUserInfo(newUserInfo);
                            }
                        }
                    />
                    <View style={theme.passwordGroup}>

                        <TextInput
                            placeholder="Senha"
                            autoCapitalize="none"
                            value={userInfo.password}
                            style={theme.textInput}
                            secureTextEntry={hidePassword}
                            onChangeText={
                                (e) => {
                                    const newUserInfo = { ...userInfo };
                                    newUserInfo.password = e;
                                    setUserInfo(newUserInfo);
                                }
                            }
                        />

                        <View style={theme.toggle}>
                            <TouchableOpacity
                                
                                onPress={() => setHidePassord(!hidePassword)}
                            >
                                <Image
                                 source={hidePassword ? eyesOpened : eyesClosed}                                
                                 style={theme.eyesIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity
                    style={theme.primaryButton}
                    activeOpacity={0.8}
                    onPress={() => handleLogin()}
                >
                    <View style={theme.buttonTextContainer}>
                        <Text style={text.primaryText}>Fazer Login</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
};


export default Login;

