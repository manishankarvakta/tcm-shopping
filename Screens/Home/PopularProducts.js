import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { Icon } from '@rneui/base';
import Routes from '../../Utility/Routes';
import { useNavigation } from '@react-navigation/native';
import { useGetPopularProductsQuery } from '../Redux/Api/ProductsApi';
const numColumns = 3;
const itemWidth = Dimensions.get('window').width / numColumns;
import { PHOTO_URL } from '../../Utility/BaseUrl'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart } from '../../Utility/Utility';
import { addProduct } from '../Redux/CartSlice';
// import { addToCart } from '../Redux/CartSlice';

const PopularProducts = () => {
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);

  const { data, isSuccess, isError } = useGetPopularProductsQuery();
  const dispatch = useDispatch();
 

  const handleAddtoCart = (item) => {
    //console.log(item);
    // dispatch(addToCart(item));
  };


  useEffect(() => {
    data?.length > 0 && setProduct(data);
  }, [isSuccess]);

  const truncateName = (name) => {
    const maxLength = 12; // Define the maximum length for the name
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + "..."; // Truncate and add "..." at the end
    }
    return name;
  };

  const renderItem = ({ item }) => {
    const photos = `${PHOTO_URL}${item.photo}`;

    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt,{_id: item._id})} style={styles.card}>
        <Image source={{ uri: photos }} style={styles.PopularProductsImg} />
        <View style={styles.details}>
          <Text style={styles.name}>{truncateName(item.name)}</Text>
          <View style={styles.cartStyle}>
          <Text style={styles.price}>৳{item.priceList[0].mrp}</Text>

            <TouchableOpacity >
              <Icon onPress={() => dispatch(addProduct(item))} name="shopping-basket-add" size={20} color="#2EB5AC" paddingTop={5} type="fontisto" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor: "#F5F6FB",
    padding: 7,
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  details: {
    paddingTop: 10,
  },
  name: {
    fontSize: 14,
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
  cartStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  PopularProductsImg: {
    width: 95,
    height: 90,
    borderRadius: 10,
  }
});

export default PopularProducts;
