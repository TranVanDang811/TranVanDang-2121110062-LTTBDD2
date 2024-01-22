import React, { useEffect, useState } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { byToCart } from '../redux/cartReducer';
import { icons } from '../../constants';

const Products = ({ data, searchText, selectedCategory }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const filteredData = data.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase())&&
  (!selectedCategory || item.category === selectedCategory));
  const handleProductPress = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const addToCart = (product) => {
    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    };
    dispatch(byToCart(productData));
    Toast.show({
      type: 'success',
      text1: 'Sản phẩm đã được thêm vào giỏ hàng',
    });
  };

  return (
    <SafeAreaView>
      <Text className="pl-2 font-bold text-xl">Sản Phẩm Nổi Bật</Text>
      {filteredData.length > 0 ? (
        <View style={styles.productList}>
          {filteredData.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleProductPress(item.id)}
              style={[styles.productItem, index % 2 !== 0 ? styles.secondItem : null]}
              key={item.id}
            >
              <View style={styles.productDetails}>
                <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
                <Text numberOfLines={1}  >
                  {item.title}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={{ color: 'black', paddingLeft: 2 }}>{item.price}$</Text>
                  <TouchableOpacity onPress={() => addToCart(item)}>
                    <Text style={{ paddingLeft: 2, fontWeight: 'bold' }}>Thêm giỏ hàng</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <Text className="text-center items-center text-2xl m-5">Không có sản phẩm</Text>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  productItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  secondItem: {
    marginLeft: '2%',
  },

  productDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: '70%',
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 4,
  },

});

export default Products;