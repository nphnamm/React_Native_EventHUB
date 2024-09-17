import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Swiper from 'react-native-swiper';
import {appInfo} from '../../constants/appInfos';
import {globalStyles} from '../../styles/globalStyles';
import {appColors} from '../../constants/appColors';
import { fontFamilies } from '../../constants/fontFamilies';
import { TextComponent } from '../../components';

const OnbroadingScreen = ({navigation}: any) => {
  const [index, setIndex] = useState(0);

  return (
    <View style={[globalStyles.container]}>
      <Swiper
        style={{}}
        onIndexChanged={num => setIndex(num)}
        index={index}
        loop={false}
        activeDotColor={appColors.white}>
        <Image
          source={require('../../assets/images/onboarding-1.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-2.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
        <Image
          source={require('../../assets/images/onboarding-3.png')}
          style={{
            flex: 1,
            width: appInfo.sizes.WIDTH,
            height: appInfo.sizes.HEIGHT,
            resizeMode: 'contain',
          }}
        />
      </Swiper>
      <View
        style={[
          {
            paddingHorizontal: 16,
            paddingVertical: 20,
            position: 'absolute',
            bottom: 20,
            right: 20,
            left: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
        ]}>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
        <TextComponent
            text="Skip"
            color={appColors.gray2}
            font={fontFamilies.medium}
          />

        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')
          }>
          <TextComponent
            text="Next"
            color={appColors.white}
            font={fontFamilies.medium}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnbroadingScreen;
const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: '500',
  },
});