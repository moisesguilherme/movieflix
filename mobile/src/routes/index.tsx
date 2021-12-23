import React from 'react'
import { createStackNavigator } from  '@react-navigation/stack';
import { Home, Movies} from '../pages';

import { colors } from '../styles';

const Stack = createStackNavigator();


const Routes: React.FC = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTitle: " ",
            headerStyle: {                   
                backgroundColor: colors.primary,
            },
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