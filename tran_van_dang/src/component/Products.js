// import { StatusBar } from 'expo-status-bar';
// import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
// import product_image from '../../assets/Intersect.jpg'


// export default function Home() {
// return (
// <View>
//     <Text className="text-2xl pt-3 pl-2">Tất cả sản phẩm</Text>
//     <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
//     <View style={styles.bg}>
//         <Image className="pr-3" source={product_image} />
//         <Text className="text-black pl-2  pt-1">Sport Band</Text>
//         <View style={{ flexDirection: 'row' }}>
//             <Text className="text-black pl-2  pt-1">200$</Text>
//             <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
//         </View>
//     </View>

//     <View style={styles.bg}>
//         <Image className="pr-3" source={product_image} />
//         <Text className="text-black pl-2  pt-1">Sport Band</Text>
//         <View style={{ flexDirection: 'row' }}>
//             <Text className="text-black pl-2  pt-1">200$</Text>
//             <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
//         </View>
//     </View>
//     <View style={styles.bg}>
//         <Image className="pr-3" source={product_image} />
//         <Text className="text-black pl-2  pt-1">Sport Band</Text>
//         <View style={{ flexDirection: 'row' }}>
//             <Text className="text-black pl-2  pt-1">200$</Text>
//             <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
//         </View>
//     </View>
//     <View style={styles.bg}>
//         <Image className="pr-3" source={product_image} />
//         <Text className="text-black pl-2  pt-1">Sport Band</Text>
//         <View style={{ flexDirection: 'row' }}>
//             <Text className="text-black pl-2  pt-1">200$</Text>
//             <Text className="text-black pl-2  pt-1">Thêm giỏ hàng</Text>
//         </View>
//     </View>

// </View>
// </View>

// );
// }
// const styles = StyleSheet.create({

// bg:{

// // backgroundColor:"#000000",
// margin:13,
// width:169,
// height:206,
// // borderWidth: 1,
// },

// });
import React, { useEffect, useState } from 'react';
import { Text, View, Image, Button, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Products = () => {
  const [products, setProducts] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Lỗi khi tải dữ liệu:', error);
      }
    };
    fetchData();
  }, []);

  const [hoverStates, setHoverStates] = useState({});

  const handleMouseEnter = (productId) => {
    setHoverStates({
      ...hoverStates,
      [productId]: true,
    });
  };

  const handleMouseLeave = (productId) => {
    setHoverStates({
      ...hoverStates,
      [productId]: false,
    });
  };

  const handleProductPress = (productId) => {
    navigation.navigate('ProductDetail', { productId });
  };

  const handleAddToCart = (product) => {
    console.log(`Đã thêm sản phẩm vào giỏ hàng:`, product);
    navigation.navigate('Cart', { product }); // Truyền thông tin sản phẩm tới màn hình giỏ hàng
  };
  
  
  return (
    <ScrollView>
      <Text style={styles.heading}>SẢN PHẨM</Text>
      {products && (
        <View style={styles.productList}>
          {products.map((item, index) => (
            <TouchableOpacity
              onPress={() => handleProductPress(item.id)}
              style={[styles.productItem, index % 2 !== 0 ? styles.secondItem : null]}
              key={item.id}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <View style={styles.productDetails}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <Text numberOfLines={1} ellipsizeMode="tail" style={styles.productTitle}>
                  {item.title}
                </Text>
                <View style={styles.buttonAndPriceContainer}>
                  <Text style={styles.productPrice}>Giá: ${item.price}</Text>
                  <TouchableOpacity
                    style={[
                      styles.buttonContainer,
                      { backgroundColor: hoverStates[item.id] ? 'red' : 'aquamarine' },
                    ]}
                    onPress={() => handleAddToCart(item)}
                  >
                    <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#f7f7f7',
  },
  productItem: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  buttonAndPriceContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  buttonText: {
    
    textAlign: 'center',
  },
  secondItem: {
    marginLeft: '2%',
  },
  
  heading: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 8, // Thêm padding cho khoảng cách giữa các phần tử bên trong productDetails
  },
  productImage: {
    width: '100%',
    height: '40%',
    aspectRatio: 1,
    resizeMode: 'cover',
    marginBottom: 4, // Điều chỉnh khoảng cách dưới ảnh
  },
  productTitle: {
    fontSize: 17,
    marginBottom: 4, // Điều chỉnh khoảng cách giữa title và giá
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  productPrice: {
    fontSize: 15,
    marginBottom: 4, // Điều chỉnh khoảng cách giữa giá và nút
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    padding: 8, // Thêm padding cho nút
    marginTop: 4, // Điều chỉnh khoảng cách giữa giá và nút
  },
})  

export default Products;