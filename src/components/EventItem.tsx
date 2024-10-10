import {View, Text, Dimensions, ImageBackground} from 'react-native';
import React from 'react';
import { RowComponent, SpaceComponent, TextComponent} from '.';
import CardComponent from './CardComponent';
import { useNavigation } from '@react-navigation/native';
import { appInfo } from '../constants/appInfos';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AvatarGroup from './AvatarGroup';
import { Location } from 'iconsax-react-native';
import { EventModel } from '../models/EventModel';

interface Props {
  item: EventModel;
  type: 'list' | 'card';
  onPress?: () => void;
}

const EventItem = (props: Props) => {
  const {item, type} = props;
  const navigation: any = useNavigation();

  return (
    <CardComponent
      isShadow
      styles={{width: appInfo.sizes.WIDTH * 0.7}}
      onPress={()=> navigation.navigate('EventDetail',{item})}
    >
      <ImageBackground
        style={{flex:1, marginBottom:12, height:131, padding:10}}
        source={require('../assets/images/demo-event-image.png')}
        imageStyle={{
          borderRadius: 12,
          resizeMode: 'cover',
        }}
      >
        <RowComponent justify='space-between'>
          <CardComponent styles={[globalStyles.noSpaceCard]}>
              <TextComponent
                color={appColors.danger2}
                font={fontFamilies.bold}
                text='10'
                size={18}
              />
              <TextComponent
                  color={appColors.danger2}
                  font={fontFamilies.semiBold}
                  size={10}
                  text="JUNE"
              />
          </CardComponent>
          <CardComponent styles={[globalStyles.noSpaceCard]} color="#ffffffB3">
            <MaterialIcons
              name="bookmark"
              color={appColors.danger2}
              size={22}
            />
          </CardComponent>

        </RowComponent>

      </ImageBackground>
      <TextComponent numberOfLine={1} text={item?.title} title size={18} />
      <AvatarGroup/>
      <RowComponent>
        <Location size={18} color={appColors.text3} variant="Bold"/>
        <SpaceComponent width={8}/>
        <TextComponent
        flex={1}
        numberOfLine={1}
        text={item.location.address}
        size={32}
        color={appColors.text2}
        />
      </RowComponent>


    </CardComponent>
  )
};

export default EventItem;