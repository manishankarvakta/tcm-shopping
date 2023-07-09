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
import { useNavigation } from '@react-navigation/native';
import Routes from "../Utility/Routes";
import { addToCart } from "../Screens/Redux/CartSlice";
import { useDispatch } from "react-redux";
import { useGetPopularProductsQuery } from "../Screens/Redux/Api/ProductsApi";
import { useState, useEffect } from "react";
import { PHOTO_URL } from "../Utility/BaseUrl";

const ProductCart = () => {
  const { data, isSuccess, isError } = useGetPopularProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    data?.length > 0 && setProducts(data);
  }, [isSuccess]);

  const dispatch = useDispatch();
  
  const handleAddtoCart = (item) => {
    //console.log(item);
    dispatch(addToCart(item));
  };

  const truncateName = (name) => {
    const maxLength = 12; // Define the maximum length for the name
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + "..."; // Truncate and add "..." at the end
    }
    return name;
  };

  return (
    <FlatList
      horizontal
      data={products.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.card}>
          <Image
            onPress={() => alert(item.imageUrl)}
            source={{ uri: `${PHOTO_URL}${item.photo}` }}
            style={{
              width: 95,
              height: 90,
              marginVertical: 8,
              borderRadius: 10,
            }}
          />
          <View style={styles.details}>
            <Text style={styles.name}>{truncateName(item.name)}</Text>
            <View style={styles.cartStyle}>
            <Text style={styles.price}>${item.priceList[0].mrp}</Text>

              <TouchableOpacity onPress={() => handleAddtoCart(item)}>
                <Icon name="shopping-basket-add" size={21} color="#2EB5AC" type="fontisto" />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor: "#F5F6FB",
    padding: 10,
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
  image: {
    width: 95,
    height: 90,
    borderRadius: 10,
    resizeMode: 'cover',
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
  icon: {
    fontSize: 24,
    marginTop: 5,
  },
  cartStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
