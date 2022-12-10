import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SMButton from '../component/SMButton';
import SMTextField from '../component/SMTextInput';
// import auth from '@react-native-firebase/auth';
import styles from '../styling';
function Login({ navigation }) {
  return (
    <>
      <View style={[styles.bgLight, styles.h100, styles.flexCenter]}>
        <Text style={[styles.textPrimary, styles.fs2]}>Login</Text>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField label="Email" />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField label="Password" />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMButton label="Login" />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <Text style={[styles.textCenter, styles.fs4, styles.flexCenter]}>
            are You new user?{' '}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('SignUp');
              }}
              style={styles.flexCenter}>
              <Text style={[styles.textCenter, styles.fs3, styles.textPrimary]}>
                Register
              </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </>
  );
}
export default Login;