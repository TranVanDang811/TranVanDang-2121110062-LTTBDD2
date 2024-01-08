import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../component/Home";
import Category from "../component/Category";
import ProductDetail from "../component/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Cart from "../component/Cart";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        {/* <Stack.Screen name="TabNavigation" component={} /> */}
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
