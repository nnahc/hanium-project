import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

export default function Home({navigation, route}) {
  console.disableYellowBox = true;
  //return 구문 밖에서는 슬래시 두개 방식으로 주석

  useEffect(()=>{
          navigation.setOptions({
              title:'홈'
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
        <ScrollView style={styles.cardContainer} horizontal indicatorStyle={"white"}>
            <TouchableOpacity style={styles.Card}>
                <Text style={styles.cardText1}>위급</Text>
                <TouchableOpacity style={styles.cardText101} onPress={()=>{navigation.navigate('Management')}}><Text>노진구</Text></TouchableOpacity>
                <TouchableOpacity style={styles.cardText101} onPress={()=>{navigation.navigate('Management')}}><Text>이훈이</Text></TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card}>
                <Text style={styles.cardText2}>주의</Text>
                <TouchableOpacity style={styles.cardText101} onPress={()=>{navigation.navigate('Management')}}><Text>홍길동</Text></TouchableOpacity>
            </TouchableOpacity>
        </ScrollView>
        <View style={styles.card2Container}>
            <TouchableOpacity style={styles.Card2}>
                <Text style={styles.Card2Text}>방문지</Text>
                <Text style={styles.Card2Text01}>노진구</Text>
                <Text style={styles.Card2Text01}>이훈이</Text>
                <Text style={styles.Card2Text01}>홍길동</Text>
                <Text style={styles.Card2Text01}>신짱구</Text>
                <Text style={styles.Card2Text01}>김철수</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Card3} onPress={()=>{navigation.navigate('SchedulePage')}}>
                <Text style={styles.Card3Text}>2021.07.27 스케줄</Text>
                <Text>마스크 드리기</Text>
                <Text>쌀</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottomButton}>
            <TouchableOpacity style={styles.bottomButton01}><Text style={styles.bottomButtonText}>이전</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton02}><Text style={styles.bottomButtonText}>오늘</Text></TouchableOpacity>
            <TouchableOpacity style={styles.bottomButton01}><Text style={styles.bottomButtonText}>다음</Text></TouchableOpacity>
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

    cardContainer:{
        marginTop:20,
        height:120,
        // borderWidth:1,
        marginLeft:7,
        marginRight:7
    },

    Card:{
        width:200,
        height:100,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
        margin:7
    },

    cardText1:{
        color:"red",
        fontWeight:"700",
        textAlign:"center"
    },

    cardText101:{
        height:20
    },

    cardText2:{
        color:"yellow",
        fontWeight:"700",
        textAlign:"center"
    },

    card2Container:{
        // borderWidth:1,
        marginTop:10,
        marginLeft:7,
        marginRight:7
    },

    Card2:{
        width:"100%",
        height:150,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
    },

    Card2Text:{
        fontWeight:"700",
        marginBottom:20
    },

    Card2Text01:{
        marginBottom:5
    },

    Card3:{
        marginTop:20,
        width:"100%",
        height:170,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15
    },

    Card3Text:{
        fontWeight:"700",
        marginBottom:20
    },

    bottomButton:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop:10,
        // borderWidth:1,
        height:50
    },

    bottomButton01:{
        width:90,
        height:50,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
        margin:7
    },

    bottomButton02:{
        width:130,
        height:50,
        padding:15,
        backgroundColor:"#fdc453",
        borderColor:"deeppink",
        borderRadius:15,
        margin:7
    },

    bottomButtonText:{
        textAlign:"center"
    }
})