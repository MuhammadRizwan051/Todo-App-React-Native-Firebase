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

  useEffect(() => {
    getData()
  }, [])

  let refresh = () => {
    setData()
  }

  return (
    <>
      <ImageBackground source={{ uri: 'https://wallpaper.dog/large/9568.jpg' }}>
        {data && data.length > 0 ? <Text style={styles.countOrNoCount}>{`Total: ${data.length}`}</Text> : <Text style={styles.countOrNoCount}>No Todos to Display</Text>}
        <View style={{ height: '100%', width: '100%' }}>
          {isLoading ?
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '50%' }}>
              <ActivityIndicator size='large' color="white" />
            </View>
            : (
              <>
                {data ?
                  <View>
                    <TouchableOpacity onPress={refresh} style={{ backgroundColor: 'crimson', borderColor: 'white', paddingVertical: 5, borderWidth: 2, borderRadius: 15, }}>
                      <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'white' }}>Refresh</Text>
                    </TouchableOpacity>
                  </View>
                  :
                  ""
                }
                <ScrollView>
                  <View style={{ alignItems: 'center', marginBottom: 60, paddingBottom: 25, paddingTop: 25 }}>
                    {data && data.map((e, i) => (
                      <>
                        <View key={i} style={[styles.todoListView]}>
                          <Text style={styles.todoText}>{e.text}</Text>
                        </View>
                      </>)
                    )}
                  </View>
                </ScrollView>
              </>
            )
            // </View>
          }
          {/* <TouchableOpacity onPress={getData} style={{ backgroundColor: 'crimson', marginTop: 15, borderColor: 'white', paddingVertical: 5, borderWidth: 2, borderRadius: 15, width: '50%' }}>
            <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'white' }}>Show Todo Data</Text>
          </TouchableOpacity> */}
        </View>
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
    fontSize: 16
  },
  countOrNoCount: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 15,
    fontSize: 25,
    textDecoration: 'underline'
  }
})