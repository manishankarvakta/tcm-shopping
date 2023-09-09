import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { useGetProductCategoryIdQuery } from "../Redux/Api/ProductsApi";
import { useEffect } from "react";
import ProductsCardDesign from "../../Components/ProductsCardDesign";
import { Button } from "react-native-elements"; // Import the Button component

const numColumns = 2;
const initialItemCount = 6; // Number of items to initially display

const AllDrinks = ({ navigation }) => {
  const {
    data,
    isSuccess,
    isError,
    isFetching,
    refetch,
  } = useGetProductCategoryIdQuery("62e8fe11b0757f089ab009c8");
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);
  const [Drinks, setDrink] = useState([]);

  useEffect(() => {
    data?.length > 0 && setDrink(data);
  }, [isSuccess]);

  const loadMoreItems = () => {
    const newVisibleItemCount = visibleItemCount + 9; // Load 9 more items
    setVisibleItemCount(newVisibleItemCount);
  };

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10, flex: 1 }}>
      <FlatList
        data={Drinks.slice(0, visibleItemCount)}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
      />
      {visibleItemCount < Drinks.length && (
        <Button
          title="Load More"
          onPress={loadMoreItems}
          type="outline" // You can specify the button type (solid, clear, outline) as needed
          buttonStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          titleStyle={{ color: "tomato" }}
        />
      )}
    </View>
  );
};

export default AllDrinks;
