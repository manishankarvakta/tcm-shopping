import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useGetProductCategoryIdQuery } from "../Redux/Api/ProductsApi";
import { useEffect } from "react";
import ProductsCardDesign from "../../Components/ProductsCardDesign";

const numColumns = 2;

const AllOil = ({ navigation }) => {
  const { data, isSuccess, isError, refetch, isFetching } =
    useGetProductCategoryIdQuery("62e8fe11b0757f089ab009cf");
  const [AllOil, setAllOil] = useState([]);

  useEffect(() => {
    data?.length > 0 && setAllOil(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <FlatList
        data={AllOil}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default AllOil;
