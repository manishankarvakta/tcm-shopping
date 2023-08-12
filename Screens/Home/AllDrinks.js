import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useGetProductCategoryIdQuery } from "../Redux/Api/ProductsApi";
import { useEffect } from "react";
import ProductsCardDesign from "../../Components/ProductsCardDesign";

const numColumns = 2;

const AllDrinks = ({ navigation }) => {
  const { data, isSuccess, isError, isFetching, refetch } =
    useGetProductCategoryIdQuery("62e8fe11b0757f089ab009c8");
  const [Drinks, setDrink] = useState([]);

  useEffect(() => {
    data?.length > 0 && setDrink(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );
  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
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

export default AllDrinks;
