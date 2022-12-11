import React from 'react'
import { View, Text } from 'react-native'


function Home({navigation, route}) {
  let obj = route.params
  console.log(obj)
  return (
    <>
      <View>
        <Text>Home</Text>
        <Text>{obj.uid}</Text>
        <Text>{route.params.lastSignInTime}</Text>
        <Text>{obj.email}</Text>
      </View>
    </>
  )
}

export default Home