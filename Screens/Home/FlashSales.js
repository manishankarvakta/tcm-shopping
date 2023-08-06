import React, { useEffect, useState } from "react";
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
import { useGetFlashSalesQuery } from "../Redux/Api/ProductsApi";
import { PHOTO_URL } from "../../Utility/BaseUrl";
import { useDispatch } from "react-redux";
import { addFavoriteProduct } from "../Redux/WishListSlice";
import { addProduct } from "../Redux/CartSlice";
const numColumns = 2;

const FlashSale = ({ navigation }) => {
  const { data, isSuccess, isError, refetch, isFetching } =
    useGetFlashSalesQuery();
  const [FlashSale, setFlashSale] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    data?.length > 0 && setFlashSale(data);
  }, [isSuccess]);

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
    const maxLetter = 23;
    if (name.length > maxLetter) {
      return name.substring(0, maxLetter - 3) + "...";
    }
    return name;
  };

  const renderItem = ({ item }) => {
    const photo = `${PHOTO_URL}${item.photo}`;

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })}
        style={styles.card}
      >
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
        <Image
          onPress={() => alert(item.imageUrl)}
          source={{ uri: photo }}
          style={styles.FlashSaleImg}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{truncateName(item.name)}</Text>
          <View style={styles.cartStyle}>
            <Text style={styles.price}>৳{item.priceList[0].mrp}</Text>
            <TouchableOpacity onPress={() => dispatch(addProduct(item))}>
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
        data={FlashSale}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
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
  image: {
    marginBottom: 10,
    width: 260,
    height: 100,
    textAlign: "center",
    borderRadius: 10,
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

  heartIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
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

export default FlashSale;
