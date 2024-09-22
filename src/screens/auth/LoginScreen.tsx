import { View, Text, Button, Image } from 'react-native'
import {Lock, Sms} from 'iconsax-react-native';

import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, TextComponent } from '../../components'
import { appColors } from '../../constants/appColors'
import InputComponent from '../../components/InputComponent'

const LoginScreen = () => {
  const [isDisable, setIsDisable] = useState(true);
  const [email, setEmail] = useState('');

  const handleLogin = async () => {

  };
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
       <Image
          source={require('../../assets/images/text-logo.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30,
          }}
        />
           <InputComponent
          value={email}
          placeholder="Email"
          onChange={val => setEmail(val)}
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
          <ButtonComponent
          disable={isDisable}
          onPress={handleLogin}
          text="SIGN IN"
          type="primary"
        />
          <TextComponent text="Don’t have an account? " />
          <ButtonComponent
            type="link"
            text="Sign up"
          />
    </View>
  )
}

export default LoginScreen