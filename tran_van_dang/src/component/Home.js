import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View,ActivityIndicator, SafeAreaView, TouchableOpacity } from 'react-native';
import product_image from '../../assets/Intersect.jpg'
import Banner from './Banner';
import Products from './Products';
import Header from './Header';
import Menu from './Menu';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const result = await response.json();
          console.log(result);
          setData(result);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
    const navigation = useNavigation();
return (
  

<SafeAreaView style={styles.container}>
    <Header />
    <ScrollView>
      
  <Banner />
  <Text className="text-2xl pt-3 pl-2">Sản phẩm nổi bật</Text>
  <ScrollView horizontal className="flex flex-row">
    {loading && <ActivityIndicator size="large" color="#0000ff" />}
    {error && <Text>Error: {error}</Text>}
    {data && (
      <View style={{ flexDirection: 'row' }}>
        {data.map((item, index) => (
           <TouchableOpacity
           key={index}
           style={styles.bg}
           onPress={() => navigation.navigate('ProductDetail', { product: item })}
         >
          <View key={index} style={styles.bg}>
            <Image className="pr-3" style={{ width: 150, height: 150 }} source={{ uri: item.image }} />
            <View style={{ width: 150, overflow: 'hidden' }}>
              <Text
                className="text-black pl-2 pt-1"
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text className="text-black pl-2 pt-1">{item.price}$</Text>
              <Text className="text-black pl-2 pt-1">Thêm giỏ hàng</Text>
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>
    )}
  </ScrollView>
  <Products />
  </ScrollView>

  {/* <Menu /> */}
</SafeAreaView>


);
}
const styles = StyleSheet.create({

bg:{

// backgroundColor:"#000000",
margin:5,
width:154,
height:206,
// borderWidth: 1,
},
container: {
  flex: 1,
  },
});
