import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import auth from '@react-native-firebase/auth';
import styles from '../styling';
import SMTextField from '../component/SMTextInput';
import SMButton from '../component/SMButton';
// import database from '@react-native-firebase/database';

function SignUp({navigation}) {
  const [model, setModel] = useState({});

  return (
    <>
      <View style={[styles.h100, styles.flexCenter, styles.bgLight]}>
        <Text>SignUp</Text>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, userName: e})}
            label="User Name"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, email: e})}
            label="Email"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMTextField
            onChangeText={e => setModel({...model, password: e})}
            label="Password"
          />
        </View>
        <View style={[styles.p2, styles.w100]}>
          <SMButton label="Sign Up" />
        </View>
      </View>
    </>
  );
}
export default SignUp;