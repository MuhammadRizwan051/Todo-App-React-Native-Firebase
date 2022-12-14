import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, ActivityIndicator, TouchableOpacity, Button, Image, TouchableHighlight, ImageBackground, ScrollView } from "react-native";
import addImage from '../assets/addIcon.png'
import editImage from '../assets/editIcon.png'
import deleteImage from '../assets/deleteIcon.png'
import backgroundImage from '../assets/backgroundImage.jpg'
import database from '@react-native-firebase/database'


function Todo({ navigation, route }) {
    let uid = route.params
    let [txt, setTxt] = useState('')
    let [list, setList] = useState([])
    let [indexNum, setIndexNum] = useState()
    let [saveLoading, setSaveLoading] = useState(false)

    let add = () => {
        if (!txt) {
            alert('Plz, write something')
            return
        }
        if (indexNum > -1) {
            list[indexNum] = {
                text: txt,
                time: JSON.stringify(new Date())
            }
            setList([...list])
            setIndexNum(null)
            setTxt('')
        }
        else {
            setList([...list,
            {
                text: txt,
                time: JSON.stringify(new Date())
            }
            ])
            setTxt('')
        }
    }

    let deleteAll = () => {
        setList([])
        setTxt('')
    }



    let edit = (e, i) => {
        // console.log(list[i])
        setIndexNum(i)
        let obj = list[i]
        setTxt(obj.text)
    }

    let del = (e, i) => {
        console.log(i)
        list.splice(i, 1)
        setList([...list])
    }

    let saveData = () => {
        setSaveLoading(true)
        console.log(route.params)
        database()
            .ref(`appUsers/${route.params}/todoData`)
            .set(list)
            .then((res) => {
                setSaveLoading(false)
                console.log(res)
                setList([])
            })
            .catch((err) => {
                setSaveLoading(false)
                console.log(err)
                setList([])
            })
    }


    // let check = () => {
    //   if (txt.length >= 1) {
    //     setIsDisabled(false)
    //     return
    //   }
    // }
    // useEffect(() => {
    //   check()
    // }, [add])

    return (
        <>
            <ImageBackground source={{ uri: 'https://wallpaper.dog/large/9568.jpg' }} >
                <View style={styles.container}>
                    <Text style={styles.heading}>Todo App</Text>
                    <View style={{ flexDirection: 'row', marginVertical: 20, }}>
                        <TextInput value={txt} style={styles.inputField} placeholderTextColor={'white'} placeholder="Enter Text" onChangeText={(e) => setTxt(e)}></TextInput>
                        {/* <TouchableOpacity style={{ backgroundColor: 'crimson' }} ><Text style={{ color: 'white', textAlign: 'center' }}>Update</Text></TouchableOpacity> */}
                        <TouchableOpacity onPress={add} style={[styles.addBtn]} >
                            <Image source={addImage} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                        {/* <TouchableOpacity style={styles.addBtn} onPress={add}><Text style={{ color: 'white', textAlign: 'center' }}>Add</Text></TouchableOpacity> */}
                    </View>

                    {list && list.length > 0 ?
                        <TouchableOpacity style={[styles.deleteAllBtn, { backgroundColor: 'crimson' }]} onPress={deleteAll}><Text style={{ color: 'white', textAlign: 'center' }}>Delete All</Text></TouchableOpacity>
                        : ""
                    }
                    {list && list.length > 0 ? <Text style={styles.countOrNoCount}>{`Total: ${list.length}`}</Text> : <Text style={styles.countOrNoCount}>No Todos to Display</Text>}

                    {list && list.length < 1 ? <View style={{ marginTop: '50%', width: '100%', height: '100%', alignItems: 'center' }}><TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ backgroundColor: 'crimson', marginTop: 15, borderColor: 'white', paddingVertical: 5, borderWidth: 2, borderRadius: 15, width: '70%' }}>
                        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 22, color: 'white' }}>Show Todo Data</Text>
                    </TouchableOpacity></View> : ''}

                    <ScrollView style={{ marginBottom: 60 }}>
                        {list && list.map((e, i) => (
                            <>
                                <View key={i} style={[styles.todoListView]}>
                                    <Text style={styles.todoText}>{e.text}</Text>

                                    <TouchableOpacity onPress={() => edit(e, i)} style={{ width: '10%' }} >
                                        <Image source={editImage} style={styles.editAndDelete} />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => del(e, i)} style={{ width: '10%' }} >
                                        <Image source={deleteImage} style={styles.editAndDelete} />
                                    </TouchableOpacity>
                                </View>
                            </>)
                        )}
                    </ScrollView>
                    {list.length > 0 ?
                        <TouchableOpacity onPress={saveData} style={{ backgroundColor: '#06283D', position: 'absolute', bottom: 0, left: 0, right: 0, paddingVertical: 6 }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}>{saveLoading ? <ActivityIndicator size='large' color="white" /> : 'Save Data'}</Text>
                        </TouchableOpacity>
                        :
                        ""
                    }
                </View>

            </ImageBackground>
        </>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 2,
        paddingVertical: 1,
        height: '100%',
        width: '100%'
    },
    heading: {
        paddingVertical: 8,
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 3, height: 5 },
        textShadowRadius: 10
    },
    inputField: {
        width: '85%',
        borderBottomWidth: 1,
        padding: 0,
        color: 'white',
        borderColor: 'white',
        fontSize: 16,
        paddingHorizontal: 15
    },
    addBtn: {
        width: '10%',
        paddingVertical: 8,
        marginHorizontal: 12,
        backgroundColor: 'white',
        borderRadius: 8,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    deleteAllBtn: {
        marginVertical: 10,
        paddingVertical: 8,
        width: '100%',
    },
    todoListView: {
        flexDirection: 'row',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 20,
        backgroundColor: 'white',
        marginBottom: 15,
        padding: 5,
        marginHorizontal: 10,
    },
    todoText: {
        width: '80%',
        color: 'black'
    },
    editAndDelete: {
        width: 25,
        height: 25
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