import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import { Icon } from "@rneui/base";

import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Routes from "../Utility/Routes";
import { addProduct, addToCart } from "../Screens/Redux/CartSlice";
import { useDispatch } from "react-redux";
import { useGetPopularProductsQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";
import { PHOTO_URL } from "../Utility/BaseUrl";
import { addFavoriteProduct } from "../Screens/Redux/WishListSlice";

const ProductCart = () => {
  const { data, isSuccess, isError } = useGetPopularProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    data?.length > 0 && setProducts(data);
  }, [isSuccess]);

  const dispatch = useDispatch();
  const [favoriteItems, setFavoriteItems] = useState([]);

  const navigation = useNavigation();

  const handleFavoriteToggle = (item) => {
    dispatch(addFavoriteProduct(item));
    if (favoriteItems.includes(item)) {
      setFavoriteItems(favoriteItems.filter((favItem) => favItem !== item));
    } else {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  const isItemFavorite = (item) => favoriteItems.includes(item);

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
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })}
        >
          <Image
            onPress={() => alert(item.imageUrl)}
            source={{ uri: `${PHOTO_URL}${item.photo}` }}
            style={{
              width: 95,
              height: 85,
              marginVertical: 5,
              borderRadius: 5,
            }}
          />
          <TouchableOpacity
            style={styles.heartIcon}
            onPress={() => handleFavoriteToggle(item)}
          >
            <Icon
              name="heart"
              size={20}
              color={isItemFavorite(item) ? "red" : "gray"}
              type="font-awesome"
            />
          </TouchableOpacity>
          <View style={styles.details}>
            <Text style={styles.name}>{truncateName(item.name)}</Text>
            <View style={styles.cartStyle}>
              <Text style={styles.price}>৳{item.priceList[0].mrp}</Text>
              <TouchableOpacity onPress={() => dispatch(addProduct(item))}>
                <Icon
                  name="shopping-basket-add"
                  size={19}
                  paddingTop={5}
                  color="tomato"
                  type="fontisto"
                />
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
    padding: 10,
    borderRadius: 5,
    backgroundColor: "white",

    //backgroundColor: "#F5F6FB",
    borderRadius: 5,
    elevation: 5, // This is for Android shadow
    shadowColor: "black", // This is for iOS shadow
    shadowOffset: { width: 0, height: 2 }, // This is for iOS shadow
    shadowOpacity: 0.25, // This is for iOS shadow
    shadowRadius: 5,
  },
  heartIcon: {
    position: "absolute",
    top: 5, // Adjust the top value to control the vertical position
    right: 5,
    zIndex: 1,
  },
  details: {
    paddingTop: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
