import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{flex:1,backgroundColor:"white",alignItems:"center",justifyContent:"center"}}>
        <Image
        source={require('../Assets/Images/logo.png')}/>
      
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})