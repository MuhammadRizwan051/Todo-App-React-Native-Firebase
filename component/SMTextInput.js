import React from 'react';
import { TextInput } from 'react-native';
import styles from '../styling';

function SMTextField(props) {
  const { label, labelColor, onChangeText, secureTextEntry } = props;
  return (
    <>
      <TextInput secureTextEntry={secureTextEntry ?? false}
        style={[styles.input, {
          shadowColor: 'black',
          shadowOffset: { width: 3, height: 5 },
          // shadowOpacity: 0.32,
          shadowRadius: 15,
          // elevation: 15,
        }]}
        placeholderTextColor={labelColor}
        placeholder={label}
        onChangeText={onChangeText}
      />
    </>
  );
}
export default SMTextField;