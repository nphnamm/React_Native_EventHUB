import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../constants/appColors'
import { fontFamilies } from '../../../constants/fontFamilies'
import {Facebook, Google} from '../../../assets/svgs';
import LoadingModal from '../../../modals/LoadingModal'

const SocialLogin = () => {
    const [isLoading,setIsLoading] = useState(false);
  const handleLoginWithGoogle = async () =>{

  }  
  const handleLoginWithFacebook  = async () =>{

  }  
  return (
    <SectionComponent>
        <TextComponent
            styles={{textAlign:'center'}}
            text="OR"
            color={appColors.gray4}
            size={16}
            font={fontFamilies.medium}
        />
        <SpaceComponent height={16}/>
        
        <ButtonComponent
            type='primary'
            onPress={handleLoginWithGoogle}
            color={appColors.white}
            textColor={appColors.text}
            text='Login with Google'
            textFont={fontFamilies.regular}
            iconFlex="left"
            icon={<Google/>}
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
  )
}

export default SocialLogin