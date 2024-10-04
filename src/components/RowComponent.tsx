import {
    View,
    
    StyleProp,
    ViewStyle,
    
    TouchableOpacity,
  } from 'react-native';
  import React, {ReactNode} from 'react';
  import {globalStyles} from '../styles/globalStyles';
  
  interface Props {
    justify?:
      | 'center'
      | 'flex-start'
      | 'flex-end'
      | 'space-between'
      | 'space-around'
      | 'space-evenly'
      | undefined;
    styles?: StyleProp<ViewStyle>;
    children: ReactNode;
    onPress?: () => void;
    text?: string;
  }
  
  const RowComponent = (props: Props) => {
    const {styles, justify, children, onPress , text} = props;
    
    const localStyle = [
      globalStyles.row,
      {
        // justifyContent: justify ?? 'center',
      },
      styles,
    ];
    console.log('justify',localStyle[1] ,text)
  
    return onPress ? (
      <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={localStyle}>
        {children}
      </TouchableOpacity>
    ) : (
      <View style={localStyle}>{children}</View>
    );
  };
  
  export default RowComponent;