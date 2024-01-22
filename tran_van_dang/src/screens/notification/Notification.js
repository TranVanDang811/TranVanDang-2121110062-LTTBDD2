import React from 'react'
import { Text, View } from 'react-native'

const Notification = () => {
  return (
    <View>
         <View className="flex flex-row items-center p-2 pt-9 bg-gray-400">
 

        <Text className="text-lg text-white ml-32">Thông báo</Text>
      </View>
      <View className="justify-center items-center mt-52">
        <Text className="text-3xl text-red-500">Không có thông báo mới</Text>
    </View>
    </View>
  
 
  )
}

export default Notification