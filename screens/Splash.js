import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styling';
// import logo from '../assets/logo.png';

function Splash({navigation}) {
  return (
    <>
      <View style={[styles.bgLight, styles.h100, styles.flexCenter]}>
        <View>
          <Image
            source={{uri: 'https://raw.githubusercontent.com/AneeqUllahKhan/React-Native-With-Firebase/main/assets/logo.png'}}
            resizeMode="contain"
            style={{width: 250, height: 60}}
          />
        </View>
        <View>
          <Text style={[styles.fs3, styles.textCenter, styles.p3]}>
            Firebase App with complete Authentication and realtime database.
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.btn}>
            <Text style={[styles.textWhite, styles.fs3]}>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Splash;