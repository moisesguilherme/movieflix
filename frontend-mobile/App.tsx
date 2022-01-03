import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'
import AppLoading from 'expo-app-loading'

import Routes from "./src/routes";

const App: React.FC = () => {

  const [ fontsLoaded ] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })

  if(!fontsLoaded)
    return <AppLoading />
  
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}



export default App;