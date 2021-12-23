import React from 'react'
import { createStackNavigator } from  '@react-navigation/stack';
import { Home, Movies} from '../pages';
import { Text } from "react-native";

import { colors, nav } from '../styles';

const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>MovieFlix</Text>

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitle: " ",
            headerStyle: {                   
                backgroundColor: colors.primary,
            },
            headerLeft: () => <HeaderText />,
        }}
    >
        <Stack.Screen 
            name="Home" 
            component={Home}
        />
        <Stack.Screen 
            name="Movies" 
            component={Movies}
        />
    </Stack.Navigator>
    )
}

export default Routes; 