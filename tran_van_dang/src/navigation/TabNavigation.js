import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../component/Home";
import Category from "../component/Category";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductDetail from "../component/ProductDetail";
import Cart from "../component/Cart";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen   
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      
      />
            <Tab.Screen   
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
       
      />
                  <Tab.Screen   
        name="Bell"
        component={Home}
        options={{
          tabBarLabel: "Bell",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
       
      />
                  <Tab.Screen   
        name="Account"
        component={Home}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
       
      />
      
    </Tab.Navigator>
  );
}
