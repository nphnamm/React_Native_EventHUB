import {Lock, Sms,User} from 'iconsax-react-native';
import React, {useEffect, useState} from 'react';
import {Alert, Image, Switch} from 'react-native';
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import {appColors} from '../../constants/appColors';
import {Validate} from '../../utils/validate';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SocialLogin from './components/SocialLogin';
import LoadingModal from '../../modals/LoadingModal';
import authenticationAPI from '../../apis/authApi';

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisable, setIsDisable] = useState(true);
  const [errorMessage,setErrorMessage] = useState<any>();
  const [values, setValues] = useState(initValue);


  useEffect(() => {
    if(!errorMessage || (errorMessage && (errorMessage.email || errorMessage.password || errorMessage.confirmPassword)) || !values.email || !values.password || !values.confirmPassword){
      setIsDisable(true);

    }else{
      setIsDisable(false);
    }
  }, [errorMessage, values]);
  const handleChangeValue = (key: string, value: string) =>{
    const data: any ={...values};
    data[`${key}`] = value;
    setValues(data);
  }
  const formValidator = (key: string) =>{
    const data ={...errorMessage};
    let message = ``;
    switch(key){
      case 'email':
        if(!values.email){
          message = `Email is required!!!`;

        }else if(!Validate.email(values.email)){
          message ="Email is invalid!";
        }else{
          message='';

        }
      case 'password':
        message = !values.password ? `Password is required!!!`: '';
      case 'confirmPassword':
        if(!values.confirmPassword){
          message = `Please type confirm password!!!`;

        }else if(values.confirmPassword !== values.password){
          message = `Password and confirm password must be same!!!`
        }else{
          message = '';
        }
        break;
    }
    data[`${key}`] = message;
    setErrorMessage(data);


  }
  const handleRegister = async () =>{
    const api =`/verification`;
    setIsLoading(true);
    try{
      const res = await authenticationAPI.HandleAuthentication(api, {email: values.email},'post',)
      setIsLoading(false);
      navigation.navigate('Verification',{
        code:res.data.code,
        ...values
      })
    
    }catch(error){
      console.log(error);
      setIsLoading(false);
    }

  }


  return (
   <>
      <ContainerComponent isImageBackground isScroll back>
        <SectionComponent>
          <TextComponent size={24} title text="Sign up" />
          <SpaceComponent height={21} />
          <InputComponent
            value={values.username}
            placeholder="Full name"
            onChange={val => handleChangeValue('username', val)}
            allowClear
            affix={<User size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.email}
            placeholder="abc@email.com"
            onChange={val => handleChangeValue('email', val)}
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
            onEnd={() => formValidator('email')}
          />
          <InputComponent
            value={values.password}
            placeholder="Password"
            onChange={val => handleChangeValue('password', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('password')}
          />
          <InputComponent
            value={values.confirmPassword}
            placeholder="Confirm password"
            onChange={val => handleChangeValue('confirmPassword', val)}
            isPassword
            allowClear
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('confirmPassword')}
          />
        </SectionComponent>

        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    text={errorMessage[`${error}`]}
                    key={`error${index}`}
                    color={appColors.danger}
                  />
                ),
            )}
          </SectionComponent>
        )}
        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent
            onPress={handleRegister}
            text="SIGN UP"
            disable={isDisable}
            type="primary"
          />
        </SectionComponent>
        <SocialLogin />
        <SectionComponent>
          <RowComponent justify="center">
            <TextComponent text="Don’t have an account? " />
            <ButtonComponent
              type="link"
              text="Sign in"
              onPress={() => navigation.navigate('LoginScreen')}
            />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
      </>
  );
};

export default SignUpScreen;