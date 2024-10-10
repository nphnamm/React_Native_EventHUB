import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { ContainerComponent } from '../../components'

const EventDetail = () => {
  return (
    <ContainerComponent>
        <ImageBackground
            source={require("../../assets/images/event-image.png")}
            style={{
                flex:1,
                height:244
            }}
            imageStyle={{
                resizeMode:'cover'
            }}
        >


        </ImageBackground>
    </ContainerComponent>
  )
}

export default EventDetail