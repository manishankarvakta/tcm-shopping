import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import Routes from '../../Utility/Routes';

const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

const data = [
  { Id: '1', image: require('../../assets/FlashSales/f1.jpg'),name: "Flour"},
  { Id: '2', image: require('../../assets/FlashSales/f2.jpg'),name: "Nuts & Dried"},
  { Id: '3', image: require('../../assets/FlashSales/f3.jpg'),name: "Baking Ingredients"},
  { Id: '4', image: require('../../assets/FlashSales/f4.jpg'),name: "Baking Tools"},
  { Id: '5', image: require('../../assets/FlashSales/f5.jpg'),name: "Baking & Desset..."},


  
];

const SubCategory = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardTwo}>
      <TouchableOpacity onPress={() => navigation.navigate(Routes.T)} style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <Text>{item.name}</Text>
        
      </TouchableOpacity>
      </View>
    );
  };

  return (
  <View style={styles.container}>
    {
      
    }
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

export default SubCategory;