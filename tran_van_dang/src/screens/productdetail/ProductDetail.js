import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import product_image from "../../../assets/Back.png";
import { useNavigation } from "@react-navigation/native";
import { icons } from '../../../constants';
import { useDispatch } from "react-redux";
import { byToCart } from "../../redux/cartReducer";
import Toast from "react-native-toast-message";
const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const goBack = () => {
    navigation.goBack();
  };
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${productId}`
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

const handleAddToCart = (product) => {
  const productData = {
    id: product.id,
    title: product.title,
    price: product.price,
    thumbnail: product.thumbnail,
  }
  dispatch(byToCart(productData));
  Toast.show({
    type: 'success',
    text1: 'Sản phẩm đã được thêm vào giỏ hàng',
  })
  navigation.navigate('Cart')
}

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        className="p-2"
        onPress={goBack}
    
      >
        <Image className="pr-3 w-5 h-5" source={product_image} />
      </TouchableOpacity>
      <Image style={styles.image} source={{ uri: data.thumbnail }} />
      <View className="pl-1" style={styles.detailsContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <View className="border-t opacity-10" />
        <Text className="p-1" style={styles.price}>{`${data.price}$`}</Text>
      </View>
      {/* <Button title="Thêm vào giỏ hàng" onPress={()=>handleAddToCart(data)} /> */}
      <View className="border-t opacity-10" />
      <View className="pl-2">
        <Text className="font-bold text-lg pt-2  ">Chi tiết sản phẩm</Text>
        <Text className="  ">+Thương hiệu:ABC</Text>
        <Text className="  ">+Xuất xứ:Việt Nam</Text>
        <Text className="  ">+Trọng lượng:100kg</Text>
      </View>

      <View className="flex flex-row justify-between inset-x-0 bottom-0 ">
        <TouchableOpacity className="mt-12   bg-stone-400 p-3 items-center w-48 px-3 ">
          <Text className="text-white">MUA NGAY</Text>
        </TouchableOpacity>
      
        <TouchableOpacity className=" flex flex-row mt-12  bg-white border p-3 items-center w-52 px-3 "
         onPress={()=>handleAddToCart(data)}
        >
        <Image className="w-5 h-5 pl-3"source={icons.shoppingcart}></Image>
          <Text className="text-black pl-3">THÊM GIỎ HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
  },
  detailsContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 18,
    color: "red",
    marginTop: 5,
  },
  // Add styles for additional details if needed
});

export default ProductDetail;