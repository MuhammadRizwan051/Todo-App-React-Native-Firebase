import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import database from '@react-native-firebase/database'


function Home({ navigation, route }) {
  let uid = route.params
  console.log(uid)

  let [data, setData] = useState()
  let [isLoading, setIsLoading] = useState(false)

  let getData = () => {
    setIsLoading(true)
    database()
      .ref(`appUsers/undefined/todoData`)
      .once('value')
      .then((res) => {
        setIsLoading(false)
        setData(res.val())
        console.log(data)
      })
      .catch(dberr => {
        setIsLoading(false)
        console.log(dberr)
      })
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  let refresh = () => {
    setData()
  }

  return (
    <>
      <ImageBackground source={{ uri: 'https://wallpaper.dog/large/9568.jpg' }}>
        <View style={{ alignItems: 'center', height: '100%' }}>
          {isLoading ?
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}><ActivityIndicator size='large' color="white" /></View>
            :
            // <View>
            //   {data && data.map((e, i) => (
            //     <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2 }}>
            //       <Text>{e.text}</Text>
            //       <Text>{e.time}</Text>
            //     </View>
            //   ))}
            // </View>
            <ScrollView style={{ marginBottom: 60, paddingVertical: 25 }}>
              {data && data.map((e, i) => (
                <>
                  <View key={i} style={[styles.todoListView]}>
                    <Text style={styles.todoText}>{e.text}</Text>

                    {/* <TouchableOpacity onPress={() => edit(e, i)} style={{ width: '10%' }} >
                          <Image source={editImage} style={styles.editAndDelete} />
                      </TouchableOpacity>

                      <TouchableOpacity onPress={() => del(e, i)} style={{ width: '10%' }} >
                          <Image source={deleteImage} style={styles.editAndDelete} />
                      </TouchableOpacity> */}
                  </View>
                </>)
              )}
            </ScrollView>
          }
          <TouchableOpacity onPress={getData} style={{ backgroundColor: 'crimson', marginTop: 15, borderColor: 'white', paddingVertical: 5, borderWidth: 2, borderRadius: 15, width: '50%' }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'white' }}>Show Todo Data</Text>
          </TouchableOpacity>
          {data ?
            <TouchableOpacity onPress={refresh} style={{ backgroundColor: 'crimson', marginTop: 15, borderColor: 'white', paddingVertical: 5, borderWidth: 2, borderRadius: 15, width: '50%' }}>
              <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'white' }}>Refresh</Text>
            </TouchableOpacity>
            : ""
          }

        </View >
      </ImageBackground>
    </>
  )
}

export default Home


const styles = StyleSheet.create({
  todoListView: {
    flexDirection: 'row',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 20,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginHorizontal: 0,
  },
  todoText: {
    width: '90%',
    color: 'black',
    fontSize:16
  },
})