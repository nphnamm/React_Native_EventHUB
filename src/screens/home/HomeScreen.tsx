import { View, Text, Button, StatusBar, Platform, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector, removeAuth } from '../../redux/reducers/authReducer'
import { ButtonComponent, RowComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyles } from '../../styles/globalStyles'
import { appColors } from '../../constants/appColors';
import { HambergerMenu, Notification, SearchNormal1, Sort } from 'iconsax-react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { fontFamilies } from '../../constants/fontFamilies'
import CircleComponent from '../../components/CircleComponent'
import CategoriesList from '../../components/CategoriesList'
import EventItem from '../../components/EventItem'
import TagBarComponent from '../../components/TagBarComponent'
import { AddressModel } from '../../models/AddressModel'

const HomeScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);

  const [currentLocation, setCurrentLocation] = useState<AddressModel>()

  return (
    <View style={[globalStyles.container]}>
      <StatusBar barStyle={'light-content'} />
      <View style={{
        backgroundColor: appColors.primary,
        height: Platform.OS === 'android' ? 166 : 182,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 52,
      }}>
        <View style={{ paddingHorizontal: 16 }}>
          <RowComponent
          text='home nek'
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <HambergerMenu size={24} color={appColors.white} />
            </TouchableOpacity>
            <View style={[{ flex: 1, alignItems: 'center' }]}>
              <RowComponent

              >
                <TextComponent
                  text='Current Location'
                  color={appColors.white2}
                  size={12}
                />
                <MaterialIcons
                  name='arrow-drop-down'
                  size={18}
                  color={appColors.white}
                />
              </RowComponent>
              <TextComponent
                text="New York, USA"
                flex={0}
                color={appColors.white}
                font={fontFamilies.medium}
                size={13}
              />


            </View>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <HambergerMenu size={24} color={appColors.white} />
            </TouchableOpacity>
          </RowComponent>
        </View>


      </View>
    </View>

  )
}

export default HomeScreen