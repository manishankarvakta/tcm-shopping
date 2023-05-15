import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, SafeAreaView } from 'react-native';

const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

const data = [
  { key: '1', image: require('../../assets/image1.jpg')},
  { key: '2', image: require('../../assets/img66.jpg')},
  { key: '3', image: require('../../assets/img66.jpg')},
  { key: '4', image: require('../../assets/image1.jpg')},
  { key: '5', image: require('../../assets/image1.jpg')},
  { key: '6', image: require('../../assets/img66.jpg')},
  { key: '7', image: require('../../assets/img66.jpg')},
  { key: '8', image: require('../../assets/image1.jpg')},
  { key: '9', image: require('../../assets/image1.jpg')},
  { key: '10', image: require('../../assets/img66.jpg')},
  { key: '11', image: require('../../assets/img66.jpg')},
  { key: '12', image: require('../../assets/image1.jpg')},
];

const CategoryGroupScreen = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Image source={item.image} style={styles.image} />
        
      </TouchableOpacity>
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
     width:160,
     height:100,
     textAlign:"center",
     borderRadius:10,
  },
});

export default CategoryGroupScreen;
