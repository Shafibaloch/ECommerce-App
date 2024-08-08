import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useEffect, useState} from 'react';


const HomeTwo = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    Products();
  }, []);

  const Products = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const json = await response.json();
    setData(json);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
    <View
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <AntDesign name={'menufold'} size={20} />
      <Image
        style={{height: 70, width: 70, resizeMode: 'contain'}}
        source={require('../Assets/Images/logo.png')}
      />
      <Image style={{}} source={require('../Assets/Images/human.png')} />
    </View>
    <View
      style={{
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        paddingHorizontal: 5,
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Feather style={{}} name="search" size={25} />
      <TextInput
        style={{
          width: '80%',
          borderColor: 'grey',
          borderColor: '#BBBBBB',
        }}
        placeholder="Search any Product.."
      />
      <FontAwesome style={{}} name="microphone" size={25} />
    </View>
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
      52,082+ Iteams 
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text style={{}}>sort</Text>
        <FontAwesome
          name="sort"
          size={20}
          color="black"
          style={{marginLeft: 5}}
        />
        <Text style={{marginLeft: 5}}>Filter</Text>
        <AntDesign
          name="filter"
          size={18}
          color="black"
          style={{marginLeft: 5}}
        />
      </View>
    </View>
    <ScrollView style={{backgroundColor:"white"}}
    showsVerticalScrollIndicator={false}>
        
          <FlatList
          numColumns={2}
          
            data={data}
            
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 200,
                    height: 330,
                    margin: 5,
                    borderRadius: 5,
                    borderWidth: 0.5,
                  }}>
                  <Image
                    style={{height: 200, width: 100}}
                    resizeMode="contain"
                    source={{uri: item?.image}}
                  />
                  <View style={{marginTop: 10, padding: 3}}>
                    <Text>{item?.title}</Text>
                    <Text>{item?.category}</Text>
                    <Text>{item?.price}</Text>
                    
                  </View>
                </View>
              );
            }}
          />
         </ScrollView>
    </View>
    
      
    
  )
}

export default HomeTwo

const styles = StyleSheet.create({})