import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styling';

function SMButton(props) {
  const { label, onPress } = props;
  return (
    <>
      <TouchableOpacity onPress={onPress} style={{ borderWidth: 2 }}>
        <Text style={[ styles.textCenter, styles.fs4, {color:'black'}]}>
          {label}
        </Text>
      </TouchableOpacity>
    </>
  );
}
export default SMButton;