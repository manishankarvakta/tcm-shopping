import { FlatList } from "react-native";

import React, { useState } from "react";

import { useGetPopularProductsQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";
import ComponentProductCardDesign from "./ComponentProductCardDesign";

const ProductCart = ({ item, navigation }) => {
  const { data, isSuccess, isError } = useGetPopularProductsQuery();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    data?.length > 0 && setProducts(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );
  return (
    <FlatList
      horizontal
      data={products.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default ProductCart;
