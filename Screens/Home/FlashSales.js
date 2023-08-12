import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { useGetFlashSalesQuery } from "../Redux/Api/ProductsApi";
import ProductsCardDesign from "../../Components/ProductsCardDesign";
const numColumns = 2;

const FlashSale = ({ navigation }) => {
  const { data, isSuccess, refetch, isFetching } = useGetFlashSalesQuery();
  const [FlashSale, setFlashSale] = useState([]);

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
