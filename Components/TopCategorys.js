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
import { useNavigation } from "@react-navigation/native";
import Routes from "../Utility/Routes";

const numColumns = 2;
const mcData = [
  {
    option: "food",
    label: "Food",
    image: require("../assets/Foods.png"),
    backgroundColor: "#A8D1DF",
  },

  {
    option: "babyCare",
    label: "Baby Care",
    backgroundColor: "#C5DDF1",
    image: require("../assets/Baby-Care.png"),
  },
];

export default function TopCategorys() {
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
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        marginBottom: 10,
        marginTop: 5,
      }}
    >
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
    backgroundColor: "#F5F6FB",
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginHorizontal: 5,
    backgroundColor: "#323D90",

    width: "47.4%",
    height: 92,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    marginVertical: 10,
  },

  image: {
    width: 85,
    height: 80,
    borderRadius: 10,
    marginTop: 12,
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
    color: "black",
  },
});
