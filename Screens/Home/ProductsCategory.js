import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { useGetProductCategoryIdQuery } from "../Redux/Api/ProductsApi";
import { useEffect } from "react";
import ProductsCardDesign from "../../Components/ProductsCardDesign";

const numColumns = 2;

const ProductsCategory = ({ navigation, route }) => {
  const { product } = route.params;
  const { data, isError, refetch } = useGetProductCategoryIdQuery(product);

  useEffect(() => {
    refetch();
  }, [product]);

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <FlatList data={data} renderItem={renderItem} numColumns={numColumns} />
    </View>
  );
};

export default ProductsCategory;
