import {
  Image,
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
import TopCategorys from "../../Components/TopCategorys";
import ProductCart from "../../Components/ProductCart";
import FlashSale from "../../Components/FlashSale";
import Freshvegetable from "../../Components/Freshvegetable";
import Biscuits from "../../Components/Biscuits";
import SliderTwo from "../../Components/SliderTwo";
import FreshFruits from "../../Components/FreshFruits.";
import Noodles from "../../Components/Oil";
import SkinCare from "../../Components/SkinCare";
import OffersSlider from "../../Components/OffersSlider";
import Drinks from "../../Components/Drinks";
import Oil from "../../Components/Oil";
import { useDispatch, useSelector } from "react-redux";
import { customerInfo } from "../Redux/CartSlice";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [cartItemCount, setCartItemCount] = useState("0");

  const dispatch = useDispatch();

  const getUser = async () => {
    // console.log("getUser");
    const store = await AsyncStorage.getAllKeys();
    const userData = await AsyncStorage.getItem("user");
    const user = JSON.parse(userData);
    dispatch(customerInfo(user.id));
    console.log("Names", userData, store);
  };

  getUser();
  const cartItem = useSelector((state) => state.cartReducer.products);

  useEffect(() => {
    setCartItemCount(cartItem.length);
  }, [cartItem]);

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
  //console.log("Location:", location);

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
      //console.log("logout error", err);
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
              <Icon
                onPress={() => navigation.openDrawer()}
                name="bars"
                size={37}
                color="white"
                type="ant-design"
                paddingRight={10}
              />
            </TouchableOpacity>

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
            <TouchableOpacity
              onPress={() => navigation.navigate(Routes.CART_SCREEN_TAB)}
              style={{ alignItems: "center", marginRight: 10 }}
            >
              <Text
                style={{
                  fontWeight: "900",
                  color: "#fff",
                  fontSize: 16,
                }}
              >
                {cartItemCount}
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
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => navigation.navigate(Routes.CART_SCREEN_TAB)}
            >
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
  }, [navigation, location, cartItemCount]);

  return (
    <ScrollView style={styles.continer}>
      <StatusBar style="dark" />
      <View>
        <ImageCarousel />
      </View>
      <View style={styles.TopCategorysTextStyle}>
        <Text style={styles.TitleNameStyle}>Top Categories</Text>
        <TouchableOpacity
          style={{ flexDirection: "row" }}
          onPress={() => navigation.navigate(Routes.CATEGORY_GROUP_TAB)}
        >
          <Text style={styles.ViewMoreStyle}>View More</Text>
          <Icon name="arrowright" type="ant-design" size={20} color="red" />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.row}>
          <TopCategorys />
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.CATEGORY_GROUP_TAB)}
        >
          <Text style={styles.AllCategoryTextstyle}>All Categories</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Popular</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.POPULAR_Product)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ProductCart />
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Flash Sales</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.FLASHSALE_TAB)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <FlashSale />
          </View>
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Fresh Vegetables</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.FRESH_VEGETABLES)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <Freshvegetable />
          </View>
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Biscuits</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.All_BISCUITS)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <Biscuits />
          </View>
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Drinks</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.SOFT_DRINKS_TAB)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <Drinks />
          </View>
        </View>

        <View>
          <SliderTwo />
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Fresh Fruits</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.FRESH_FOOD_TAB)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <FreshFruits />
          </View>
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Oil</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.OIL_TAB)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <Oil />
          </View>
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Skin Care</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.SKIN_CARE_TAB)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <SkinCare />
          </View>
        </View>

        <View>
          <View style={styles.AllProductSectionStyle}>
            <Text style={styles.TitleNameStyle}>Offers</Text>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate(Routes.OFFER_PRODUCTS_TAB)}
            >
              <Text style={styles.ViewMoreStyle}>View More</Text>
              <Icon name="arrowright" type="ant-design" size={20} color="red" />
            </TouchableOpacity>
          </View>

          <View>
            <OffersSlider />
          </View>
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
    marginLeft: 10,
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

  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  cardImgStyle: {
    width: 170,
    height: 90,
    borderRadius: 15,
  },

  TopCategorysTextStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 10,
  },

  TitleNameStyle: {
    fontSize: 16,
    fontWeight: "600",
  },

  AllCategoryTextstyle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    color: "red",
  },

  AllProductSectionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginTop: 20,
  },

  ViewMoreStyle: {
    marginRight: 5,
    color: "red",
  },
});
