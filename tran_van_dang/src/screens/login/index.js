import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { icons } from "../../../constants";
import {
  isValidEmail,
  isValidPassword,
  isValidUsername,
} from "../../validations/Validations.js";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../AuthContext.js";
export default function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth();
  const { fetchUserProfile } = useAuth();
  const [isLoggedIn, setLoggedIn] = useState(false);
  // const[errorEmail,setErrorEmail] = useState('')
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  // const[email,setEmail] = useState('')
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const isValidationOk = () => password.length>0&&username.length>0
  // &&isValidPassword(password)==true&&isValidUsername(username)==true

  const handleLogin = async () => {
    // try {
    //   // Thực hiện cuộc gọi API với tên người dùng và mật khẩu
    //   const response = await fetch('https://dummyjson.com/auth/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       username,
    //       password,
    //     }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Đăng nhập không thành công');
    //   }

    //   // Xử lý dữ liệu đăng nhập thành công
    //   const data = await response.json();
    //   Alert.alert('Đăng nhập thành công', `Token: ${data.token}`);
    //   login();
    //   navigation.navigate('Profile');
    // } catch (error) {
    //   console.error(error);
    //   Alert.alert('Đăng nhập không thành công', 'Vui lòng thử lại');
    // }
    try {
      // Thực hiện cuộc gọi API với tên người dùng và mật khẩu
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Đăng nhập không thành công");
      }

      // Xử lý dữ liệu đăng nhập thành công
      const data = await response.json();
      Alert.alert("Đăng nhập thành công");
      // , `Token: ${data.token}`
      login();

      // Fetch user profile data
      const userProfileResponse = await fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${data.token}`, // Add the token to the headers
        },
      });

      if (!userProfileResponse.ok) {
        throw new Error("Lấy thông tin người dùng không thành công");
      }

      const userProfileData = await userProfileResponse.json();
      fetchUserProfile(userProfileData); // Assuming fetchUserProfile is a function that updates user profile in the context

      navigation.navigate("Profile");
    } catch (error) {
      console.error(error);
      Alert.alert("Đăng nhập không thành công", "Vui lòng thử lại");
    }
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

        <Text className="text-lg text-white ml-32">Đăng nhập</Text>
      </View>
      {/* <View>
        <StatusBar backgroundColor={'red'}></StatusBar>
    </View> */}
      <View className="justify-center items-center mt-48">
        <Image className="w-20 h-20" source={icons.onlinetest}></Image>
        <Text className="font-bold text-2xl">ĐĂNG NHẬP</Text>
      </View>
      <View className="px-8 mt-5 ">
        <View>
          <Text className="font-medium">Tên đăng nhập</Text>
          {/* <TextInput className="border p-1 mt-1 rounded"placeholder='Tên đăng nhập..'
             value={username}
                onChangeText={(text)=>{
                    if(isValidEmail(text)==false){
                        setErrorEmail('Email sai')
                    }else{
                        setErrorEmail('')
                    }
                
                    setEmail(text)
                
                }}
                ></TextInput>
                <Text className="text-red-600">{errorEmail}</Text> */}
          <TextInput
            className="border p-1 mt-1 rounded"
            placeholder="Tên đăng nhập.."
            value={username}
            // onChangeText={(text)=>{
            //     if(isValidUsername(text)==false){
            //         setErrorUsername('Email sai')
            //     }else{
            //         setErrorUsername('')
            //     }

            //     setUsername(text)

            // }}
            onChangeText={(text) => setUsername(text)}
          ></TextInput>
          <Text className="text-red-600">{errorUsername}</Text>
        </View>
        <View>
          <Text className="font-medium">Mật khẩu</Text>
          <TextInput
            className="border p-1 mt-1 rounded"
            placeholder="Mật khẩu.."
            secureTextEntry={true}
            value={password}
            // onChangeText={(text)=>{
            //     if(isValidPassword(text)==false){
            //         setErrorPassword('Password sai itss nhata 3 ky tu')
            //     }else{
            //         setErrorPassword('')
            //     }
            //     setPassword(text)
            // }}
            onChangeText={(text) => setPassword(text)}
          ></TextInput>
          <Text className="text-red-600">{errorPassword}</Text>
          <Text className="text-center mt-2 ml-48 ">Quên mật khẩu?</Text>
        </View>
        <View className="flex flex-row justify-center">
          <TouchableOpacity
            className="mt-2 border-red-400 rounded-full bg-rose-400 p-3 items-center w-40 px-3 "
            // disabled={isValidationOk()==false}
            // onPress={()=>{
            //     alert(`Email=${username} Password=${password}`)
            // }}
            // style={{
            //     opacity:isValidationOk()==true?1:0.5
            // }}
            onPress={handleLogin}
          >
            <Text className="text-white">Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              alert("Đăng ký tài khoản");
            }}
          >
            <Text className="text-center mt-2">Đăng ký tài khoản</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
