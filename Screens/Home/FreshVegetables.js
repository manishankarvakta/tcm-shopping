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
import { useGetVegetablesQuery } from "../Redux/Api/ProductsApi";
import { useEffect } from "react";
import { PHOTO_URL } from "../../Utility/BaseUrl";
import { addFavoriteProduct } from "../Redux/WishListSlice";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/CartSlice";
import ProductsCardDesign from "../../Components/ProductsCardDesign";
const numColumns = 2;

const FreshVegetables = ({ navigation }) => {
  const { data, isSuccess, isError, refetch, isFetching } =
    useGetVegetablesQuery("62e8ed5bb0757f089ab009af");
  const [Fruits, setFruits] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    data?.length > 0 && setFruits(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <FlatList
        data={Fruits.slice(0, 30)}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default FreshVegetables;
