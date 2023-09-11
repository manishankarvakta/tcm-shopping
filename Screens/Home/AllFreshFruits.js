import React, { useState, useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { useGetProductCategoryIdQuery } from "../Redux/Api/ProductsApi";
import ProductsCardDesign from "../../Components/ProductsCardDesign";
import { Button } from "react-native-elements";

const numColumns = 2;
const initialItemCount = 6; // Initial number of items to display

const AllFreshFruits = ({ navigation }) => {
  const {
    data,
    isSuccess,
    isError,
    refetch,
    isFetching,
  } = useGetProductCategoryIdQuery("62e8fe11b0757f089ab009f7");
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setFruits(data || []);
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
    if (visibleItemCount < fruits.length) {
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
        data={fruits.slice(0, visibleItemCount)}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
        ListFooterComponent={renderFooter}
      />
      {isError && <Text>Error: Something went wrong.</Text>}
    </View>
  );
};

export default AllFreshFruits;
