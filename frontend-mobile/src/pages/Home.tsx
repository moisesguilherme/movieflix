import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import { theme } from '../core/assets/styles'

const Home: React.FC = ({ }) => {

    const navigation = useNavigation();

    return (
        <View style={theme.container}>
            <Text>MovieFlix Tela Inicial</Text>
            <TouchableOpacity 
                style={{
                    width: 150,
                    backgroundColor: "#FFC700",
                    padding: 10,
                    borderRadius: 4,
                }}
                onPress={() => navigation.navigate("Movies")}
            >
                <Text>Início</Text>
            </TouchableOpacity>
        </View>
    )

};


export default Home; 