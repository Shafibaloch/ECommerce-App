import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GetStarted = () => {
  return (
    <View style={{flex:1,position:"relative"}}>
     <Image
     source={require('../Assets/Images/Intro.png')}/>
     <View style={{position:"absolute"}}>
     <Text style={{color:"#FFFFFF",fontSize:30,fontWeight:"bold",left:120,top:470}}>
     
     You want 
     
     </Text>
     <Text  style={{color:"#FFFFFF",fontSize:30,fontWeight:"bold",left:70,top:460}}>
        Authentic, here 
        </Text>
        <Text  style={{color:"#FFFFFF",fontSize:30,fontWeight:"bold",left:120,top:450}}>
        you go!
        </Text>
        <Text style={{left:100,top:450,color:"#FFFFFF"}}>
        Find it here, buy it now!
        </Text>
    
     </View>
     <View
        style={{
         top:600,
          borderRadius: 20,
            position:"absolute",
          padding: 5,
          margin: 20,
          left:90,
        
          
        }}>
        <Button title="Get Started" color={'#F83758'} />
        </View>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({})