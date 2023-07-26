import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Routes from "../Utility/Routes";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#ffff" }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.PRFILE_STACK)}
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
              padding: 10,
              marginBottom: 22,
              alignSelf: "center",
              fontWeight: "600",
              fontSize: 20,
            }}
          >
            Mansurol Islam
          </Text>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
}
