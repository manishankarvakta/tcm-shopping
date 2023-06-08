import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import Routes from '../../Utility/Routes';

const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

const data = [
  { Id: '1', image: require('../../assets/FlashSales/f1.jpg'),name: "Fruits & Vegetables"},
  { Id: '2', image: require('../../assets/PopularProduct/p3.jpg',),name: "Meat & Fish"},
  { Id: '3', image: require('../../assets/PopularProduct/p5.jpg'),name: "Cooking"},
  { Id: '4', image: require('../../assets/PopularProduct/p2.jpg'),name: "Sauces & Pickles"},
  { Id: '5', image: require('../../assets/FlashSales/f4.jpg'),name: "Dairy & Eggs"},
  { Id: '6', image: require('../../assets/FlashSales/f6.jpg'),name: "Breakfast"},
  { Id: '7', image: require('../../assets/PopularProduct/p8.jpg'),name: "Candy & Chocolate "},
  { Id: '8', image: require('../../assets/PopularProduct/p7.jpg'),name: "Snacks"},
  { Id: '9', image: require('../../assets/PopularProduct/p10.jpg'),name: "Beverages"},
  { Id: '10', image: require('../../assets/PopularProduct/p2.jpg'),name: "Baking"},
  { Id: '11', image: require('../../assets/PopularProduct/p1.jpg'),name: "Frozen & Canned"},
  { Id: '12', image: require('../../assets/FlashSales/f3.jpg'),name: "Diabetic Food "},

  
];

const CategoryScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardTwo}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.SUB_CATEGORY)} style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.name}</Text>
        
      </TouchableOpacity>
      </View>
    );
  };

  return (
  <View style={styles.container}>
  
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      numColumns={numColumns}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container:{
    marginHorizontal:10,
    marginVertical:10
    },
  item: {
    alignItems: 'center',
    flex: 1,
    margin: 5,
    width: itemWidth,
  },
  image:{
     marginBottom:10,
     width:150,
     height:100,
     textAlign:"center",
     borderRadius:10,
     maxWidth: "100%",
     maxHeight: "100%",
  },
  cardTwo: {
    margin:2,
    backgroundColor:"#fff",
    padding:2,
    borderRadius:5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    justifyContent: "center",
    alignItems: "center",
    width:"50%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
  },
});

export default CategoryScreen;


