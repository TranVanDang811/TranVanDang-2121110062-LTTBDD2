import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { DeleteCart, minusToCart, plusToCart } from "../redux/cartReducer";
import Toast from "react-native-toast-message";
import { icons } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const CartScreen = ({ route }) => {
  const { cartAr } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(cartAr);
  const decrementQuantity = (id) => {
    dispatch(minusToCart(id));
  };
  const incrementQuantity = (id) => {
    dispatch(plusToCart(id));
  };
  const removeToCart = (id) => {
    dispatch(DeleteCart(id));
    Toast.show({
      type: "success",
      text1: "Sản phẩm đã được xóa",
    });
  };
  const goBack = () => {
    navigation.goBack();
  };
  const calculateTotal = () => {
    let totalAmount = 0;
    cartAr.forEach((item) => {
      totalAmount += item.qty * item.total;
    });
    return totalAmount.toFixed(2); // Round to 2 decimal places
  };

  const handleHome = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView className="h-screen">
      <View className="flex flex-row items-center p-2 pt-9 bg-gray-400">
        <TouchableOpacity onPress={goBack}>
          <Image className="w-5 h-5 " source={icons.back} />
        </TouchableOpacity>

        <Text className="text-2xl text-white ml-32">Giỏ Hàng</Text>
      </View>

      <View className="" style={styles.cartContainer}>
        {cartAr?.length > 0 ? (
          <FlatList
            data={cartAr}
            keyExtractor={(item, index) => `${item.id}_${index}`}
            renderItem={({ item }) => (
              <View style={styles.cartItem} className="flex flex-row p-3">
                <Image className="w-20 h-20" source={{ uri: item.thumbnail }} />
                <View>
                  <Text style={styles.productTitle}>{item.title}</Text>
                  <Text className="text-green-500">Giá: ${item.total}</Text>
                </View>

                <View style={styles.quantityControls}>
                  <TouchableOpacity
                    onPress={() => decrementQuantity(item.id)}
                    disabled={item.qty === 1}
                    style={
                      item.qty === 1
                        ? styles.disabledButton
                        : styles.activeButton
                    }
                  >
                    <FontAwesome name="minus" size={20} color="black" />
                  </TouchableOpacity>
                  <Text style={styles.quantityText}>{item.qty}</Text>
                  <TouchableOpacity
                    onPress={() => incrementQuantity(item.id)}
                    disabled={item.qty === 10}
                    style={
                      item.qty === 10
                        ? styles.disabledButton
                        : styles.activeButton
                    }
                  >
                    <FontAwesome name="plus" size={20} color="black" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => removeToCart(item.id)}>
                  {/* <FontAwesome name="trash" size={20} color="red" /> */}
                  <Text className="text-red-500 m-5">xóa</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        ) : (
          <View>
            <Text className="text-center mt-20 text-lg ">
              Không có sản phẩm trong giỏ hàng
            </Text>
            <Image
              className="w-20 h-20 mb-10 m-auto"
              source={icons.ordertracking}
            ></Image>
            <TouchableOpacity className="bg-red-100 w-52 ml-24 rounded-full " onPress={handleHome}>
              <Text className="text-center  py-3 text-lg ">
                Tiếp tục mua sắm
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View className="bg-white absolute bottom-0 w-full h-28 p-2">
        <View className="flex ">
          <Text className="text-lg font-bold pb-2">
            Tổng tiền: ${calculateTotal()}{" "}
          </Text>
        </View>
        <TouchableOpacity className="bg-red-500 p-3 rounded-full">
          <Text className="text-white text-center ">THANH TOÁN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartContainer: {
    // flexDirection: "column",
  },
  cartItem: {
    justifyContent: "space-between",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
    maxWidth: 150,
  },

  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
  },
  activeButton: {
    opacity: 1,
  },
  disabledButton: {
    opacity: 0.5,
    backgroundColor: "lightgray",
    padding: 5,
    borderRadius: 5,
  },
  quantityText: {
    marginHorizontal: 10,
  },
});

export default CartScreen;
