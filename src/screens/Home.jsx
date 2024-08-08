import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Carousel from 'react-native-reanimated-carousel';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Products();
  }, []);

  const Products = async () => {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const json = await response.json();
    setData(json);
  };

  const slider = [
    {
      slidee: require('../Assets/Images/slider.png'),
    },
  ];

  const Images = [
    {
      img: require('../Assets/Images/one.png'),
      name: 'Trendy',
    },
    {
      img: require('../Assets/Images/two.png'),
      name: 'Fashion',
    },
    {
      img: require('../Assets/Images/three.png'),
      name: 'Kids',
    },
    {
      img: require('../Assets/Images/four.png'),
      name: 'Mens',
    },
    {
      img: require('../Assets/Images/five.png'),
      name: 'Women',
    },
  ];

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
        
        {/* <TextInput
        //Home Feature
          style={{
            width: '80%',
            borderColor: 'grey',
            borderColor: '#BBBBBB',
          }}
          placeholder="Search any Product.."
        /> */}
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
          All Featured
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
      <View style={{justifyContent: 'space-evenly'}}>
        <FlatList
          data={Images}
          horizontal={true}
          renderItem={({item}) => {
            return (
              <View style={{margin: 5, padding: 5}}>
                <Image source={item.img} />
                <Text style={{}}>{item.name}</Text>
              </View>
            );
          }}
        />
      </View>
      <ScrollView style={{backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      
        <View style={{height: 220, padding: 20}}>
          <Carousel
            loop
            width={330}
            height={200}
            autoPlay={true}
            data={slider}
            scrollAnimationDuration={1000}
            renderItem={({item}) => (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}>
                <Image
                  source={item.slidee}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                />
              </View>
            )}
          />
        </View>

        <View
          style={{
            padding: 20,
            backgroundColor: '#4392F9',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Deal of the Day</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SimpleLineIcons name={'clock'} color={'white'} />
              <Text style={{color: 'white', marginLeft: 5}}>
                22h 55m 20s remaining
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'white',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white'}}>View all</Text>
              <Feather name={'arrow-right'} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            horizontal={true}
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
         
        </View>
        {/* <View style={{flexDirection:"row",padding:20,backgroundColor:"red",borderRadius:10,margin:10}}>
          <Image
          source={require('../Assets/Images/Offer.png')}/>
          <Text style={{justifyContent:"center",alignItems:"center",fontSize:20,marginLeft:40}}>
          Special Offers
        
          </Text>
          <Text>
          We make sure you get the 
          </Text>
         
          
        
        </View> */}
        
       
        
    
        <View style={{position:"relative"}}>
        <View style={{position:"relative"}}>
        <View>
          <View style={{position:"relative",margin:10}}>
            <Image source={require('../Assets/Images/bore.png')}/>
          </View>
          <View style={{position:"absolute"}}>
            <Image source={require('../Assets/Images/glee.png')}/>
          </View>
          <View style={{position:"absolute",left:30,top:30}}>
            <Image
            source={require('../Assets/Images/shoe.png')}/>
          </View>
          <View style={{position:"absolute",left:200,top:30}}>
            <Text style={{fontSize:20}}>
            Flat and Heels
            </Text>
            <Text style={{right:40}}>
            Stand a chance to get rewarded
            </Text>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: '',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor:"#F83758",top:10,left:20,width:'45%'
              }}>
              <Text style={{color: 'white'}}>Visit now</Text>
              <Feather name={'arrow-right'} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        </View>
        <View
          style={{
            padding: 20,
            backgroundColor: '#FD6E87',
            margin: 10,
            borderRadius: 10,
          }}>
          <Text style={{color: 'white'}}>Trending Products </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <SimpleLineIcons name={'calendar'} color={'white'} />
              <Text style={{color: 'white', marginLeft: 5}}>
              Last Date 29/02/22
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'white',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}>
              <Text style={{color: 'white'}}>View all</Text>
              <Feather name={'arrow-right'} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <FlatList
            data={data}
            horizontal={true}
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
         
        </View>


        <View style={{padding: 20}}>
          <Image
            style={{height: 180, width: '100%', borderRadius: 10}}
            source={require('../Assets/Images/Mask.png')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'white',

            borderRadius: 10,
          }}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>
            New Arrivals{' '}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{color: 'black', marginLeft: 5}}>
                Summer 25 Collections
              </Text>
            </View>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: 'white',
                paddingVertical: 5,
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: '#F83758',
              }}>
              <Text style={{color: 'white'}}>View all</Text>
              <Feather name={'arrow-right'} color={'white'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:0.5}}>
          <Text style={{fontSize:20,fontWeight:"bold",margin:5}}>
          Sponserd
          </Text>
          <Image
          source={require('../Assets/Images/off.png')}/>
          <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:20,fontWeight:"bold",margin:5}}>
            up to 50% Off
            </Text>
            <Feather name={'arrow-right'} color={'black'} size={20} margin={10} />
          </View>
          

        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    borderColor: 'white',
    borderWidth: 1,
    width: '50%',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'red'


},



});
