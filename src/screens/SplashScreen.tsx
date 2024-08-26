import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const SplashScreen = () => {
  return (
    <ImageBackground
     source={require('../assets/images/splash-img.png')}
     style={{flex:1}}
    ></ImageBackground>
  )
}

export default SplashScreen