import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import TodoList from '../List/TodoList';

export default function SchedulePage({navigation, route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  useEffect(()=>{
        navigation.setOptions({
            title:'스케줄'
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
         
        <View style={styles.forCalendar}>
            <TouchableOpacity style={styles.gotoCalendar} onPress={() => {navigation.navigate('CalendarPage')}}><Text>달력 보기</Text></TouchableOpacity>
        </View>
        
        <View style={styles.listContainer}>
            <TodoList />
        </View>
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
    
    forCalendar:{
        flexDirection:"row",
        justifyContent:"flex-end"
    },

    listContainer:{
        borderWidth:1,
        marginTop:10,
        height:300,
        marginLeft:20,
        marginRight:20,
        borderRadius:10,
        borderColor:"orange"
    },

    

    gotoCalendar:{
        borderWidth:1,
        width:70,
        height:30,
        borderRadius:7,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginRight:20,
      }


})