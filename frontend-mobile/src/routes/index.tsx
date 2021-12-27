import React from 'react'
import { createStackNavigator } from  '@react-navigation/stack';
import {  Movies, Login, MovieDetails} from '../pages';
import { NavBar } from "../components";
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
            headerRight: () => <NavBar/>
        }}
    >
        <Stack.Screen 
            name="Login" 
            component={Login}
        />
        <Stack.Screen 
            name="Movies" 
            component={Movies}
        />
        <Stack.Screen 
                name="MovieDetails" 
                component={MovieDetails}
        />
    </Stack.Navigator>
    )
}

export default Routes; 