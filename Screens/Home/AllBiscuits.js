
import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import Routes from '../../Utility/Routes';
const numColumns = 3 ;
const itemWidth = Dimensions.get('window').width / numColumns;

    const data = [
      { id: '1', imageUrl:require("../../assets/PopularProduct/p10.jpg") , title: 'Item 1' ,name:"Mango",price:"320TK",weight:"4kg" },
      { id: '2', imageUrl:require("../../assets/FlashSales/f2.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '3', imageUrl: require("../../assets/PopularProduct/p1.jpg"), title: 'Item 3',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '4', imageUrl: require("../../assets/FlashSales/f4.jpg"), title: 'Item 4' ,name:"Water",price:"620TK",weight:"2kg"},
      { id: '5', imageUrl:require("../../assets/PopularProduct/p5.jpg"), title: 'Item 5',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '7', imageUrl: require("../../assets/FlashSales/f7.jpg"), title: 'Item 6',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '8', imageUrl:require("../../assets/PopularProduct/p9.jpg") , title: 'Item 1' ,name:"Mango",price:"320TK",weight:"4kg" },
      { id: '9', imageUrl:require("../../assets/FlashSales/f8.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '10', imageUrl: require("../../assets/PopularProduct/p7.jpg"), title: 'Item 3',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '11', imageUrl: require("../../assets/FlashSales/f1.jpg"), title: 'Item 4' ,name:"Water",price:"620TK",weight:"2kg"},
      { id: '12', imageUrl:require("../../assets/PopularProduct/p2.jpg"), title: 'Item 5',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '13', imageUrl: require("../../assets/FlashSales/f3.jpg"), title: 'Item 6',name:"Orange",price:"300TK",weight:"1kg" },
    ];

const AllBiscuits = () => {
  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity style={styles.card} >
        <Image
    onPress={() => alert(item.imageUrl)}
    source={item.imageUrl}
    style={{
      width: 95,
      height: 90,
      
      marginVertical: 5,
      borderRadius: 10,
    }}
    
  />
   <View style={styles.details}>
<Text style={styles.name}>{item.name}</Text>
<Text style={styles.price}>Price: {item.price}</Text>
<Text style={styles.quantity}>{item.weight}</Text>
</View>
  {/* <Text>{`../assets/${item.key}.jpg`}</Text> */}
</TouchableOpacity>
    );
  };

  return (
  <View style={styles.container}>
   
      <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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

  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor:"#fff",
    padding:7,
    borderRadius:5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 85,
    height: 80,
    borderRadius:10,
    resizeMode: 'cover',
  },
  details: {
    paddingTop: 10,
    
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  quantity: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default AllBiscuits;
