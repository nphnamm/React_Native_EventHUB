import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {SplashScreen} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import {addAuth, authSelector} from '../redux/reducers/authReducer';
import MainNavigator from './MainNavigator';
import AuthNavigator from './AuthNavigator';

const AppRouters = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const {getItem} = useAsyncStorage('auth');
  const dispatch = useDispatch();
  useEffect(() => {
    checkLogin();
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);
  const checkLogin = async () => {
    const res = await getItem();

    res && dispatch(addAuth(JSON.parse(res)));
  };

  const auth = useSelector(authSelector);

  return <>{isShowSplash ? <SplashScreen /> : auth.accesstoken? (
    <MainNavigator/>
  ):(
    <AuthNavigator/>
  )}</>;
};

export default AppRouters;
