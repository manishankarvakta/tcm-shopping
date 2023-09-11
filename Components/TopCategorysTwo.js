import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import React from "react";
import Routes from "../Utility/Routes";
import { useNavigation } from "@react-navigation/native";

export default function TopCategorysTwo() {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 15,
      }}
    >
      <View style={styles.cardTwoOne}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.POPULAR_Product)}
          style={styles.CategoryGroupScreenStyle}
        >
          <Text style={styles.CategoryGroupNameStyle}>Popular</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/Popular.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.cardTwo}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.FLASHSALE_TAB)}
          style={styles.CategoryGroupScreenStyle}
        >
          <Text style={styles.CategoryGroupNameStyle}>Flash Sale</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/CategoryImg/All-Catagores.png")}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cardTwoOne: {
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#F3F7C2",

    width: "48.4%",
    height: 90,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  cardTwo: {
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#F1D1CF",

    width: "48.4%",
    height: 90,
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  image: {
    width: 80,
    height: 78,
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
