import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Avatar, Button, Icon } from "@rneui/themed";
import { format } from "date-fns";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import ImageCarousel from "../../Components/ImageCarousel";
import Routes from "../../Utility/Routes";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      const userData = await AsyncStorage.getItem("user");
      const location = await AsyncStorage.getItem("location");
      if (location !== null) {
        setLocation(JSON.parse(location));
      } else {
        setLocation(null);
      }
    })();
  }, [navigation]);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const place = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(place[0]);
      await AsyncStorage.setItem("location", JSON.stringify(place[0]));
    })();
  }, []);
  console.log("Location:", location);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const logOut = async () => {
    try {
      await AsyncStorage.getAllKeys();
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("user");
    } catch (err) {
      console.log("logout error", err);
    } finally {
      navigation.replace(Routes.LOGIN);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTitleAlign: "left",
      headerStyle: { backgroundColor: "#ed3833" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "black",
      headerLeft: () => {
        return (
          <View style={styles.headerLeft}>
            <TouchableOpacity>
              <Avatar
                rounded
                source={require("../../assets/logo.png")}
                style={styles.avatar}
              />
            </TouchableOpacity>
            <Icon
              name="marker"
              type="foundation"
              size={35}
              style={{ marginLeft: 20, marginRight: 5, paddingHorizontal: 5 }}
              color="white"
            />
            <View>
              <Text style={{ color: "white", fontWeight: "700", fontSize: 16 }}>
                {location !== null ? location.district : "Sector 7"}
                {/* //{location?.street} */}
              </Text>
              <Text style={{ color: "white", fontWeight: "400", fontSize: 14 }}>
                {location !== null ? location.city : "Dhaka"}
              </Text>
            </View>
          </View>
        );
      },
      headerRight: () => {
        return (
          <View
            style={{
              marginRight: 10,
              flexDirection: "row",
              justifyContent: "flex-end",
              width: 120,
            }}
          >
            <View style={{ alignItems: "center", marginRight: 10 }}>
              <Text
                style={{
                  fontWeight: "900",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                {/* {format(new Date(), "MM-dd-yyyy")} */} 03
              </Text>
              <Text
                style={{
                  fontWeight: "500",
                  color: "#fff",
                  fontSize: 12,
                }}
              >
                Items
              </Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} onPress={() => logOut()}>
              <Icon
                name="shoppingcart"
                type="ant-design"
                size={30}
                color="white"
              />
            </TouchableOpacity>
          </View>
        );
      },
    });
  }, [navigation, location]);

  return (
    <ScrollView style={styles.continer}>
      <StatusBar style="dark" />
      <ImageCarousel />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Top Categories
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.CATEGORY_TAB)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerLeft: {
    flexDirection: "row",
    // marginHorizontal: 5,
    // marginVertical: 5,
    // marginBottom: 5,
  },
  avatar: {
    height: 40,
    width: 40,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 20,
  },
  continer: {
    backgroundColor: "white",
  },
});
