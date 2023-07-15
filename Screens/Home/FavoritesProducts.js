import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import { Icon } from '@rneui/base';
import Routes from '../../Utility/Routes';
import {useSelector } from 'react-redux';
import { PHOTO_URL } from '../../Utility/BaseUrl';
const numColumns = 2 ;





const FavoritesProducts = ({ navigation }) => {
  const FavoriteItem = useSelector((state) => state.WishReducer);
  
  
  const renderItem = ({ item }) => {
    const photos = `${PHOTO_URL}${item.photo}`;
    return (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt, { _id: item.id })} style={styles.card} >
        <Image
    source={{ uri: photos }}
    style={styles.FlashSaleImg}
    
  />
   <View style={styles.details}>
<Text style={styles.name}>{item.name}</Text>
          <View style={styles.cartStyle}>
          <Text style={styles.price}>৳ {item.mrp} </Text>

                <Text style={styles.qty}>2kg</Text>
               <TouchableOpacity>
               <Icon name="shopping-basket-add" size={21} color="#2EB5AC" type="fontisto" />
               </TouchableOpacity>
             </View> 
</View>
  {/* <Text>{`../assets/${item.key}.jpg`}</Text> */}
</TouchableOpacity>
    );
  };

  return (
  <View style={styles.container}>
   
      <FlatList
        data={FavoriteItem.FavoritesProducts}
        renderItem={renderItem}
        //keyExtractor={(item) => item._id}

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
    
  },
  cartStyle:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image:{
    marginBottom:10,
    width:260,
    height:100,
    textAlign:"center",
    borderRadius:10,
 },

  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor:"#F5F6FB",
    padding:7,
    borderRadius:5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width:"47%",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
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

  FlashSaleImg:{
    width: 115,
    height: 100,
    textAlign:"center",
    alignItems:"center",
    alignSelf:"center",
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default FavoritesProducts;
