import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import Routes from "../Utility/Routes";
import { PHOTO_URL } from "../Utility/BaseUrl";
import { addFavoriteProduct } from "../Screens/Redux/WishListSlice";
import { addProduct } from "../Screens/Redux/CartSlice";

export default function ProductsCardDesign({ item, navigation }) {
  const dispatch = useDispatch();
  const [favoriteItems, setFavoriteItems] = useState([]);

  const truncateName = (name) => {
    const maxLetter = 23;
    if (name.length > maxLetter) {
      return name.substring(0, maxLetter - 3) + "...";
    }
    return name;
  };

  const handleFavoriteToggle = (item) => {
    dispatch(addFavoriteProduct(item));
    if (favoriteItems.includes(item)) {
      setFavoriteItems(favoriteItems.filter((favItem) => favItem !== item));
    } else {
      setFavoriteItems([...favoriteItems, item]);
    }
  };

  const isItemFavorite = (item) => favoriteItems.includes(item);

  const photos = `${PHOTO_URL}${item.photo}`;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })}
      style={styles.card}
    >
      {photos ? (
        <Image source={{ uri: photos }} style={styles.PopularProductsImg} />
      ) : (
        <Image
          source={require("../assets/noPhoto.jpg")}
          style={styles.PopularProductsImg}
        />
      )}
      <TouchableOpacity
        onPress={() => handleFavoriteToggle(item)}
        style={styles.heartIcon}
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
              size={20}
              color="tomato"
              type="fontisto"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor: "#F5F6FB",
    padding: 7,
    borderRadius: 5,
    shadowColor: "gray",
    width: "47%",

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
    width: 120,
    fontSize: 16,
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
  cartStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  PopularProductsImg: {
    width: 115,
    height: 100,
    alignSelf: "center",
    marginVertical: 5,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
});
