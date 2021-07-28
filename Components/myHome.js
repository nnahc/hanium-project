import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function myHome({navigation, route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  useEffect(()=>{
        navigation.setOptions({
            title:'내 정보'
        })
}, [])


  return (
    <ScrollView style={styles.container}>
        <Image source={{uri:"https://www.hanium.or.kr/2020/images/icon_logo.jpg"}} style={styles.image}></Image>
        <Text style={styles.titleText}>독거노인 일일 안부 서비스</Text>
        <View style={styles.bar}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}><Text style={styles.text}>홈</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Management')}}><Text style={styles.text}>관리</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('SchedulePage')}}><Text style={styles.text}>스케줄</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('myHome')}}><Text style={styles.text}>내 정보</Text></TouchableOpacity>
        </View>
            <Text style={styles.testText}>여기는 내 정보!</Text> 
    </ScrollView>
  )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white"
    },

    image:{
        width:100,
        height:50,
        resizeMode:"contain",
        alignSelf:"center"
    },

    titleText:{
        fontWeight:"bold",
        fontSize:20,
        alignSelf:"center"
    },

    bar:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:15,
        height:50,
        alignItems:"center",
        backgroundColor:"orange"
    },

    text:{
        color:"white",
        fontSize:20
    },

    testText:{
        alignSelf:"center"
    },
})