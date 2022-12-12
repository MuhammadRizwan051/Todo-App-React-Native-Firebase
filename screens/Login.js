import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SMButton from '../component/SMButton';
import SMTextField from '../component/SMTextInput';
import auth from '@react-native-firebase/auth';
import styles from '../styling';


function Login({ navigation }) {
  const [model, setModel] = useState({});

  let loginuser = () => {
    auth().signInWithEmailAndPassword(model.email, model.password)
      .then(res => {
        // console.log(res)
        navigation.navigate('Todo', res.user.uid)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <View style={[styles.bgLight, styles.h100, styles.flexCenter]}>
        <Text style={[styles.textPrimary, styles.fs2]}>Login</Text>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField label="Email" onChangeText={e => setModel({ ...model, email: e })} />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField label="Password" onChangeText={e => setModel({ ...model, password: e })} />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMButton onPress={loginuser} label="Login" />
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