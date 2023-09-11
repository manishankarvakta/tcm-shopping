import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Routes from "../Utility/Routes";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { selcetProduct } from "../Screens/Redux/CartSlice";
import { useEffect } from "react";
import { useCustomerQuery } from "../Screens/Redux/Api/CustomerApi";
export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const [point, setPoint] = useState();
  const [userInfo, setUserInfo] = useState();

  const { data, isSuccess, refetch } = useCustomerQuery(userInfo);
  //console.log("datadata", data);
  const getUser = async () => {
    const store = await AsyncStorage.getAllKeys();
    const userData = await AsyncStorage.getItem("user");
    const user = JSON.parse(userData);
    setUserInfo(user.id);
  };
  getUser();

  useEffect(() => {
    refetch();
  }, [data, isSuccess]);
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#ffff" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.PRFILE_STACK_DRAWER)}
        >
          <Image
            source={require("../assets/user.png")}
            style={{
              width: 60,
              height: 60,
              borderRadius: 40,
              marginTop: 40,
              alignSelf: "center",
            }}
          />
          <Text
            style={{
              marginBottom: 5,
              alignSelf: "center",
              fontWeight: "600",
              fontSize: 16,
            }}
          >
            {data?.name}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              flexDirection: "row",
            }}
          >
            {" "}
            <Icon
              name="coins"
              size={18}
              color="tomato"
              type="font-awesome-5"
            />{" "}
            <Text style={{ fontWeight: "500", fontSize: 15 }}>
              {data?.point}
            </Text>
          </Text>

          {/* Add the coin icon */}
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
