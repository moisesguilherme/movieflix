import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans'

import Routes from "./src/routes";

const App: React.FC = () => {

  const [ fontsLoaded ] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  })
  
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}



export default App;