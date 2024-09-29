import { View, Text, Button } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import { ButtonComponent } from '../../components'

const HomeScreen = ({navigation}:any) => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text>HomeScreen</Text>
      <ButtonComponent
        type="primary"
        text="Logout"
        onPress={async () => {
          await AsyncStorage.setItem('auth',auth.email);
          dispatch(removeAuth({}));
        }}
      />
    </View>
  )
}

export default HomeScreen