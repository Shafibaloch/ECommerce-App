import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity, ScrollView } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'


const HomeThree = () => {

    // const navigation= useNavigation()


    const [data, setdata] = useState([]);


    useEffect(() => {
        allproduct()
    }, [])

    const allproduct = async () => {
        const response = await fetch(`https://fakestoreapi.com/products/1`)
        const json = await response.json();
        setdata(json)
    }



    const [data2, setdata2] = useState([]);


    useEffect(() => {
        products()
    }, [])

    const products = async () => {
        const response = await fetch(`https://fakestoreapi.com/products?limit=5`)
        const json = await response.json();
        setdata2(json)
    }



    return (
        <View style={{
            flex: 1,
            margin: 20,

        }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                <AntDesign

                    name='left'
                    size={20} />
                <AntDesign
                    name='shoppingcart'
                    size={20}
                />
            </View>


            <ScrollView >

                <View>
                    <Image style={{  justifyContent: 'center',
                    alignItems: 'center',
                    width: 300,
                    height: 400,
                    margin: 5,
                    borderRadius: 5,
                    borderWidth: 0.5, }} source={{ uri: data.image }} />
                </View>

                <View>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black',margin:5 }}>Size: 7UK</Text>
                </View>


                <View style={{
                    flexDirection: 'row', gap: 10, paddingBottom: '2%', marginTop: 10

                }}>
                    <View style={{
                        width: '15%',
                        height:"100%",
                        alignItems: 'center',
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        
                       

                    }}>
                        <Text style={{ color: '#FA7189',marginTop:2 }}>6 UK</Text>
                        
                    </View>

                    <View style={{
                    width:"15%",
                    height:"100%",
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        backgroundColor: '#FA7189',
                        alignItems: 'center',


                    }}>
                        <Text style={{ color: 'white',marginTop:2 }}>7 UK </Text>
                    </View>

                    <View style={{
                        width:"15%",
                        height:"100%",
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',

                    }}>
                        <Text style={{ color: '#FA7189',marginTop:2 }}>8 UK</Text>


                    </View>

                    <View style={{
                         width:"15%",
                         height:"100%",
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',

                    }}>
                        <Text style={{ color: '#FA7189',marginTop:2 }}>9 UK</Text>

                    </View>

                    <View style={{
                        width:"15%",
                        height:"100%",
                        borderColor: 'red',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',


                    }}>
                        <Text style={{ color: '#FA7189',marginTop:2 }}>10 UK</Text>

                    </View>
                </View>

                <View>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'black',

                        }}>{data.title}</Text>

                    <Text >{data.description}</Text>

             

                    <Text>₹{data.price}</Text>
                    <Text style={{ color: '#FE735C' }}>40%Off</Text>
                    <Text>⭐️⭐️⭐️⭐️⭐️     56890</Text>

                </View>


                <View style={{
                    flexDirection: 'row', gap: 10, paddingBottom: '2%', marginTop: 10

                }}>
                    <View style={{
                        width: '35%',
                        height:"100%",
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        flexDirection: 'row',
                        borderColor:"grey"



                    }}>
                        <EvilIcons name={'location'} color={'grey'}/>

                        <Text style={{ color: 'grey' }}>Nearest Store</Text>
                    </View>

                    <View style={{
                      width:"15%",
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                         borderColor:"grey"



                    }}>
                        <EvilIcons name={'lock'} color={'grey'}/>

                        <Text style={{ color: 'grey' }}>VIP </Text>
                    </View>

                    <View style={{
                         width: '35%',
                         height:"100%",
                        borderColor: '#828282',
                        borderWidth: 1,
                        borderRadius: 6,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-evenly',
                         borderColor:"grey"

                    }}>
                        <Fontisto name={'arrow-return-left'} color={'grey'}/>

                        <Text style={{ color: 'grey' }}>Return policy</Text>
                    </View>
                </View>


                <View>

                </View>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={{
                        borderColor: 'white',
                        borderWidth: 1,
                        width: '36%',
                        padding: 5,
                        borderRadius: 10,
                        alignItems: 'center',
                        marginTop: 10,
                        backgroundColor: '#3F92FF',
                        flexDirection: 'row'
                    }}>
                        <AntDesign

                            name='shoppingcart'
                            color='white'
                            size={20} />
                        <Text style={{ fontSize: 15, color: 'white' }}>  Go to cart</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            borderColor: 'white',
                            borderWidth: 1,
                            width: '36%',
                            padding: 5,
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            backgroundColor: '#31B769',
                            flexDirection: 'row'
                        }}>
                        <MaterialIcons

                            name='touch-app'
                            color='white'
                            size={20} />
                        <Text style={{ fontSize: 15, color: 'white' }}>  Buy Now</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.smallcontainer}>
                    <Text style={{ color: 'black',
        fontSize: 24,
        }}>Delivery in </Text>
                    <Text style={styles.buttontext}>1 within Hour</Text>
                </View>



                <View
                    style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: '40%',
                            paddingVertical: '2%',
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            margin:10
                        }}>
                        <AntDesign


                            name='eye'
                            size={20} />
                        <Text>View Similar</Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={{
                            borderColor: 'black',
                            borderWidth: 1,
                            width: '45%',
                            paddingVertical: '2%',
                            borderRadius: 10,
                            alignItems: 'center',
                            marginTop: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            margin:10
                        }}>
                        <FontAwesome6 name={'code-compare'}size={20} />

                            
                        <Text>Add to Compare</Text>

                    </TouchableOpacity>
                </View>


                {/* <Text style={{ fontSize: 20, color: 'black',marginTop:20 }}>Similar To</Text> */}
                <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
    
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black',marginRight:25}}>
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

                <FlatList
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                    numColumns={2}
                    data={data2}
                   
                    renderItem={({ item }) => {
                        return (
                            <View
                                style={{  justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 150,
                                    height: 250,
                                    margin: 5,
                                    borderRadius: 5,
                                    borderWidth: 0.5,}}>
                                <Image style={{ height: 100, width: 100, resizeMode: 'contain', borderRadius: 10 }} source={{ uri: item.image }} />
                                <Text style={{
                                    fontSize: 18,
                                    fontWeight: 'bold',
                                    color: 'black',

                                }}>{item.category}</Text>
                                <Text>{item.title}</Text>

                                <Text>₹{item.price}</Text>
                                <Text style={{ color: '#FE735C' }}>40%Off</Text>
                                

                            </View>

                        )
                    }}
                />





            </ScrollView>
            <View
                style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >

                <View style={{ alignItems: 'center' }}>
                    <Entypo
                        name='home'
                        size={25}
                    />
                    <Text>Home</Text>
                </View>


                <View style={{ alignItems: 'center' }}>
                    <AntDesign
                        name='hearto'
                        size={25}
                    />
                    <Text style={{ color: 'red' }}>wishlist</Text>
                </View>

                <View style={{ alignItems: 'center', backgroundColor: 'red', width: '15%', paddingVertical: 15, borderRadius: 40, alignSelf: 'center' }}>
                    <Feather
                        name='shopping-cart'
                        size={25}
                        color='white'

                    />
                </View>


                <View style={{ alignItems: 'center' }}>
                    <AntDesign
                        name='search1'
                        size={25}
                    />
                    <Text>search</Text>
                </View>


                <View style={{ alignItems: 'center', }}>
                    <AntDesign
                        name='setting'
                        size={25}
                    />
                    <Text>setting</Text>
                </View>

            </View>
        </View>
    )
}

export default HomeThree


const styles = StyleSheet.create({
    box1: {
        borderColor: '#A8A8A9',
        borderWidth: 1,
        paddingVertical: '1%',
        padding: 10,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    box2: {
        borderColor: '#A8A8A9',
        borderWidth: 1,
        paddingVertical: '1%',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        justifyContent: 'space-between',
        alignContent: 'center'
    },
    button: {
        borderColor: 'white',
        borderWidth: 1,
        width: '40%',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#3F92FF'


    },

    button2: {
        borderColor: 'white',
        borderWidth: 1,
        width: '25%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 10,
        justifyContent: 'center'

    },

    buttontext: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',


    },
    container: {
        flex: 1,
        // backgroundColor: '#E2E2E2',
        borderRadius: 10,
        // marginTop: 20,
        marginLeft: 10,
        marginRight: 5,
        marginBottom: 10,
        gap: 10,
        padding: 15,
        shadowOpacity: 10,
        shadowOffset:2,
        elevation: 8

    },
    smallcontainer: {
        backgroundColor: '#FD6E87',
        width: '100%',
        height: '6%',
        borderRadius: 10,
        padding: 10,
    
        marginTop: 10,

    }
})