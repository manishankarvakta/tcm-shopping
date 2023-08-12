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
import {
  useGetFlashSalesQuery,
  useGetPopularProductsQuery,
} from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";
import { PHOTO_URL } from "../Utility/BaseUrl";
import { addFavoriteProduct } from "../Screens/Redux/WishListSlice";
import ComponentProductCardDesign from "./ComponentProductCardDesign";

const FlashSales = ({ navigation }) => {
  const { data, isSuccess, isError } = useGetFlashSalesQuery();
  const [FlashSale, setFlashSale] = useState([]);

  useEffect(() => {
    data?.length > 0 && setFlashSale(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );

  return (
    <FlatList
      horizontal
      data={FlashSale.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default FlashSales;
