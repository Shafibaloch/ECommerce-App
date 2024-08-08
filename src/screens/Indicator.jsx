import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlier from 'react-native-app-intro-slider'



const Indicator = () => {
    


    const slides = [
        {
            title: 'Choose Products',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: require('../Assets/Images/SliderOne.png'),
            page: 1

        },
        {
            title: 'Make Payment',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: require('../Assets/Images/SliderTwo.png'),
            page: 2

        },
        {
            title: 'Get Your Order',
            subtitle: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
            image: require('../Assets/Images/SliderThree.png'),
            page: 3

        },
    ]
    return (
        <AppIntroSlier
            data={slides}
            dotStyle={{ backgroundColor: 'lightgrey' }}
            activeDotStyle={{ height: 10, width: 40, backgroundColor: 'black' }}
            showNextButton={true}
            renderNextButton={() => {
                return (
                    <View>
                        <Text style={{ color:"#F83758", fontWeight: "bold" }}>Next</Text>
                    </View>
                )
            }}

            showPrevButton={true}
            renderPrevButton={() => {
                return (
                    <View>
                        <Text
                            style={{ fontWeight: "bold",top:6 }}
                        >
                            Prev
                        </Text>
                    </View>
                )
            }}

            renderItem={({ item }) => {
                return (
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 10
                    }}>

                        <View style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            padding: 10,
                            alignItems: 'center',
                        }}>
                            <Text style={{ color:"#F83758", fontSize:20}}>
                                {item.page}
                            </Text>
                        </View>

                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                padding: 10,
                                alignItems: 'center',

                            }}>
                            <TouchableOpacity
                               
                            >
                                <Text style={{
                                    color: "black",
                                
                                    fontSize: 20,
                                    
                                }}>
                                    Skip
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <Image source={item.image} />

                        <Text
                            style={{
                                fontWeight: "bold",
                                color: 'black',
                                fontSize: 30,
                                alignSelf: 'center'
                            }}>{item.title}</Text>

                        <Text style={{
                            color:"grey",
                            fontSize: 16,
                            textAlign: 'center'
                        }}>{item.subtitle}</Text>
                    </View>
                )
            }}
        />
    )
}

export default Indicator

const styles = StyleSheet.create({})