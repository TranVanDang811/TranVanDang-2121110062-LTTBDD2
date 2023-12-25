import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Menu() {
return (
<View style={styles.container}>
    <StatusBar style="auto" />
    <View style={styles.menuContainer}>
        <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="home" size={22} color="black" />
            <Text className="text-xs" >Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="heart" size={22} color="black" />
            <Text className="text-xs">Yêu thích</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="bell" size={22} color="black" />
            <Text className="text-xs">Tin nhắn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="cart" size={22} color="black" />
            <Text className="text-xs">Giỏ hàng</Text>
        </TouchableOpacity>
    
        <TouchableOpacity style={styles.menuItem}>
            <MaterialCommunityIcons name="account" size={22} color="black" />
            <Text className="text-xs">Tài Khoản</Text>
        </TouchableOpacity>
    </View>
</View>
);
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'flex-end', // Align items to the bottom
},
menuContainer: {
flexDirection: 'row',
justifyContent: 'space-around',
width: '100%',
backgroundColor: '#fff',
position:'absolute',


},
menuItem: {
flex: 1,
alignItems: 'center',
paddingVertical: 10,

},
});
