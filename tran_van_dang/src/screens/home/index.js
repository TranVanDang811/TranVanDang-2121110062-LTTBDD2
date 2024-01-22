import { StatusBar } from "expo-status-bar";
import React, { useEffect,  useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../../component/Header";

import Products from "../../component/Products";
import { useDispatch, useSelector } from "react-redux";
import { byToCart } from "../../redux/cartReducer";
import Toast from 'react-native-toast-message';
import Category from "../category";
import Banner from "../banner";
export default function HomeScreen() {
  const [data, setData] = useState([]);
  const [error, setError] = useState([]);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setData(result.products);
    } catch (error) {
      setError(error.message);
    } 
  };
  console.log(data);
  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={styles.container}>
        <Header  data={data} onSearchTextChange={handleSearchTextChange}/>
      
      <ScrollView>
      <Banner/>
        <Category/>
        <Products data={data} searchText={searchText} />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  bg: {

    margin: 5,
    width: 154,
    height: 206,

  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
