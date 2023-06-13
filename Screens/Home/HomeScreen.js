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
import TopCategorys from "../../Components/TopCategorys"
import ProductCard from "../../Components/ProductCard";
import FlashSale from "../../Components/FlashSale";
import Freshvegetable from "../../Components/Freshvegetable";
import Biscuits from "../../Components/Biscuits";
import SaltSugar from "../../Components/SaltSugar";
import SliderTwo from "../../Components/SliderTwo"
import FreshFruits from "../../Components/FreshFruits.";
import Noodles from "../../Components/Noodles";
import Oil from "../../Components/Oil"
import OffersSlider from "../../Components/OffersSlider";
import { useNavigation } from "@react-navigation/native";



const HomeScreen = () => {
  const navigation = useNavigation()
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
            <Icon onPress={() => navigation.openDrawer()} name="bars" size={37} color="white" type="ant-design" paddingRight={10}/>
         </TouchableOpacity>
    
            <TouchableOpacity
          
            >
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
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(Routes.CART_SCREEN)}>
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
            onPress={() => navigation.navigate(Routes.CATEGORY_GROUP_TAB)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>
        <View>
        <View style={styles.row}>
        <TopCategorys/>
    </View>
   
        </View>

        <View>
              <TouchableOpacity   onPress={() => navigation.navigate(Routes.CATEGORY_GROUP_TAB)}>
                 <Text style={{textAlign:"center",fontSize: 20,fontWeight:"700",color:"red" }}>All Categories</Text>
                 </TouchableOpacity>
           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Popular
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.POPULAR_Product)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>
           </View>
           <View>
           <ProductCard/>
           </View>

           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Flash Sales
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.FLASHSLE)}
           
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <FlashSale/>
        </View>
           </View>

           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Fresh Vegetables
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.FRESH_VEGETABLES)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <Freshvegetable/>
        </View>
           </View>

           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Biscuits
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.All_BISCUITS)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <Biscuits/>
        </View>
           </View>

           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Salt & Sugar
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.SALT_SUGER)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <SaltSugar/>
        </View>
           </View>

           <View>
            <SliderTwo/>
           </View>

           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Fresh Fruits
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.FRESH_FOOD)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <FreshFruits/>
        </View>
           </View>


           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Noodles
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.NOODLES)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <Noodles/>
        </View>
           </View>

           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Oil
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.ALL_OIL)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <Oil/>
        </View>
           </View>


           <View>
           <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Offers
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={() => navigation.navigate(Routes.OFFER_PRODUCTS)}
          >
            <Text style={{ marginRight: 5, color: "red" }}>View More</Text>
            <Icon name="arrowright" type="ant-design" size={20} color="red" />
          </TouchableOpacity>
        </View>

        <View>
          <OffersSlider/>
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding:10,
  },
  cardImgStyle:{
    width:170,
    height:90,
    borderRadius:15
  }

});
