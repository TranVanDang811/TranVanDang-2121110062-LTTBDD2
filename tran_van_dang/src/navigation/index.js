import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Home from "../component/Home";
import Category from "../component/Category";
import ProductDetail from "../component/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        {/* <Stack.Screen name="TabNavigation" component={} /> */}
        <Stack.Screen name="Category" component={Category} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
