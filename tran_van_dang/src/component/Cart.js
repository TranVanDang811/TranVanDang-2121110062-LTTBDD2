import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CartScreen = ({ route }) => {
  const [cartItems, setCartItems] = useState([]);
  // if (!cartItems || cartItems.length === 0) {
  //   return (
  //     <SafeAreaView style={styles.container}>
  //       <Text>Không có sản phẩm trong giỏ hàng</Text>
  //     </SafeAreaView>
  //   );
  // }
  const updateAndStoreCart = (updatedCart) => {
    setCartItems(updatedCart);
    storeData('cart', updatedCart);
  };

  const updateCart = (product) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      updateAndStoreCart(
        cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      updateAndStoreCart([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    const { product } = route.params;
    updateCart(product);
  }, [route.params]);

  const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error updating cart:', error);
      // Handle the error or show a user-friendly message
    }
  };

  const removeItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    updateAndStoreCart(updatedCart);
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateAndStoreCart(updatedCart);
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cartItems.map(item =>
      item.id === productId
        ? { ...item, quantity: Math.max(1, item.quantity - 1) }
        : item
    );
    updateAndStoreCart(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giỏ Hàng</Text>
      <View style={styles.cartContainer}>
        {cartItems.length > 0 ? (
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => `${item.id}_${index}`}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productTitle}>
                    {item.title.length > 18 ? `${item.title.substring(0, 18)}...` : item.title}
                  </Text>
                  <Text style={styles.productPrice}>
                    Giá: ${item.price * item.quantity}
                  </Text>
                  <View style={styles.quantityControls}>
                    <TouchableOpacity
                      onPress={() => decrementQuantity(item.id)}
                      disabled={item.quantity === 1}
                      style={item.quantity === 1 ? styles.disabledButton : styles.activeButton}
                    >
                      <FontAwesome name="minus" size={20} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                      onPress={() => incrementQuantity(item.id)}
                      disabled={item.quantity === 10}
                      style={item.quantity === 10 ? styles.disabledButton : styles.activeButton}
                    >
                      <FontAwesome name="plus" size={20} color="black" />
                    </TouchableOpacity>
                  </View>
                </View>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <Text>Giỏ hàng trống</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartContainer: {
    flexDirection: 'column',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
    maxWidth: 150,
  },
  productPrice: {
    fontSize: 14,
    marginBottom: 5,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeButton: {
    opacity: 1,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: 'lightgray',
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    marginHorizontal: 10,
  },
});

export default CartScreen;
