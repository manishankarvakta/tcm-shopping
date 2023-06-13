import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import Routes from '../../Utility/Routes';

const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

const data = [
  { Id: '1', image: require('../../assets/FlashSales/f1.jpg'),name: "Popular"},
  { Id: '2', image: require('../../assets/PopularProduct/p3.jpg',),name: "Flash Sales"},
  { Id: '3', image: require('../../assets/PopularProduct/p5.jpg'),name: "Food"},
  { Id: '4', image: require('../../assets/PopularProduct/p2.jpg'),name: "Cleaning Supplies"},
  { Id: '5', image: require('../../assets/FlashSales/f4.jpg'),name: "Personal Care"},
  { Id: '6', image: require('../../assets/FlashSales/f6.jpg'),name: "Health & Wellness"},
  { Id: '7', image: require('../../assets/PopularProduct/p8.jpg'),name: "Baby Care "},
  { Id: '8', image: require('../../assets/PopularProduct/p7.jpg'),name: "Home & Kitcen"},
  { Id: '9', image: require('../../assets/PopularProduct/p10.jpg'),name: "Stationary & Office"},
  { Id: '10', image: require('../../assets/PopularProduct/p2.jpg'),name: "Pet Care"},
  { Id: '11', image: require('../../assets/PopularProduct/p1.jpg'),name: "toys & Sports"},
  { Id: '13', image: require('../../assets/FlashSales/f3.jpg'),name: "Beauty & MakeUp "},
  { Id: '14', image: require('../../assets/FlashSales/f5.jpg'),name: "Fashion & LifeStyle "},
  { Id: '15', image: require('../../assets/FlashSales/f6.jpg'),name: "Vehicle & Essentials "},
  
];

const CategoryGroupScreen = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardTwo}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.CATEGORY_SCREEN)} style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.name}</Text>
        
      </TouchableOpacity>
      </View>
    );
  };

  return (
  <View   style={styles.container}>
 
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.Id}
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

export default CategoryGroupScreen;
