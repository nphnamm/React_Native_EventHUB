import React from 'react'
import { Platform, StyleProp, Text, TextStyle } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { appColors } from '../constants/appColors';
import { fontFamilies } from '../constants/fontFamilies';

interface Props {
    text: string;
    color?: string;
    size?: number;
    flex?: number;
    font?: string;
    styles?: StyleProp<TextStyle>;
    title?: boolean;
    numberOfLine?: number
}

const TextComponent =
 (props: Props) => {
    const { size, flex, font, color, styles, title, numberOfLine} = props;
    var {text} = props
    if(!text){
      var {text = "International Event"} = props
    }

    const fontSizeDefault = Platform.OS === 'ios' ? 16 : 14;

  return (
    <Text
    numberOfLines={numberOfLine}
    style={[
      globalStyles.text,
      {
        color: color ?? appColors.text,
        flex: flex ?? 0,
        fontSize: size ? size : title ? 24 : fontSizeDefault,
        fontFamily: font
          ? font
          : title
          ? fontFamilies.medium
          : fontFamilies.regular,
      },
      styles,
    ]}>
    {text}
  </Text>
  )
}
export default TextComponent;