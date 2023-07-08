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

  console.log(isFetching, isLoading, isSuccess, isError);

  const renderProductItem = ({ item }) => {
    const Offerphoto = `${PHOTO_URL}${item.photo}`;
    
    return (
      <View style={{backgroundColor:"#F5F6FBb  "}}>
         <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt)}>
        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: Offerphoto }} style={styles.OfferImgStyle} />
        </View>
        <Text style={styles.OfferProductNameStyle}>{item.name}</Text>
        <View style={styles.OfferPriceSectionStyle}>
          <Text style={{ color: 'red', fontSize: 15 }}>Price: {item.priceList[0].mrp}</Text>
          <TouchableOpacity style={styles.OfferProductAddCartStyle}>
            <FontAwesome name="plus" size={16} color="#1D2F3E" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
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
    width: 340,
    height: 250,
    marginTop: 20,
  },
  OfferProductNameStyle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    margin: 30,
  },
  OfferPriceSectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  OfferProductAddCartStyle: {
    backgroundColor: '#CBCBCB',
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OffersScreen;
