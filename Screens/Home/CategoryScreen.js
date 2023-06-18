import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text, SafeAreaView } from 'react-native';
import Routes from '../../Utility/Routes';
const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

const data = [
  { Id: '1', image: require('../../assets/FlashSales/f10.png'),name: "Popular"},
  { Id: '2', image: require('../../assets/FlashSales/f6.png',),name: "Flash Sales"},
  { Id: '4', image: require('../../assets/FlashSales/f8.png'),name: "Cleaning Supplies"},
  { Id: '5', image: require('../../assets/FlashSales/f5.png'),name: "Personal Care"},
  { Id: '8', image: require('../../assets/FlashSales/1.png'),name: "Home & Kitcen"},
  { Id: '9', image: require('../../assets/FlashSales/5.png'),name: "Stationary & Office"},
  { Id: '10', image: require('../../assets/FlashSales/9.png'),name: "Pet Care"},
  { Id: '13', image: require('../../assets/FlashSales/3.png'),name: "Beauty & MakeUp "},
  { Id: '15', image: require('../../assets/FlashSales/4.png'),name: "Vehicle & Essentials "},
  
];
export default function CategoryScreen({ navigation }) {

    const renderItem = ({ item }) => {
        return (
                 <View style={styles.cardTwo}>
           

           <TouchableOpacity onPress={() => navigation.navigate(Routes.SUB_CATEGORY)} style={{flexDirection:"row",justifyContent:"space-between"}}>
             <Text style={{alignSelf:"center",width:"50%",fontWeight:"700",fontSize:15,color:"#5E6D75"}}>{item.name}</Text>

            <View style={styles.imageContainer}>
           <Image source={item.image} style={styles.image} />
         </View>
       </TouchableOpacity>

         </View>
        );
      };
  return (
<SafeAreaView style={{marginHorizontal:10,marginVertical:10}}>
    <View   style={styles.container}>
 
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item.Id}
    numColumns={numColumns}
  />
</View>
</SafeAreaView>  
)
}

const styles = StyleSheet.create({



    cardTwo: {
      marginVertical: 3,
      marginHorizontal:3,
      backgroundColor: "#F5F6FB",
      padding: 5,
      borderRadius: 10,
      shadowColor: "gray",
      shadowOffset: {
        width: 0,
        height: 2,
      },
    
    
      width: "48.4%",
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
    },

    image: {
        width: 90,
        height: 80,
    
        
      },

      imageContainer: {
        justifyContent: "flex-end",
        alignItems:"flex-end",
      },
  });

  



