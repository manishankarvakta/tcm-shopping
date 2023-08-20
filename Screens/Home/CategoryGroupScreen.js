import React from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
} from "react-native";
import Routes from "../../Utility/Routes";
import { useNavigation } from "@react-navigation/native";

const numColumns = 2;

const mcData = [
  {
    option: "food",
    label: "Food",
    image: require("../../assets/Foods.png"),
    backgroundColor: "#75BEDD",
  },
  {
    option: "personalCare",
    label: "Personal Care",
    // image: require("../../assets/Combo-01.png"),
    backgroundColor: "#639AAD",
  },
  { option: "hygiene", label: "Hygiene" },
  { option: "beauty", label: "Beauty & Health" },
  {
    option: "babyCare",
    label: "Baby Care",
    image: require("../../assets/Baby-Care.png"),
    backgroundColor: "#639AAD",
  },
  { option: "clean", label: "Clean & Supplies" },
  { option: "home", label: "Home & Kitchen" },
  { option: "stationeries", label: "Stationeries" },
  { option: "toys", label: "Toys" },
  { option: "lifeStyle", label: "Life Style" },
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
    <SafeAreaView style={{ marginHorizontal: 10, marginTop: 10 }}>
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
    marginVertical: 3,
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
