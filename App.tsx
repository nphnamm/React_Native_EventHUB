import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';


const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setIsShowSplash(false);
    },1500);
    return () => clearTimeout(timeout);
  })
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent"/>
      {!isShowSplash ? (
        <SplashScreen/>

      ) : (
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
      )}
    
    </>
  );
};

export default App;