import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import database from '@react-native-firebase/database'


function Home({ navigation, route }) {
  let uid = route.params
  console.log(uid)

  let [data, setData] = useState()
  let getData = () => {
    database()
      .ref(`appUsers/${uid}/todoData`)
      .once('value')
      .then((res) => {
        // console.log(res.val())
        setData(res.val())
        console.log(data)
      })
      .catch(dberr => {
        console.log(dberr)
      })
  }

  return (
    <>
      <View>
        <Text>Show Todos Data</Text>
        <TouchableOpacity onPress={getData} style={{ backgroundColor: 'red' }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Show Data</Text>
        </TouchableOpacity>
        <View>
          {data && data.map((e, i) => (
            <View key={i} style={{flexDirection:'row', justifyContent:'space-between', borderWidth: 2 }}>
              <Text>{e.text}</Text>
              <Text>{e.time}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  )
}

export default Home