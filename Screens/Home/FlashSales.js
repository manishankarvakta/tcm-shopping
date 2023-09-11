import React, { useEffect, useState } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useGetFlashSalesQuery } from "../Redux/Api/ProductsApi";
import ProductsCardDesign from "../../Components/ProductsCardDesign";
import { Button } from "react-native-elements";

const numColumns = 2;
const initialItemCount = 30; // Initial number of items to display

const FlashSale = ({ navigation }) => {
  const { data, isSuccess, refetch, isFetching } = useGetFlashSalesQuery();
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);
  const [flashSale, setFlashSale] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setFlashSale(data || []);
    }
  }, [isSuccess, data]);

  const loadMoreItems = () => {
    const newVisibleItemCount = visibleItemCount + 6; // Load 6 more items
    setVisibleItemCount(newVisibleItemCount);
  };

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );

  const renderFooter = () => {
    if (isFetching) {
      return <ActivityIndicator size="small" color="tomato" />;
    }
    if (visibleItemCount < flashSale.length) {
      return (
        <Button
          title="Load More"
          onPress={loadMoreItems}
          type="outline"
          buttonStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          titleStyle={{ color: "tomato" }}
        />
      );
    }
    return null;
  };

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <FlatList
        data={flashSale.slice(0, visibleItemCount)}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
};

export default FlashSale;
