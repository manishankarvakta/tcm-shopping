import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

export default function Profile() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <View>
            <Image
              source={require("../../assets/mansurol.jpeg")}
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                marginTop: 40,
                alignSelf: "center",
              }}
            />
          </View>

          <Text
            style={{
              alignSelf: "center",
              padding: 10,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            Mansurol islam
          </Text>
        </View>

        <View style={{ borderWidth: 0.4, borderTopColor: "#fff" }} />
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              {" "}
              <Icon
                type="font-Awesome"
                name="user"
                size={25}
                color="#C38FEE"
              />{" "}
              Personal Information
            </Text>

            <Icon type="antdesign" name="shoppingcart" size={18} color="red" />
          </View>
        </View>
      </View>

      <View></View>
    </SafeAreaView>
  );
}
