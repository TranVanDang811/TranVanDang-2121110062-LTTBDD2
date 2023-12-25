import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


export default function Content() {
  return (
    <View style={styles.bg}>
    <Text style={styles.laber1}>Content</Text>
    </View>
  );
}
const styles = StyleSheet.create({

  bg:{
  
    backgroundColor:"#00FFFF",
    width:10000,
    height:100,

  },
  laber1:{
    paddingLeft:750,
    paddingTop:40,

  },
});
