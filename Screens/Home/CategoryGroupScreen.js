import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions, Image, Text, SafeAreaView } from 'react-native';
import Routes from '../../Utility/Routes';
import { useNavigation } from '@react-navigation/native';

const numColumns = 2;

const mcData = [
  { option: "food", label: "Food" },
  { option: "personalCare", label: "Personal Care" },
  { option: "hygiene", label: "Hygiene" },
  { option: "beauty", label: "Beauty & Health" },
  { option: "babyCare", label: "Baby Care" },
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
      <View style={styles.cardTwo}>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.CATEGORY_SCREEN, { group: item.option })} style={styles.CategoryGroupScreenStyle}>
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
    marginVertical: 3,
    marginHorizontal: 3,
    backgroundColor: "#F5F6FB",
    padding: 5,
    borderRadius: 10,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "48.4%",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },
  image: {
    width: 90,
    height: 80,
  },
  imageContainer: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    alignSelf: "flex-end",
    width: "45%",
  },
  CategoryGroupScreenStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  CategoryGroupNameStyle: {
    alignSelf: "center",
    marginLeft: 10,
    width: "55%",
    fontWeight: "700",
    fontSize: 15,
    color: "#5E6D75",
  },
});
