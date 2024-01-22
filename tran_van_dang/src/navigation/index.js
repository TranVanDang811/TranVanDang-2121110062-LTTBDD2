import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import ProductDetail from "../screens/productdetail/ProductDetail";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Cart from "../component/Cart";
import LoginScreen from "../screens/login";
import Profile from "../screens/profile/Profile";
import { AuthProvider } from "../screens/AuthContext";
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      <AuthProvider>

      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Router;
