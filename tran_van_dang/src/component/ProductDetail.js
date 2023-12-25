import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import product_image from '../../assets/Intersect.jpg'


export default function ProductDetail() {
return (
<View>
    <Text className="text-2xl pt-3 pl-2">Tất cả sản phẩm</Text>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    <View style={styles.bg}>
        <Image className="pr-3" source={product_image} />
        <Text className="text-black pl-2  pt-1">Sport Band</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text className="text-black pl-2  pt-1">200$</Text>
            <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
        </View>
    </View>

    <View style={styles.bg}>
        <Image className="pr-3" source={product_image} />
        <Text className="text-black pl-2  pt-1">Sport Band</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text className="text-black pl-2  pt-1">200$</Text>
            <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
        </View>
    </View>
    <View style={styles.bg}>
        <Image className="pr-3" source={product_image} />
        <Text className="text-black pl-2  pt-1">Sport Band</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text className="text-black pl-2  pt-1">200$</Text>
            <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
        </View>
    </View>
    <View style={styles.bg}>
        <Image className="pr-3" source={product_image} />
        <Text className="text-black pl-2  pt-1">Sport Band</Text>
        <View style={{ flexDirection: 'row' }}>
            <Text className="text-black pl-2  pt-1">200$</Text>
            <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
        </View>
    </View>

</View>
</View>

);
}
const styles = StyleSheet.create({

bg:{

// backgroundColor:"#000000",
margin:13,
width:169,
height:206,
// borderWidth: 1,
},

});
