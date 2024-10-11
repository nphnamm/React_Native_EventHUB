import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { ContainerComponent, RowComponent, SectionComponent, TextComponent } from '../../components'
import LinearGradient from 'react-native-linear-gradient'
import { ArrowLeft } from 'iconsax-react-native'
import { appColors } from '../../constants/appColors';
import CardComponent from '../../components/CardComponent'
import { globalStyles } from '../../styles/globalStyles'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AvatarGroup from '../../components/AvatarGroup'
import { fontFamilies } from '../../constants/fontFamilies'
import { EventModel } from '../../models/EventModel'

const EventDetail = ({ navigation, route }: any) => {
  const { item }: { item: EventModel } = route.params;
  console.log('item', item)
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ImageBackground
        source={require('../../assets/images/demo-event-image.png')}
        style={{
          flex: 1,
          height: 244
        }}
        imageStyle={{
          resizeMode: 'cover'
        }}
      >
        <LinearGradient colors={['rbga(0,0,0,0.7)', 'rgba(0,0,0,0)']}>
          <RowComponent styles={
            {
              padding: 16,
              alignItems: 'flex-end',
              paddingTop: 42,
            }
          }>
            <RowComponent styles={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  width: 48,
                  height: 48,
                  justifyContent: 'center'
                }}
              >
                <ArrowLeft size={28} color={appColors.white} />

              </TouchableOpacity>
              <TextComponent
                flex={1}
                text='Event Details'
                title
                color={appColors.white}
              />
              <CardComponent
                styles={[globalStyles.noSpaceCard, { width: 36, height: 36 }]}
              >
                <MaterialIcons
                  name='bookmark'
                  color={appColors.white}
                  size={24}
                />
              </CardComponent>
            </RowComponent>
          </RowComponent>
        </LinearGradient>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1, paddingTop: 244 - 130
          }}
        >
          <SectionComponent>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
              }}
            >
              <RowComponent
                justify='space-between'
              >
                <AvatarGroup size={36} />
                <TouchableOpacity
                  style={[
                    globalStyles.button,
                    { backgroundColor: appColors.primary, paddingVertical: 8 }
                  ]}
                >
                  <TextComponent text='Invite' color={appColors.white} />
                </TouchableOpacity>
              </RowComponent>
            </View>
          </SectionComponent>
          <View style={{
            backgroundColor: appColors.white
          }}>
            <SectionComponent>

              <TextComponent
                title
                size={34}
                font={fontFamilies.medium}
                text={item.title}
              />
            </SectionComponent>


          </View>
        </ScrollView>


      </ImageBackground>
    </View>
  )
}

export default EventDetail