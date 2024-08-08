import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeFinal = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    Products();
  }, []);

  const Products = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/1`);
    const json = await response.json();
    setData(json);
  };
  return (
    <View>
  
    </View>
  )
}

export default HomeFinal

const styles = StyleSheet.create({})