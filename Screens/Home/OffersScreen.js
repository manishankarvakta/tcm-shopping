import { View, Text, SafeAreaView, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Routes from '../../Utility/Routes';
import { useGetOfferProductsQuery } from '../Redux/Api/ProductsApi';
import { useState, useEffect } from 'react';
import { PHOTO_URL } from '../../Utility/BaseUrl';

const OffersScreen = ({ navigation }) => {
  const { data, isSuccess, isError, isFetching, isLoading } = useGetOfferProductsQuery();

  const [offer, setOffer] = useState([]);

  useEffect(() => {
    data?.length> 0 && setOffer(data)
  }, [isSuccess, data]);

  //console.log(isFetching, isLoading, isSuccess, isError);

  const renderProductItem = ({ item }) => {
    const Offerphoto = `${PHOTO_URL}${item.photo}`;
    
    return (
      <View>
      <View style={{backgroundColor:"#F5F6FB"}}>
         <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt)}>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: Offerphoto }} style={styles.OfferImgStyle} />
        </View>
        <Text style={styles.OfferProductNameStyle}>{item.name}</Text>
        <View style={styles.OfferPriceSectionStyle}>
          <Text style={{ color: 'red', fontSize: 15 }}>৳{item.priceList[0].mrp}</Text>
          <TouchableOpacity style={styles.OfferProductAddCartStyle}>
            <FontAwesome name="plus" size={14} color="#1D2F3E" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
        </View>
        
        <View style={{borderWidth:0.4,borderTopColor:"gray",width:"90%",alignItems:"center",alignSelf:"center"}}>
           
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
     <FlatList
  data={offer}
  renderItem={renderProductItem}
  keyExtractor={(item) => item._id.toString()} // Convert the id to a string to ensure uniqueness
/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OfferImgStyle: {
    width: 240,
    height: 150,
    marginTop: 20,
  },
  OfferProductNameStyle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
    margin: 20,
  },
  OfferPriceSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  OfferProductAddCartStyle: {
    backgroundColor: '#CBCBCB',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OffersScreen;
