import React, { useState } from "react";
import { TextInput, StyleSheet, View, FlatList, Text, TouchableOpacity, Image, SafeAreaView } from "react-native";
import {icons} from '../../constants'
export default function Header({ onSearchTextChange  }) {

  return (
 
    <SafeAreaView className="flex flex-row items-center  p-2 pt-9 bg-slate-200" >
      <Image className="w-7 h-7"source={icons.iconmenu}>
      </Image>
      <Image style={{
        position: 'absolute',
        top:48,
        left:60,
      }}
      className="w-4 h-4"source={icons.search}></Image>  
      <TextInput
        className="border px-32 py-1 mx-4 pl-9 rounded-full border-gray-400 "
        placeholder="Tìm kiếm sản phẩm"
   
        onChangeText={(text) => {
       
          onSearchTextChange(text);
        }}
      />
        <Image className="w-7 h-7"source={icons.camera}>
      </Image>

    </SafeAreaView>
  );
}


