import { FlatList, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
const HomeHeader = () => {
    const Images = [
        {
            
            img: require('../Assets/Images/one.png'),
            name: "Trendy",
          
        },
        {
            
            img: require('../Assets/Images/two.png'),
            name:"Fashion",
        }, {
           
            img: require('../Assets/Images/three.png'),
            name:"Kids",
        },
        {
           
            img: require('../Assets/Images/four.png'),
            name:"Mens",
        },
        {
           
            img: require('../Assets/Images/five.png'),
            name:"Women",
        },
      
    ]
  return (
    <View style={{flex:1,backgroundColor:"white"}}>
    <View style={{top:20,left:5,flexDirection:"row",justifyContent:"space-evenly"}} >
      <AntDesign name={"menufold"} size={20} right={32}/>
      <Image style={{height:40,width:110}}
      source={require('../Assets/Images/logo.png')}/>
      <Image style={{left:20}}
      source={require('../Assets/Images/human.png')}/>
  
    
    </View>
    <View style={{ borderWidth: 1,
          borderRadius: 10,
          bottom: 20,
          padding: 2,
          margin: 20,
          flexDirection: 'row',
          top:20}}>
    <Feather
                            style={{ top:13 }}

                            name='search'
                            size={25}
                        />
    <TextInput
                            style={{
                                width: '80%',
                               
                                left:10,
                                borderColor:"grey",
                                borderColor:"#BBBBBB",
                                
                            }}
                            placeholder='Search any Product..'
                        />
                          <FontAwesome
                        style={{ top:13}}
                        name='microphone'
                        size={25}
                    />
    </View>
    <View style={{
                    flexDirection: 'row',
                    top:15,
                    alignItems: 'center',
                    justifyContent:"space-evenly"
                }}>
  
                    <Text
                        style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}
                    >All Featured</Text>
                       <Text style={{left:40}}>sort</Text>
                        <FontAwesome
                            name='sort'
                            size={20}
                            color='black'
                            left={30}
/>
<Text style={{left:24}}>Filter</Text>
                        <AntDesign
                            name='filter'
                            size={18}
                            color='black'
                            left={6}
                        />
    </View>
    <View style={{top:30,justifyContent:"space-evenly"}} 


>
    <FlatList

        data={Images}
        horizontal={true}
        renderItem={({ item }) => {
            return (
                <View style={{ marginLeft: 20 }}>
                    <Image source={item.img} />
                    <Text style={{left:4}}>
                        {item.name}
                    </Text>
                </View>

            )
        }}
    />
</View>
    
    </View>
    
   
    
  )
}

export default HomeHeader

const styles = StyleSheet.create({})