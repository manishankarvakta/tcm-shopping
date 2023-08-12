import { FlatList } from "react-native";
import React, { useState } from "react";
import { useGetProductCategoryIdQuery } from "../Screens/Redux/Api/ProductsApi";
import { useEffect } from "react";

import ComponentProductCardDesign from "./ComponentProductCardDesign";

const Oil = ({ navigation }) => {
  const { data, isSuccess, isError } = useGetProductCategoryIdQuery(
    "62e8fe11b0757f089ab009cf"
  );
  const [Oil, setOil] = useState([]);

  useEffect(() => {
    data?.length > 0 && setOil(data);
  }, [isSuccess]);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );
  return (
    <FlatList
      horizontal
      data={Oil.slice(0, 9)}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
    />
  );
};

export default Oil;
