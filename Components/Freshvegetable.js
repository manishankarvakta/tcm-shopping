import { FlatList } from "react-native";

import React, { useState } from "react";

import { useGetVegetablesQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";

import ComponentProductCardDesign from "./ComponentProductCardDesign";

const Freshvegetable = ({ navigation }) => {
  const { data, isSuccess, isError } = useGetVegetablesQuery(
    "62e8ed5bb0757f089ab009af"
  );
  const [Vegetable, setVegetable] = useState([]);

  useEffect(() => {
    data?.length > 0 && setVegetable(data);
  }, [isSuccess]);
  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );

  return (
    <FlatList
      horizontal
      data={Vegetable.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default Freshvegetable;
