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
import ProductsCardDesign from "../../Components/ProductsCardDesign";
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

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
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

export default FlashSale;
