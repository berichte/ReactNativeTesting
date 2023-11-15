import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => unknown;
};
export function Button({title, onPress}: ButtonProps) {
  return (
    <TouchableOpacity testID="my-button" onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
