import { FlatList } from "react-native";
import React, { useState } from "react";
import { useGetSkinCareProductsQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";
import ComponentProductCardDesign from "./ComponentProductCardDesign";

const SkinCare = ({ navigation }) => {
  const { data, isSuccess, isError } = useGetSkinCareProductsQuery(
    "62e8fe11b0757f089ab009c4"
  );
  const [SkinProducts, setSkinProducts] = useState([]);

  useEffect(() => {
    data?.length > 0 && setSkinProducts(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );

  return (
    <FlatList
      horizontal
      data={SkinProducts.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default SkinCare;
