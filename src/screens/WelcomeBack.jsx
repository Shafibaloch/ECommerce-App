import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const WelcomeBack = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          top: 50,
          alignItems: 'center',
          padding: 15,
        }}>
        Welcome
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          top: 20,
          padding: 15,
          alignItems: 'center',
        }}>
        Back!
      </Text>

      <View
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,

          padding: 5,
          margin: 20,
          flexDirection: 'row',
        }}>
        <EvilIcons name={'user'} size={20} color={'black'} top={16} />

        <TextInput placeholder="Username or Email" keyborboardtype="default" />
      </View>
      <View
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,

          padding: 5,
          margin: 20,
          flexDirection: 'row',
        }}>
        <EvilIcons name={'lock'} size={20} color={'black'} top={16} />
        <TextInput placeholder="Password" keyborboardtype="numeric" />
      </View>
      <TouchableOpacity style={{right: 20, top: 5, alignItems: 'flex-end'}}>
        <Text style={{color: '#F83758'}}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{top:20,  
          borderRadius: 20,

          padding: 5,
          margin: 20,}}>
        <Button title='Login' color={'#F83758'}/>
        <Text style={{left:95,top:50}}>
        - OR Continue with -
        </Text>
      
</View>
<View style={{justifyContent:"centre",alignItems:"center",top:66}}>
    <Image
    source={require('../Assets/Images/Buttons.png')}/>
    <View style={{flexDirection:"row"}}>
    <Text>
Create An Account
</Text>
<TouchableOpacity>
    <Text style={{color:"#F83758",marginLeft:2}}>
        Sign up
    </Text>
</TouchableOpacity></View>
</View>

     
      
    </View>
    
  );
};

export default WelcomeBack;

const styles = StyleSheet.create({});
