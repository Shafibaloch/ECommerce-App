import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Forget = () => {
  return (
    <View style={{flex:1,borderLeftColor:"white"}}>
<Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          top: 20,
          alignItems: 'center',
          padding: 15,
        }}>
            Forgot
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          bottom: 15,
          padding: 15,
          alignItems: 'center',
        }}>
        Password?
      </Text>
      <View
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          bottom: 20,
          padding: 5,
          margin: 20,
          flexDirection: 'row',
        }}>
        <MaterialCommunityIcons name={'email-outline'} size={18} color={'black'} top={16} />

        <TextInput placeholder="Enter your email address" keyborboardtype="default" />
        </View>
        <View style={{flexDirection:"row"}}>
            <Text style={{marginLeft:20,color:"#FF4B26"}}>
                *
            </Text>
            <Text style={{marginLeft:4}}>
            We will send you a message to set or reset 
            </Text>
        </View>
        <Text style={{marginLeft:20}}> 
        your new password
        </Text>
        <View style={{
          bottom: 30,
          borderRadius: 20,
            top:20,
          padding: 5,
          margin: 20,
        }}>
        <Button title="Submit" color={'#F83758'} /></View>
    </View>
  )
}

export default Forget

const styles = StyleSheet.create({})