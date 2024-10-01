import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../../components';
import {appColors} from '../../../constants/appColors';
import {fontFamilies} from '../../../constants/fontFamilies';
import {Facebook, Google} from '../../../assets/svgs';
import LoadingModal from '../../../modals/LoadingModal';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import { LoginButton, Settings } from 'react-native-fbsdk-next';

GoogleSignin.configure({
  webClientId:
    '211112245726-q1tqau0vrfvi7mou39lpnf4pks10s6k2.apps.googleusercontent.com',
  iosClientId:
    '51183564123-ftijaqo23c9thm2kfe9ssgqq6p92ru72.apps.googleusercontent.com',
});
Settings.setAppID('8648095141908206');

const SocialLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleLoginWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const user = userInfo.user;

      console.log('user', user);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginWithFacebook = async () => {};
  return (
    <SectionComponent>
      <TextComponent
        styles={{textAlign: 'center'}}
        text="OR"
        color={appColors.gray4}
        size={16}
        font={fontFamilies.medium}
      />
      <SpaceComponent height={16} />

      <ButtonComponent
        type="primary"
        onPress={handleLoginWithGoogle}
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Google"
        textFont={fontFamilies.regular}
        iconFlex="left"
        icon={<Google />}
      />
      <LoginButton
      onLoginFinished={(error,result)=>{
        if (error) {
          console.log(error);
        }else if(result.isCancelled){
          console.log('Canceled');

        }else{
          console.log(result);
        }
      }}
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text="Login with Facebook"
        textFont={fontFamilies.regular}
        onPress={handleLoginWithFacebook}
        iconFlex="left"
        icon={<Facebook />}
      />
      <LoadingModal visible={isLoading} />
    </SectionComponent>
  );
};

export default SocialLogin;
