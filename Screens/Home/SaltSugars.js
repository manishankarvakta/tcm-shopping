import React, { useState } from 'react';
import { Icon } from '@rneui/base';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text } from 'react-native';
import Routes from '../../Utility/Routes';
const numColumns = 3 ;
const itemWidth = Dimensions.get('window').width / numColumns;

    const data = [
      { id: '1', imageUrl:require("../../assets/FlashSales/f3.jpg") , title: 'Item 1' ,name:"Mango",price:"320TK",weight:"4kg" },
      { id: '2', imageUrl:require("../../assets/FlashSales/f6.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '3', imageUrl: require("../../assets/FlashSales/f7.jpg"), title: 'Item 3',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '4', imageUrl: require("../../assets/FlashSales/f4.jpg"), title: 'Item 4' ,name:"Water",price:"620TK",weight:"2kg"},
      { id: '5', imageUrl:require("../../assets/FlashSales/f5.jpg"), title: 'Item 5',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '7', imageUrl: require("../../assets/FlashSales/f2.jpg"), title: 'Item 6',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '8', imageUrl:require("../../assets/FlashSales/f3.jpg") , title: 'Item 1' ,name:"Mango",price:"320TK",weight:"4kg" },
      { id: '9', imageUrl:require("../../assets/FlashSales/f8.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '10', imageUrl: require("../../assets/FlashSales/f9.jpg"), title: 'Item 3',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '11', imageUrl: require("../../assets/FlashSales/f10.jpg"), title: 'Item 4' ,name:"Water",price:"620TK",weight:"2kg"},
      { id: '12', imageUrl:require("../../assets/FlashSales/f2.jpg"), title: 'Item 5',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '13', imageUrl: require("../../assets/FlashSales/f8.jpg"), title: 'Item 6',name:"Orange",price:"300TK",weight:"1kg" },
    ];

const SaltSugars = ({navigation}) => {
  const renderItem = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt)} style={styles.card} >
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
<View style={styles.cartStyle}>
                <Text style={styles.quantity}>{item.weight}</Text>
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
    cartStyle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    backgroundColor:"#F5F6FB",
    padding:7,
    borderRadius:5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
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

export default SaltSugars;
