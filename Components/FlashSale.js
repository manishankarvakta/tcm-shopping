import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
  } from "react-native";
  import Icon from "react-native-vector-icons/FontAwesome";
  import React from "react";
  import { useNavigation } from '@react-navigation/native';
  import Routes from "../Utility/Routes";
  const FlashSale = () => {
    const navigation = useNavigation()
    const data = [
      { id: '1', imageUrl:require("../assets/FlashSales/f1.jpg") , title: 'Item 1' ,name:"Mango",price:"320TK",weight:"4kg" },
      { id: '2', imageUrl:require("../assets/Freshfood/1.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '3', imageUrl: require("../assets/PopularProduct/p1.jpg"), title: 'Item 1',name:"Orange",price:"300TK",weight:"1kg" },
      { id: '4', imageUrl: require("../assets/FlashSales/f6.jpg"), title: 'Item 2' ,name:"Watermelon",price:"620TK",weight:"2kg"},
      { id: '5', imageUrl:require("../assets/Freshfood/6.jpg"), title: 'Item 2',name:"Apple",price:"320TK",weight:"2kg" },
      { id: '6', imageUrl: require("../assets/PopularProduct/p6.jpg"), title: 'Item 1',name:"Orange",price:"300TK",weight:"1kg" },
    
    ];
  
    return (
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt)} style={styles.card}>
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
               <Icon name="shopping-cart" size={24} color="gray" />
               </TouchableOpacity>
             </View>
        </View>
            {/* <Text>{`../assets/${item.key}.jpg`}</Text> */}
          </TouchableOpacity>
        )}
      />
    );
  };
  
  export default FlashSale;
  
  const styles = StyleSheet.create({
    card: {
      flexDirection: "column",
      margin: 5,
      backgroundColor:"#fff",
      padding:10,
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
    cartStyle:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    quantity: {
      fontSize: 16,
      marginTop: 5,
    },
  });