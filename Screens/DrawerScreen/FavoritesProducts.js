import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  Text,
} from "react-native";
import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";
import { useDispatch, useSelector } from "react-redux";
import { PHOTO_URL } from "../../Utility/BaseUrl";
import { addWishListProduct } from "../Redux/CartSlice";
import { removeProduct } from "../Redux/WishListSlice";

const numColumns = 2;

const FavoritesProducts = ({ navigation }) => {
  const FavoriteItem = useSelector((state) => state.WishReducer);
  const dispatch = useDispatch();

  const truncateName = (name) => {
    const maxLength = 12;
    if (name.length > maxLength) {
      return name.substring(0, maxLength - 3) + "...";
    }
    return name;
  };

  const renderItem = ({ item }) => {
    const photos = `${PHOTO_URL}${item.photo}`;

    const handleDelete = () => {
      dispatch(removeProduct(item.id)); // Corrected the dispatch action
    };

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.Tt, { _id: item.id })}
        style={styles.card}
      >
        <TouchableOpacity style={styles.deleteIcon} onPress={handleDelete}>
          <Icon name="delete" size={20} color="red" type="ant-design" />
        </TouchableOpacity>
        <Image source={{ uri: photos }} style={styles.FlashSaleImg} />
        <View style={styles.details}>
          <Text style={styles.name}>{truncateName(item.name)}</Text>
          <View style={styles.cartStyle}>
            <Text style={styles.price}>৳ {item.mrp} </Text>
            <TouchableOpacity
              onPress={() => dispatch(addWishListProduct(item))}
            >
              <Icon
                name="shopping-basket-add"
                size={21}
                color="tomato"
                type="fontisto"
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={FavoriteItem.FavoritesProducts}
        renderItem={renderItem}
        numColumns={numColumns}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  item: {
    alignItems: "center",
    flex: 1,
    margin: 5,
  },
  cartStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor: "#F5F6FB",
    padding: 7,
    borderRadius: 5,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: "47%",
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  deleteIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
  details: {
    paddingTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  FlashSaleImg: {
    width: 115,
    height: 100,
    textAlign: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default FavoritesProducts;
