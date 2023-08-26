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
export default function CustomDrawer(props) {
  const navigation = useNavigation();
  const [username, setUsername] = useState();
  const getUser = async () => {
    // console.log("getUser");
    const store = await AsyncStorage.getAllKeys();
    const userData = await AsyncStorage.getItem("user");
    const user = JSON.parse(userData);
    setUsername(user.name);
    //console.log(user);
  };
  getUser();
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
            source={require("../assets/mansurol.jpeg")}
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
              padding: 5,
              marginBottom: 10,
              alignSelf: "center",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            {username}
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
              size={20}
              color="tomato"
              type="font-awesome-5"
            />{" "}
            <Text style={{ fontWeight: "600", fontSize: 16 }}>520</Text>
          </Text>

          {/* Add the coin icon */}
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
