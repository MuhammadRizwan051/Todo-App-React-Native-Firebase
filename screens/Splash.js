import React, { useEffect } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../styling';

function Splash({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 3000)
  })

  return (
    <>
      <View style={[styles.bgLight, styles.h100, styles.flexCenter]}>
        <View>
          <Image
            source={{ uri: 'https://raw.githubusercontent.com/AneeqUllahKhan/React-Native-With-Firebase/main/assets/logo.png' }}
            resizeMode="contain"
            style={{ width: 250, height: 60 }}
          />
        </View>
        <View>
          <Text style={[styles.fs3, styles.textCenter, styles.p3]}>
            Firebase App with complete Authentication and realtime database.
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login')
          }}
          style={styles.btn}>
          <Text style={[styles.textWhite, styles.fs3]}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
export default Splash;