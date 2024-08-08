import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import auth from '@react-native-firebase/auth';

const EmailPass = () => {
  const[email,setEmail]=useState(" ");
  const[Password,setPaswword]=useState(" ")
  const CreateUser=()=>{
    auth().createUserWithEmailAndPassword(email,Password).then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
  }
  return (
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
      <TextInput style={{width:"100%",height:40,padding:20,borderWidth:1,borderRadius:10}}
      placeholder='email'
       placeholderTextColor="black"
      value={email} onChangeText= {txt=> setEmail(txt) }/>
       <TextInput style={{width:"100%",height:40,padding:20,borderWidth:1,borderRadius:10,margin:20}}
      placeholder='password'
      placeholderTextColor="black"
      value={Password} onChangeText= {txt=> setPaswword(txt) }/>
       <Button title="Create Account" color={'#F83758'} onPress={()=>CreateUser()} />
    </View>
  )
}

export default EmailPass

const styles = StyleSheet.create({})