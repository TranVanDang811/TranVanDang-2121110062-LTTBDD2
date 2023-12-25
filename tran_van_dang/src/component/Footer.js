import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Footer() {
  return (
    <View style={styles.bg}>
    <Text style={styles.laber1}>Footer</Text>
    </View>
  );
}
const styles = StyleSheet.create({

  bg:{
  
    backgroundColor:"#00FF00",
    width:10000,
    height:100,

  },
  laber1:{
    paddingLeft:750,
    paddingTop:40,

  },
});
