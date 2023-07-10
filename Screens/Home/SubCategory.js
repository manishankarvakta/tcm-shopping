import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text, SafeAreaView } from 'react-native';
import Routes from '../../Utility/Routes';
import { useGetSubCategoryQuery } from '../Redux/Api/ProductsApi';
import { useEffect } from 'react';
const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

export default function SubCategory({ navigation, route }) {
  
  const { mc } = route.params

  const { data, isError, refetch } = useGetSubCategoryQuery(mc)
  
  useEffect(() => {
    refetch()
  },[mc])

  const renderItem = ({ item }) => {
 //console.log("item : ",item)
      
        return (
                 <View style={styles.cardTwo}>
           

           <TouchableOpacity onPress={() => navigation.navigate(Routes.PRODUCTS_CATEGORY , {product:item._id})} style={styles.SubCategoryCardStyle}>
             <Text style={styles.SubCategoryTextStyle}>{item.name}</Text>

            <View style={styles.imageContainer}>
           <Image source={item.image} style={styles.image} />
         </View>
       </TouchableOpacity>

         </View>
        );
      };
  return (
<SafeAreaView style={{marginHorizontal:10,marginTop:10}}>
    <View   style={styles.container}>
 
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item) => item._id}
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
        width:"45%",
      },

      SubCategoryTextStyle:{
        alignSelf:"center",
        width:"50%",
        marginLeft:10,
        width:"55%",
        fontWeight:"700",
        fontSize:15,
        color:"#5E6D75"
    },

    SubCategoryCardStyle:{
      flexDirection:"row",
      justifyContent:"space-between"
    }
  });

  

