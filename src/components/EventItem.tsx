import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import { TextComponent} from '.';
import CardComponent from './CardComponent';

interface Props {
  item: any;
  type: 'list' | 'card';
  onPress?: () => void;
}

const EventItem = (props: Props) => {
  const {item, type, onPress} = props;

  return type === 'card' ? (
    <CardComponent styles={{width: Dimensions.get('window').width * 0.6}}>
      <TextComponent
        numberOfLine={1}
        title
        size={18}
        text="International Band Music Concert"
      />
    </CardComponent>
  ) : (
    <></>
  );
};

export default EventItem;