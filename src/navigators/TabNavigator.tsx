import { View, Text, Platform } from 'react-native'
import React, { ReactNode } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';
import EventNavigator from './EventNavigator';
import AddNewScreen from '../screens/AddNewScreen';
import MapNavigator from './MapNavigator';
import ProfileNavigator from './ProfileNavigator';
import { appColors } from '../constants/appColors';
import { AddSquare, Calendar, Location, User } from 'iconsax-react-native';
import CircleComponent from '../components/CircleComponent';
import { globalStyles } from '../styles/globalStyles';
import { TextComponent } from '../components';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ExploreNavigator from './ExploreNavigator';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();


  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 68,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: appColors.white,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon: ReactNode;
          color = focused ? appColors.primary : appColors.gray5;
          size = 24;
          switch (route.name) {
            case 'Explore':
              icon = <MaterialIcons name="explore" size={size} color={color} />;
              break;

            case 'Events':
              icon = <Calendar size={size} variant="Bold" color={color} />;
              break;
            case 'Map':
              icon = <Location size={size} variant="Bold" color={color} />;
              break;
            case 'Profile':
              icon = <User size={size} variant="Bold" color={color} />;
              break;

            case 'Add':
              icon = (
                <CircleComponent
                  size={52}
                  styles={[
                    globalStyles.shadow,
                    { marginTop: Platform.OS === 'ios' ? -50 : -60 },
                  ]}>
                  <AddSquare size={24} color={appColors.white} variant="Bold" />
                </CircleComponent>
              );
              break;
          }
          return icon;
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
        tabBarLabelPosition: 'below-icon',
        tabBarLabel({ focused }) {
          return route.name === 'Add' ? null : (
            <TextComponent
              text={route.name}
              flex={0}
              size={12}
              color={focused ? appColors.primary : appColors.gray5}
              styles={{
                marginBottom: Platform.OS === 'android' ? 12 : 0,
              }}
            />
          );
        },
      })}


    >
      <Tab.Screen name="Explore" component={ExploreNavigator} />
      <Tab.Screen name='Events' component={EventNavigator} />
      <Tab.Screen name='Add' component={AddNewScreen} />
      <Tab.Screen name='Map' component={MapNavigator} />
      <Tab.Screen name="Profile" component={ProfileNavigator} />


    </Tab.Navigator>
  )
}

export default TabNavigator