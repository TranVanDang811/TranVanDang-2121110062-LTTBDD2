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
import { useNavigation } from "@react-navigation/native";

export default function Category() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product categories");
        }

        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error(error);
        Alert.alert("Error", "Failed to fetch product categories");
      }
    };

    fetchCategories();
  }, []);
  const handlePressCategory = (category)=>{
    navigation.navigate("ListCategory",{
      category:category
    });
  }
  const goListCategory = (category) => {
    navigation.navigate("ListCategory");
  };
  // const handleCategoryPress = (category) => {
  //   setSelectedCategory(category);
  // };
  return (
    <View>
      <TouchableOpacity onPress={goListCategory}>
        <Text className="pl-2 font-bold text-xl">Danh Mục Sản Phẩm</Text>
      </TouchableOpacity>
      <ScrollView horizontal>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={()=>handlePressCategory(category)}
          >
            <View className="m-2 border-gray-400 rounded bg-gray-400 p-3 items-center  ">
              <Text className="uppercase text-white">{category}</Text>
            </View>
            
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 16,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  gridContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  gridColumn: {
    flex: 1,
    marginRight: 8,
  },
  bg: {
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    boxShadowColor: "#DDDDDD",
  },
  icon: {
    width: 30,
    height: 30,
    paddingRight: 3,
  },
  text: {
    color: "black",
    paddingLeft: 2,
    paddingTop: 1,
  },
});
