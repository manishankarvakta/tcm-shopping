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
import Routes from "../../Utility/Routes";
import { Icon } from "@rneui/base";
import { useGetProductCategoryIdQuery } from "../Redux/Api/ProductsApi";
import { useEffect } from "react";
import { PHOTO_URL } from "../../Utility/BaseUrl";
import { addFavoriteProduct } from "../Redux/WishListSlice";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/CartSlice";
const numColumns = 3;
const itemWidth = Dimensions.get("window").width / numColumns;

const AllDrinks = ({ navigation }) => {
  const { data, isSuccess, isError, isFetching, refetch } =
    useGetProductCategoryIdQuery("62e8fe11b0757f089ab009c8");
  const [Drinks, setDrink] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    data?.length > 0 && setDrink(data);
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
  const renderItem = ({ item }) => {
    const photos = `${PHOTO_URL}${item.photo}`;
    const truncateName = (name) => {
      const maxLength = 12; // Define the maximum length for the name
      if (name.length > maxLength) {
        return name.substring(0, maxLength - 3) + "..."; // Truncate and add "..." at the end
      }
      return name;
    };

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
          source={{ uri: photos }}
          style={styles.BiscuitsImgStyle}
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
        {/* <Text>{`../assets/${item.key}.jpg`}</Text> */}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={Drinks}
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
    width: itemWidth,
  },
  image: {
    marginBottom: 10,
    width: 160,
    height: 100,
    textAlign: "center",
    borderRadius: 10,
  },
  cartStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  card: {
    flexDirection: "column",
    margin: 5,
    backgroundColor: "#F5F6FB",
    padding: 4,
    borderRadius: 5,
    shadowColor: "gray",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 85,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },
  details: {
    paddingTop: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    width: 100,
  },
  price: {
    fontSize: 16,
    marginTop: 5,
  },
  quantity: {
    fontSize: 16,
    marginTop: 5,
  },
  BiscuitsImgStyle: {
    width: 95,
    height: 90,
    marginVertical: 5,
    borderRadius: 10,
  },
  heartIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },

  heartIcon: {
    position: "absolute",
    top: 5,
    right: 5,
    zIndex: 1,
  },
});

export default AllDrinks;
