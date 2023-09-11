import { FlatList } from "react-native";

import React, { useState } from "react";

import { useGetProductCategoryIdQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";

import ComponentProductCardDesign from "./ComponentProductCardDesign";

const Biscuits = ({ navigation }) => {
  const { data, isSuccess, isError } = useGetProductCategoryIdQuery(
    "62e8fe11b0757f089ab009e6"
  );
  const [Biscuits, setBiscuits] = useState([]);

  useEffect(() => {
    data?.length > 0 && setBiscuits(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );

  return (
    <FlatList
      horizontal
      data={Biscuits.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default Biscuits;
