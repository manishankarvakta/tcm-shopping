import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions ,Image, Text, SafeAreaView } from 'react-native';
import Routes from '../../Utility/Routes';
import { useNavigation } from '@react-navigation/native';
import { useGetCategoryGroupQuery } from '../Redux/Api/ProductsApi';
const numColumns = 2 ;
const itemWidth = Dimensions.get('window').width / numColumns;

export default function CategoryScreen({navigation, route }) {

  const { group } = route.params

  const { data, isError, refetch } = useGetCategoryGroupQuery(group)
 
  useEffect(() => {
   refetch()
   },[group])
  //console.log(id)
  const renderItem = ({ item }) => {
        return (
                 <View style={styles.cardTwo}>
           

           <TouchableOpacity onPress={() => navigation.navigate(Routes.SUB_CATEGORY, { mc: item.mcId })} style={styles.CategoryScreenStyle}>
             <Text style={styles.CategoryScreenNameStyle}>{item.name}</Text>

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
      CategoryScreenNameStyle:{
        alignSelf:"center",
        width:"55%",
        marginLeft:10,
        fontWeight:"700",
        fontSize:15,
        color:"#5E6D75"
      },

      CategoryScreenStyle:{
        flexDirection:"row",
        justifyContent:"space-between"
      }
  });

  



