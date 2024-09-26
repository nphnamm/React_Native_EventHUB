import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {
    ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { ArrowRight, Sms } from 'iconsax-react-native';
import { appColors } from '../../constants/appColors';
import LoadingModal from '../../modals/LoadingModal';
import { Validate } from '../../utils/validate';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isDisable, setIsDisable] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckEmail = () =>{
    const isValidEmail = Validate.email(email);
    setIsDisable(!isValidEmail);
  }
  const handleForgotPassword = async () => {


  }
  return (
    <ContainerComponent back isImageBackground isScroll>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <SpaceComponent height={12} />
        <TextComponent text="Please enter your email adress to request a password reset" />
        <SpaceComponent height={26} />
        <InputComponent 
        value={email} 
        onChange={val => setEmail(val)} 
        affix={<Sms size={20} color={appColors.gray}/>}
        placeholder='abc@gmail.com'
        onEnd={handleCheckEmail}
        />

      
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
            onPress={handleForgotPassword}
            disable={isDisable}
            text="Send"
            type='primary'
            icon={<ArrowRight size={20} color={appColors.white}/>}
        />
        </SectionComponent>
        <LoadingModal visible={isLoading}/>
    </ContainerComponent>
  );
};

export default ForgotPassword;
