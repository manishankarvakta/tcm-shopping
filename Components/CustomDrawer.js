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

  const dispatch = useDispatch();

  const getPoint = useSelector((state) => state.cartReducer);
  //console.log("getPoint:", getPoint);
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
            @UserName
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
              {/* {getPoint.point.new} */} 1057
            </Text>
          </Text>

          {/* Add the coin icon */}
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
