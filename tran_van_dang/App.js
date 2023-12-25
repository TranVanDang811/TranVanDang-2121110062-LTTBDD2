import { StatusBar } from "expo-status-bar";
import {
Image,
ScrollView,
StyleSheet,
Text,
TextInput,
View,
} from "react-native";
import Header from "./src/component/Header";
import Banner from "./src/component/Banner";
import Home from "./src/component/Home";
import Api from "./src/component/Api";
import Products from "./src/component/Products";
import Menu from "./src/component/Menu";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Category from "./src/component/Category";
import ProductDetail from "./src/component/ProductDetail";

const Stack = createNativeStackNavigator();

export default function App() {
return (

<NavigationContainer>
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
</NavigationContainer>

);
}

