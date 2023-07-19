import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, StyleSheet, Dimensions, Image, Text } from 'react-native';
import { Icon } from '@rneui/base';
import Routes from '../../Utility/Routes';
import { useGetProductCategoryIdQuery } from '../Redux/Api/ProductsApi';
import { useEffect } from 'react';
import { sin } from 'react-native-reanimated';
import { useDispatch } from 'react-redux';
import { addProduct } from '../Redux/CartSlice';
import { addFavoriteProduct } from '../Redux/WishListSlice';

const numColumns = 2;

const ProductsCategory = ({ navigation, route }) => {
  const dispatch = useDispatch()
  const { product } = route.params;
  const { data, isError, refetch } = useGetProductCategoryIdQuery(product);
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    refetch();
  }, [product]);

  const truncateName = (name) => {
    const maxLength = 23; // Define the maximum length for the name
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + '...'; // Truncate and add "..." at the end
    }
    return name;
  };

  const handleFavoriteToggle = (item) => {
    dispatch(addFavoriteProduct(item))
    if (favoriteItems.includes(item)) {
      setFavoriteItems(favoriteItems.filter((favItem) => favItem !== item));
    } else {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  const isItemFavorite = (item) => favoriteItems.includes(item);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })} style={styles.card}>
        <TouchableOpacity  style={styles.heartIcon}>
          <Icon
            onPress={() => handleFavoriteToggle(item) }
            name="heart"
            size={20}
            color={isItemFavorite(item) ? 'red' : 'black'}
            type="font-awesome"
            
          />
        </TouchableOpacity>
        <Image source={item.imageUrl} style={styles.FlashSaleImg} />
        <View style={styles.details}>
          <Text style={styles.name}>{truncateName(item.name)}</Text>
          <View style={styles.cartStyle}>
            <Text style={styles.price}>৳{item.priceList[0].mrp}</Text>
            <TouchableOpacity onPress={() => dispatch(addProduct(item))}>
              <Icon name="shopping-basket-add" size={21} paddingTop={5} color="#2EB5AC" type="fontisto" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={renderItem} numColumns={numColumns} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  card: {
    flexDirection: 'column',
    margin: 5,
    backgroundColor: '#F5F6FB',
    padding: 7,
    borderRadius: 5,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: '47%',
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
  FlashSaleImg: {
    width: 115,
    height: 100,
    textAlign: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 10,
  },
  heartIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
  },
  cartStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ProductsCategory;

