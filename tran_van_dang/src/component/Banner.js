import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import banner from '../../assets/Laptop_banner.jpg'

export default function Banner() {
  return (
    <Image  style={styles.banner} className="ml-2" source={banner} >
    </Image>
    
  );
}
const styles = StyleSheet.create({

  banner:{
    width:380,
    height:150,
    
  },

});
