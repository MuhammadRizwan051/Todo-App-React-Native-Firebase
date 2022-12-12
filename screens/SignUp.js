import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styling';
import SMTextField from '../component/SMTextInput';
import SMButton from '../component/SMButton';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { Alert } from 'react-native';


function SignUp({ navigation }) {
  const [model, setModel] = useState({});
  const [err, setErr] = useState()

  let signupuser = () => {
    if (!model) {
      Alert.alert(
        "Alert Title",
        "My Alert Msg",
        [
          // {
          //   text: "Ask me later",
          //   onPress: () => console.log("Ask me later pressed")
          // },
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        {
          cancelable: true,
          // onDismiss: () =>
          //   Alert.alert(
          //     "This alert was dismissed by tapping outside of the alert dialog."
          //   ),
        }
      );
    }
    auth().createUserWithEmailAndPassword(model.email, model.password)
      .then(res => {
        console.log(res)
        database()
          .ref(`appUsers/${res.user.uid}`)
          .set(model)
          .then(() => {
            navigation.navigate('Login')
          })
          .catch(dberr => {
            console.log(dberr)
            setErr(dberr)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }


  return (
    <>
      <View style={[styles.h100, { backgroundColor: '#EF9A53', alignItems: 'center', paddingTop: '30%' }]}>
        <Text style={[styles.fs2, { color: 'black', fontWeight: 'bold', fontSize: 26 }]}>SIGNUP</Text>
        <Icon name='person' size={80} color='black' />
        <View style={[styles.w100, { paddingTop: 25, paddingHorizontal: 20 }]}>
          <SMTextField label="Email" labelColor='grey' placeholderTextColor='black' onChangeText={e => setModel({ ...model, email: e })} />
        </View>
        <View style={[styles.w100, { paddingTop: 25, paddingHorizontal: 20 }]}>
          <SMTextField secureTextEntry={true} label="Password" labelColor='grey' placeholderTextColor='black' onChangeText={e => setModel({ ...model, password: e })} />
        </View>
        <View style={[styles.p2, styles.w100, { paddingTop: 50 }]}>
          <TouchableOpacity style={{ backgroundColor: '#2B3A55', paddingVertical: 10, borderRadius: 15 }} onPress={signupuser}>
            <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold', fontSize: 20 }}>SIGNUP</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.w100, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]}>
          <Text style={{ fontSize: 16 }}>Already a user? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={[styles.textCenter, styles.textPrimary, { fontWeight: 'bold' }]}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
export default SignUp;