import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import { useGetSkinCareProductsQuery } from "../Redux/Api/ProductsApi";

import ProductsCardDesign from "../../Components/ProductsCardDesign";
const numColumns = 2;

const SkinCares = ({ navigation }) => {
  const { data, isSuccess, isError, refetch, isFetching } =
    useGetSkinCareProductsQuery("62e8fe11b0757f089ab009c4");
  const [Skincare, setSkincare] = useState([]);
  useEffect(() => {
    data?.length > 0 && setSkincare(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <FlatList
        data={Skincare}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default SkinCares;
