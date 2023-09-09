import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";

import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function Profile({ navigation }) {
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
  const logOut = async () => {
    //console.log("logout");
    await AsyncStorage.setItem("token", "");
    await AsyncStorage.setItem("user", "");

    const name = await AsyncStorage.getItem("user");
    navigation.replace(Routes.LOGIN);

    //console.log(name);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Image
              source={require("../../assets/user.png")}
              style={{
                width: 90,
                height: 90,
                borderRadius: 50,
                marginTop: 40,
                alignSelf: "center",
              }}
            />
            <Text
              style={{
                alignSelf: "center",
                padding: 10,
                fontSize: 18,
                fontWeight: "600",
              }}
            >
              {username}
            </Text>
          </View>

          <View
            style={{
              borderWidth: 0.4,
              borderTopColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 5,
            }}
          />

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.PERSONAL_INFO)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              {" "}
              <Icon
                type="font-awesome"
                name="user-circle-o"
                size={20}
                color="#C38FEE"
              />{" "}
              Personal Information
            </Text>

            <Icon
              type="font-awesome"
              name="angle-right"
              size={28}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.MANAGE_ADDRESS)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "500" }}>
              {" "}
              <Icon
                type="impleLineIcons"
                name="home"
                size={24}
                color="#C38FEE"
              />{" "}
              Manage Address
            </Text>

            <Icon
              type="font-awesome"
              name="angle-right"
              size={28}
              color="black"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.SETTINGS)}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 17,
                fontWeight: "500",
                flexDirection: "row",
              }}
            >
              <Text>
                {" "}
                <Icon
                  type="feather"
                  name="settings"
                  size={20}
                  color="#C38FEE"
                />{" "}
              </Text>
              Settings
            </Text>

            <Icon
              type="font-awesome"
              name="angle-right"
              size={28}
              paddingTop={5}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View>
        <View>
          <TouchableOpacity style={{ flexDirection: "row" }} onPress={logOut}>
            <Text>
              {" "}
              <Icon
                type="simpleLineIcons"
                name="logout"
                size={28}
                paddingTop={5}
                color="#C38FEE"
              />{" "}
            </Text>
            <Text style={{ alignSelf: "center" }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
