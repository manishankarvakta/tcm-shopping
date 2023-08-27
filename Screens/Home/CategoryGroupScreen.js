import React from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Routes from "../../Utility/Routes";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { useEffect } from "react";
const numColumns = 2;

const mcData = [
  {
    option: "food",
    label: "Food",
    image: require("../../assets/CategoryImg/Foods.png"),
    backgroundColor: "#75BEDD",
  },
  {
    option: "personalCare",
    label: "Personal Care",
    image: require("../../assets/CategoryImg/Parsonal-care.png"),
    backgroundColor: "#639AAD",
  },
  {
    option: "hygiene",
    label: "Hygiene",
    backgroundColor: "#6A6091",
    image: require("../../assets/CategoryImg/Hygniene-Product.png"),
  },
  {
    option: "beauty",
    label: "Beauty & Health",
    backgroundColor: "#316359",
    image: require("../../assets/CategoryImg/Foods.png"),
  },
  {
    option: "babyCare",
    label: "Baby Care",
    image: require("../../assets/CategoryImg/Baby-Care.png"),
    backgroundColor: "#639AAD",
  },
  {
    option: "clean",
    label: "Clean & Supplies",
    backgroundColor: "#31577C",
    image: require("../../assets/CategoryImg/Clean-and-supplies.png"),
  },
  {
    option: "home",
    label: "Home & Kitchen",
    backgroundColor: "#73B5EB",
    image: require("../../assets/CategoryImg/Home-and-kitchen.png"),
  },
  {
    option: "stationeries",
    label: "Stationeries",
    backgroundColor: "#071B53",
    image: require("../../assets/CategoryImg/Stationaries.png"),
  },
  {
    option: "toys",
    label: "Toys",
    backgroundColor: "#15385E",
    image: require("../../assets/CategoryImg/Toys.png"),
  },
  {
    option: "lifeStyle",
    label: "Life Style",
    backgroundColor: "#35CABD",
    image: require("../../assets/CategoryImg/lifestyle-products.png"),
  },
];

export default function CategoryGroupScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.cardTwo, { backgroundColor: item.backgroundColor }]}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.CATEGORY_SCREEN, { group: item.option })
          }
          style={styles.CategoryGroupScreenStyle}
        >
          <Text style={styles.CategoryGroupNameStyle}>{item.label}</Text>
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10, marginTop: 10, flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          data={mcData}
          renderItem={renderItem}
          keyExtractor={(item) => item.option}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardTwo: {
    flex: 1,
    marginVertical: 8,
    marginHorizontal: 3,
    backgroundColor: "#F5F6FB",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    marginTop: 5,
    marginRight: 7,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  image: {
    width: 90,
    height: 80,
    borderRadius: 10,
    marginTop: 10,
  },
  imageContainer: {
    alignItems: "flex-end",
    width: "42%",
  },
  CategoryGroupScreenStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CategoryGroupNameStyle: {
    alignSelf: "center",
    marginLeft: 10,
    width: "43%",
    fontWeight: "700",
    fontSize: 15,
    color: "white",
  },
});
