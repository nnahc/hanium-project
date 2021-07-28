import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import Table from '../managementTable/Table';
import Table2 from '../managementTable/Table2';
import Table3 from '../managementTable/Table3';

export default function Management({navigation, route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  useEffect(()=>{
    
        navigation.setOptions({
            title:'관리'
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
        <View style={styles.searchSelect}>
            <TouchableOpacity style={styles.searchSelectText}><Text style={styles.searchSelectText1}>지역</Text></TouchableOpacity>
            <TouchableOpacity style={styles.searchSelectText}><Text style={styles.searchSelectText1}>성별</Text></TouchableOpacity>
            <TouchableOpacity style={styles.searchSelectText}><Text style={styles.searchSelectText1}>성함</Text></TouchableOpacity>
        </View>
        <View style={styles.search}>
            <TextInput style={styles.searchField} placeholder={'이름'} placeholderTextColor={"gray"}/>
            <TouchableOpacity style={styles.searchButton}><Text style={styles.searchButtonText}>검색</Text></TouchableOpacity>
        </View>
        <View style={styles.mainContainer}>
            <Image source={{url:"data:image/png;base64,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"}} 
             style={styles.humanImage}/>
            <Table />
        </View>
        <View>
            <Table2 />
            <Table3 />
            <TouchableOpacity><Table3 /></TouchableOpacity>
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

    searchSelect:{
        flexDirection:"row",
        justifyContent:"space-around",
        // borderWidth:1,
        marginTop:10,
    },

    searchSelectText:{
        width:100,
        height:40,
        backgroundColor:"orange",
        borderRadius:15,
        justifyContent:"center"
    },

    searchSelectText1:{
        textAlign:'center'
    },

    search:{
        flexDirection:"row",
        justifyContent:"space-around",
        width:380,
        marginTop:15,
        marginLeft:10
    },
    
    searchField:{
        color: 'black',
        height: 30,
        flex: 1,
        borderWidth:1,
        borderRadius:15,
        marginLeft:10,
        paddingLeft:10
    },

    searchButton:{
        width:50,
        height:30,
        backgroundColor:"gray",
        borderRadius:15,
        marginLeft:10,
        justifyContent:"center"
    },

    searchButtonText:{
        textAlign:"center"
    },

    mainContainer:{
        flexDirection:"row",
        justifyContent:"center",
        // borderWidth:1,
        marginTop:10,
        marginLeft:10,
        marginRight:10
    },
    
    humanImage:{
        width:100,
        height:140,
        resizeMode:"contain",
        // borderWidth:1,
        marginTop:15,
        marginLeft:10
    },

    visitLog:{
        width:"100%",
        height: 100,
        backgroundColor:"orange",
        marginTop:10,
        borderRadius:15
    }


})