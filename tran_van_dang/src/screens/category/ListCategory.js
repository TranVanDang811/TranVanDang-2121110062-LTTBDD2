import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../../../constants";
import Products from "../../component/Products";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { byToCart } from "../../redux/cartReducer";

const ListCategory = ({ route }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const { category } = route.params;
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const addToCart = (product) => {
    const productData = {
      id: product.id,
      title: product.title,
      price: product.price,
      thumbnail: product.thumbnail,
    };
    dispatch(byToCart(productData));
    Toast.show({
      type: "success",
      text1: "Sản phẩm đã được thêm vào giỏ hàng",
    });
  };

  const goHome = () => {
    navigation.navigate("Home");
  };
  //       const filteredProducts = allProducts.filter(
  //         (product) => product.category === selectedCategory
  //       );
  return (
    <View>
      <View className="flex flex-row items-center p-2 pt-9 bg-gray-400">
        <TouchableOpacity onPress={goHome}>
          <Image className="w-5 h-5 " source={icons.back} />
        </TouchableOpacity>
        <Text className="text-lg text-center text-white ml-36 uppercase">{category}</Text>
      </View>
      <View className="h-screen">
        <ScrollView className="mb-10">
          <View style={styles.productList}>
            {data.map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate("ProductDetail", { productId: item.id })} className="bg-white w-[45vw]  rounded-md m-1 p-2">
                <Image
                  className="h-32 w-full"
                  source={{ uri: item.thumbnail }}
                ></Image>
                <View>
                  <Text className="mt-3">{item.title}</Text>
                  <Text className="text-red-500 mt-5 font-bold">
                    ${item.price}
                  </Text>
                  <TouchableOpacity
                    className="bg-blue-500 rounded-lg mt-4"
                    onPress={() => addToCart(item)}
                  >
                    <Text
                      className="text-white py-3 px-5 text-center"
                      style={{ paddingLeft: 2, fontWeight: "bold" }}
                    >
                      Thêm giỏ hàng
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
    // <Text>ListCategory</Text>
  );
};
const styles = StyleSheet.create({
  productList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f7f7f7",
  },
  productItem: {
    width: "48%",
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  secondItem: {
    marginLeft: "2%",
  },

  productDetails: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: "70%",
    aspectRatio: 1,
    resizeMode: "cover",
    marginBottom: 4,
  },
});
export default ListCategory;
