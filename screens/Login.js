import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SMButton from '../component/SMButton';
import SMTextField from '../component/SMTextInput';
import auth from '@react-native-firebase/auth';
import styles from '../styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


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
        <Text style={[styles.textPrimary, styles.fs2]}>LOGIN</Text>
        <Icon name='person' size={80} color='black' />
        <View style={[styles.p2, styles.w100]}>
          <SMTextField label="Email" labelColor='grey' placeholderTextColor='black' onChangeText={e => setModel({ ...model, email: e })} />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField label="Password" labelColor='grey' placeholderTextColor='black' onChangeText={e => setModel({ ...model, password: e })} />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMButton onPress={loginuser} label="Login" />
        </View>
        <View style={[styles.w100, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={{fontSize:16}}>
            Need an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={[styles.textCenter, styles.textPrimary, {fontWeight:'bold'}]}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Login;