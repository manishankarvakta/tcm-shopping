import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import { Icon } from '@rneui/base';
import Routes from '../../Utility/Routes';
import { useGetProductCategoryIdQuery, useGetSubCategoryQuery } from '../Redux/Api/ProductsApi';
import { useEffect } from 'react';
const numColumns = 2 ;




const ProductsCategory = ({ navigation, route }) => {
    const { product } = route.params
   
    const { data, isError, refetch } = useGetProductCategoryIdQuery(product)

    useEffect(() => {
        refetch()
    }, [product])
    

    const truncateName = (name) => {
        const maxLength = 23; // Define the maximum length for the name
        if (name.length > maxLength) {
          return name.substring(0, maxLength - 3) + "..."; // Truncate and add "..." at the end
        }
        return name;
      };
    
  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt , {_id: item._id})} style={styles.card} >
        <Image
    onPress={() => alert(item.imageUrl)}
    source={item.imageUrl}
    style={styles.FlashSaleImg}
    
  />
   <View style={styles.details}>
<Text style={styles.name}>{truncateName(item.name)}</Text>

         <View style={styles.cartStyle}>
                    <Text style={styles.price}>৳{item.priceList[0].mrp}</Text>
               <TouchableOpacity>
               <Icon name="shopping-basket-add" size={21} paddingTop={5} color="#2EB5AC" type="fontisto" />
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
      data={data}
      renderItem={renderItem}
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

export default ProductsCategory;
