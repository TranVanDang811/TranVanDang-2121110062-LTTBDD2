import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../component/Home";
import Category from "../component/Category";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProductDetail from "../component/ProductDetail";
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
        name="Heart"
        component={ProductDetail}
        options={{
          tabBarLabel: "Heart",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
       
      />
      <Tab.Screen name="Settings" component={Category} />
    </Tab.Navigator>
  );
}
