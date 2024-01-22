import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../AuthContext";
import { icons } from "../../../constants";

export default function Profile() {
  const navigation = useNavigation();
  const { loggedInUser, isLoggedIn, logout } = useAuth();
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleLogout = () => {
    // Thực hiện các bước đăng xuất và sau đó cập nhật trạng thái
    logout();
    navigation.navigate("Login");
  };
  const goHome = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <View className="flex flex-row items-center p-2 pt-9 bg-gray-400">
        <TouchableOpacity onPress={goHome}>
          <Image className="w-5 h-5 " source={icons.back} />
        </TouchableOpacity>
        <Text className="text-lg text-white ml-32">Tài khoản</Text>
      </View>
      {isLoggedIn && loggedInUser ? (
        <View>
          <View className="bg-white ">
            <View className=" justify-center items-center bg-white border w-40 rounded-full ml-28 mt-5 ">
              <Image
                className=" w-36 h-36"
                source={{ uri: loggedInUser.image }}
              />
            </View>
          </View>
          <View className="flex flex-row p-2 ">
            <Text className="text-lg font-bold">Họ và Tên:</Text>
            <Text className="text-lg ml-5">
              {` ${loggedInUser.lastName} ${loggedInUser.firstName}`}
            </Text>
          </View>
          <View className="border-t opacity-10" />
          <View className="flex flex-row p-2">
            <Text className="text-lg font-bold">Email:</Text>
            <Text className="text-lg ml-5">{` ${loggedInUser.email}`}</Text>
          </View>
          <View className="border-t opacity-10" />
          <View className="flex flex-row p-2">
            <Text className="text-lg font-bold">Điện thoại:</Text>
            <Text className="text-lg ml-5">{` ${loggedInUser.phone}`}</Text>
          </View>
          <View className="border-t opacity-10" />
          <View className="flex flex-row p-2">
            <Text className="text-lg font-bold">Địa chỉ:</Text>
            <Text className="text-lg ml-5">
              {` ${loggedInUser.address.city}`}
            </Text>
          </View>

          <TouchableOpacity
            className="mt-80 ml-28 border-red-400 rounded-full bg-rose-400 p-3 items-center w-40 px-3 "
            onPress={handleLogout}
          >
            <Text>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="justify-center items-center  border-gray-400  bg-gray-400 p-7">
          <View className="flex flex-row">
            <Image
              className="w-10 h-10 mt-5 mr-10"
              source={icons.profile}
            ></Image>
            <View className="flex flex-row ">
              <TouchableOpacity
                className="mt-5 border-red-400 rounded bg-rose-400 p-3 items-center w-32 "
                onPress={() => handleLogin()}
              >
                <Text>Đăng Nhập</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mt-5 border-red-400 rounded bg-white p-3 items-center w-32 "
                onPress={() => handleLogin()}
              >
                <Text>Đăng Ký</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
