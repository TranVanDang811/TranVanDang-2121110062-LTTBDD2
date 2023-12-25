import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import product_image from '../../assets/Back.jpg'
import { useNavigation } from '@react-navigation/native';
const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}> 
     <TouchableOpacity onPress={goBack} style={styles.backButton}>
       <Image  className="pr-3" source={product_image} />
       </TouchableOpacity>
      <Image style={styles.image} source={{ uri: product.image }} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{`${product.price}$`}</Text>
        {/* Add more details here based on your product structure */}
      </View>
    <Button title='Thêm vào giỏ hàng'></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#fff"
  },
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
  // Add styles for additional details if needed
});

export default ProductDetail;