import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
  } from "react-native";
  import { Icon } from '@rneui/base';

  import React from "react";
  // import { Image } from "@rneui/themed";
  
  const Oil = () => {
    const data = [
      { id: '1', imageUrl:require("../assets/FlashSales/f3.jpg") , title: 'Item 1' ,name:"Mango",price:"320TK",weight:"4kg" },
      { id: '2', imageUrl:require("../assets/Freshfood/3.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '3', imageUrl: require("../assets/PopularProduct/p3.jpg"), title: 'Item 1',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '4', imageUrl: require("../assets/FlashSales/f6.jpg"), title: 'Item 2' ,name:"Watermelon",price:"620TK",weight:"2kg"},
      { id: '5', imageUrl:require("../assets/Freshfood/7.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '6', imageUrl: require("../assets/PopularProduct/p7.jpg"), title: 'Item 1',name:"Orange",price:"300TK",weight:"1kg" },
    
    ];
  
    return (
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
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
        )}
      />
    );
  };
  
  export default Oil;
  
  const styles = StyleSheet.create({
    card: {
      flexDirection: "column",
      margin: 5,
      backgroundColor:"#F5F6FB",
      padding:10,
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
      width: 95,
      height: 90,
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
    cartStyle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });