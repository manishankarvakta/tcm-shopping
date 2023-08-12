import { FlatList } from "react-native";
import React, { useState } from "react";
import { useGetProductCategoryIdQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";
import ComponentProductCardDesign from "./ComponentProductCardDesign";

const FreshFruits = ({ navigation }) => {
  const { data, isSuccess, isError } = useGetProductCategoryIdQuery(
    "62e8ed5bb0757f089ab009af"
  );
  const [FreshFruits, setFreshFruits] = useState([]);

  useEffect(() => {
    data?.length > 0 && setFreshFruits(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );

  return (
    <FlatList
      horizontal
      data={FreshFruits.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default FreshFruits;
