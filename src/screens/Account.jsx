// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Button,
//   Image,
// } from 'react-native';
// import React, { useState } from 'react';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
// import auth from '@react-native-firebase/auth';

// const Account = () => {
//   const [email,setEmail]=useState('');
//   const [Password,setPaswword]=useState('');
//   const CreateUser=()=>{
//     auth()
//   .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
//   .then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
//   }
//   return (
//     <View style={{flex: 1, backgroundColor: 'white'}}>
//       <Text
//         style={{
//           fontSize: 30,
//           fontWeight: 'bold',
//           top: 20,
//           alignItems: 'center',
//           padding: 15,
//         }}>
//         Create an
//       </Text>
//       <Text
//         style={{
//           fontSize: 30,
//           fontWeight: 'bold',
//           bottom: 15,
//           padding: 15,
//           alignItems: 'center',
//         }}>
//         account
//       </Text>
//       <View
//         style={{
//           borderColor: 'gray',
//           borderWidth: 1,
//           borderRadius: 10,
//           bottom: 20,
//           padding: 5,
//           margin: 20,
//           flexDirection: 'row',
//         }}>
//         <EvilIcons name={'user'} size={20} color={'black'} top={16} />

//         <TextInput placeholder="Username or Email" keyborboardtype="default"
//         value={email} onChangeText= {txt=> setEmail(txt) } />
//       </View>
//       <View
//         style={{
//           borderColor: 'gray',
//           borderWidth: 1,
//           borderRadius: 10,
//           bottom: 20,

//           padding: 5,
//           margin: 20,
//           flexDirection: 'row',
//         }}>
//         <EvilIcons name={'lock'} size={20} color={'black'} top={16} />
//         <TextInput placeholder="Password" keyborboardtype="numeric"
//         value={Password} onChangeText= {txt=> setPaswword(txt) } />
//       </View>
//       <View
//         style={{
//           borderColor: 'gray',
//           borderWidth: 1,
//           borderRadius: 10,
//           bottom: 20,

//           padding: 5,
//           margin: 20,
//           flexDirection: 'row',
//         }}>
//         <EvilIcons name={'lock'} size={20} color={'black'} top={16} />
//         <TextInput placeholder="Password" keyborboardtype="numeric" />
//       </View>
//       <View style={{flexDirection: 'row', marginLeft: 30, bottom: 20}}>
//         <Text>By clicking the</Text>
//         <TouchableOpacity>
//           <Text style={{marginLeft: 4, color: '#FF4B26'}}>Register</Text>
//         </TouchableOpacity>
//         <Text style={{marginLeft: 4}}>button, you agree</Text>
//       </View>
//       <Text style={{marginLeft: 30, bottom: 20}}>to the public offer</Text>
//       <View
//         style={{
//           bottom: 30,
//           borderRadius: 20,

//           padding: 5,
//           margin: 20,
//         }}>
//         <Button title="Create Account" color={'#F83758'} onPress={
//           CreateUser()
//         } />
//         <Text style={{left: 95, top: 10}}>- OR Continue with -</Text>
//       </View>
//       <View
//         style={{justifyContent: 'centre', alignItems: 'center', bottom: 30}}>
//         <Image source={require('../Assets/Images/Buttons.png')} />
//       </View>
//       <View
//         style={{flexDirection: 'row', justifyContent: 'center', bottom: 10}}>
//         <Text>Already Have an Account</Text>
//         <TouchableOpacity>
//           <Text style={{marginLeft: 5, color: '#F83758'}}>Login</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Account;

// const styles = StyleSheet.create({});
