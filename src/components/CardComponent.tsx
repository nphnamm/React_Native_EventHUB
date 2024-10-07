import {View, Text, TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/appColors';

interface Props {
  onPress?: ()=> void;
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  isShadow?: boolean;
  color?: string;
}

const CardComponent = (props: Props) => {
  const {onPress, isShadow,children, color, styles} = props;

  const localStyles: StyleProp<ViewStyle>[]=[
    globalStyles.card,
    isShadow ? globalStyles.shadow : undefined,
    {backgroundColor: color ?? appColors.white},
    styles,

  ]
  return (
    <TouchableOpacity
    style={localStyles} onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
};

export default CardComponent;