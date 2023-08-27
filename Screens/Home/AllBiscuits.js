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
import ProductsCardDesign from "../../Components/ProductsCardDesign";
const numColumns = 2;

const AllBiscuits = ({ navigation }) => {
  const { data, isSuccess, isError, refetch, isFetching } =
    useGetProductCategoryIdQuery("62e8fe11b0757f089ab009e6");
  const [Biscuits, setBiscuits] = useState([]);

  useEffect(() => {
    data?.length > 0 && setBiscuits(data);
  }, [isSuccess]);

  // console.log("data", data);
  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
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

export default AllBiscuits;
