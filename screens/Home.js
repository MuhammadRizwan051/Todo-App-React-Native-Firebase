import React from 'react'
import { View, Text } from 'react-native'


function Home({navigation, route}) {
  let obj = route.params

  return (
    <>
      <View>
        <Text>Home</Text>
        <Text>{obj && route.params.uid}</Text>
        <Text>{obj && route.params.email}</Text>
      </View>
    </>
  )
}

export default Home