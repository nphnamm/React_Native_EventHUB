import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {StatusBar, Text} from 'react-native';
import {Provider} from 'react-redux';
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';
import store from './src/redux/store';
import AppRouters from './src/navigators/AppRouters';


const App = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const [accessToken,setAccessToken] = useState('');

  const {getItem,setItem} = useAsyncStorage('assetToken');
  
  

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setIsShowSplash(false);
    },1500);
    return () => clearTimeout(timeout);
    
  },[]);
  useEffect(()=>{
    checkLogin();
  },[])
  const checkLogin = async ()=>{
    const token = await getItem();

    token && setAccessToken(token); 
    console.log('check token', token);
  }

  return (
    <>
     <Provider store={store}>
        <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
        />
        <NavigationContainer>
          <AppRouters/>
        </NavigationContainer>
     </Provider>
    
    </>
  );
};

export default App;