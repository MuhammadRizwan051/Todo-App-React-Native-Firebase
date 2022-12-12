import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import SMButton from '../component/SMButton';
import SMTextField from '../component/SMTextInput';
import auth from '@react-native-firebase/auth';
import styles from '../styling';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


function Login({ navigation }) {
  const [model, setModel] = useState({});
  const [isLoading, setIsLoading] = useState(false)

  let loginuser = () => {
    setIsLoading(true)
    auth().signInWithEmailAndPassword(model.email, model.password)
      .then(res => {
        setIsLoading(false)
        // console.log(res)
        navigation.navigate('Todo', res.user.uid)
      })
      .catch(err => {
        setIsLoading(false)
        console.log(err)
      })
  }

  return (
    <>
      <View style={[styles.h100, { backgroundColor: '#B2B2B2', alignItems: 'center', paddingTop: '30%' }]}>
        <Text style={[styles.fs2, { color: 'black', fontWeight: 'bold', fontSize: 26 }]}>LOGIN</Text>
        <Icon name='person' size={80} color='black' />
        <View style={[styles.w100, { paddingTop: 25, paddingHorizontal: 20 }]}>
          <SMTextField label="Email" labelColor='grey' placeholderTextColor='black' onChangeText={e => setModel({ ...model, email: e })} />
        </View>
        <View style={[styles.w100, { paddingTop: 25, paddingHorizontal: 20 }]}>
          <SMTextField secureTextEntry={true} label="Password" labelColor='grey' placeholderTextColor='black' onChangeText={e => setModel({ ...model, password: e })} />
        </View>

        <View style={[styles.p2, styles.w100, { paddingTop: 50 }]}>
          <TouchableOpacity style={{ backgroundColor: '#2B3A55', paddingVertical: 10, borderRadius: 15 }} onPress={loginuser}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>{isLoading ? <ActivityIndicator size='large' color="white" /> : 'LOGIN'}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.w100, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={{ fontSize: 16 }}>
            Need an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUp');
            }}
          >
            <Text style={[styles.textCenter, styles.textPrimary, { fontWeight: 'bold' }]}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default Login;