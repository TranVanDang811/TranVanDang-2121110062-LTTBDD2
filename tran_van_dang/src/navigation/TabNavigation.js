import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductDetail from "../screens/productdetail/ProductDetail";
import Cart from "../component/Cart";
import HomeScreen from "../screens/home";
import LoginScreen from "../screens/login";
import Profile from "../screens/profile/Profile";
import { useState } from "react";
import Notification from "../screens/notification/Notification";

const Tab = createBottomTabNavigator();

export default function TabNavigation({ navigation }) {

  

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen   
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen   
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Giỏ hàng",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen   
        name="Bell"
        component={Notification}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen   
        name="Account"
        component={Profile}
        options={{
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
