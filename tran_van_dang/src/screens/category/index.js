import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { icons } from "../../../constants";

export default function Category() {
  const [categories, setCategories] = useState([]);
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
  return (
    <View>
      <Text className="pl-2 font-bold text-xl">Danh Mục Sản Phẩm</Text>
      {/* <View className="flex flex-row" style={styles.gridContainer}>
   
        <View  style={styles.gridRow}>
          
          <View style={styles.gridColumn}>
            <View style={styles.bg}>
              <Image style={styles.icon} source={icons.laptop} />
              <Text style={styles.text}>Điện thoại</Text>
            </View>
          </View>
          <View style={styles.gridColumn}>
            <View style={styles.bg}>
              <Image style={styles.icon} source={icons.headphones} />
              <Text style={styles.text}>Điện thoại</Text>
            </View>
          </View>
          <View style={styles.gridColumn}>
            <View style={styles.bg}>
              <Image style={styles.icon} source={icons.smartphone} />
              <Text style={styles.text}>Điện thoại</Text>
            </View>
          </View>
        </View>
         
        <View style={styles.gridRow}>
          <View style={styles.gridColumn}>
            <View style={styles.bg}>
              <Image style={styles.icon} source={icons.smartphone} />
              <Text style={styles.text}>Điện thoại</Text>
            </View>
          </View>
          <View style={styles.gridColumn}>
            <View style={styles.bg}>
              <Image style={styles.icon} source={icons.laptop} />
              <Text style={styles.text}>Điện thoại</Text>
            </View>
          </View>
          <View style={styles.gridColumn}>
            <View style={styles.bg}>
              <Image style={styles.icon} source={icons.headphones} />
              <Text style={styles.text}>Điện thoại</Text>
            </View>
          </View>
        </View>
      </View> */}
      <ScrollView horizontal>
        {categories.map((category, index) => (
          <View className="m-2 border-gray-400 rounded bg-gray-400 p-3 items-center  ">
            <Text className="uppercase text-white">{category}</Text>
          </View>
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
