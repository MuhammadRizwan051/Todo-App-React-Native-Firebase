import React from 'react';
import {TextInput} from 'react-native';
import styles from '../styling';

function SMTextField(props) {
  const {label, labelColor, onChangeText} = props;
  return (
    <>
      <TextInput
        style={[styles.input, styles.border1]}
        placeholderTextColor={labelColor}
        placeholder={label}
        onChangeText={onChangeText}
      />
    </>
  );
}
export default SMTextField;