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
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../Redux/CartSlice";
const numColumns = 2;

const AllBiscuits = ({ navigation }) => {
  const { data, isSuccess, isError, refetch, isFetching } =
    useGetProductCategoryIdQuery("62e8fe11b0757f089ab009e6");
  const [Biscuits, setBiscuits] = useState([]);
  // const [favoriteItems, setFavoriteItems] = useState([]);
  const favoriteItems = useSelector((state) => state.WishReducer);

  // console.log(favoriteItems);
  const dispatch = useDispatch();
  useEffect(() => {
    data?.length > 0 && setBiscuits(data);
  }, [isSuccess]);

  const handleFavoriteToggle = (item) => {
    dispatch(addFavoriteProduct(item));
  };

  const isItemFavorite = (item) => {
    if (favoriteItems?.length > 0) {
      if (favoriteItems?.includes(item)) {
        //  console.log(item);
        return true;
      }
    }
  };
  const renderItem = ({ item }) => {
    const photos = `${PHOTO_URL}${item.photo}`;
    const truncateName = (name) => {
      const maxLength = 23; // Define the maximum length for the name
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
        data={Biscuits.slice(0, 30)}
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
    width: "47%",
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
  BiscuitsImgStyle: {
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

export default AllBiscuits;
