import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useGetBestFeaturedProductsQuery } from "../Screens/Redux/Api/ProductsApi";
import { PHOTO_URL } from "../Utility/BaseUrl";

import Routes from "../Utility/Routes";
import { useNavigation } from "@react-navigation/native";

const ImageCarousel = () => {
  const navigation = useNavigation();
  const { data, isSuccess, isError, isFetching, isLoading } =
    useGetBestFeaturedProductsQuery();

  useEffect(() => {
    //console.log(data);
  }, [isSuccess, data]);

  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const Featuredphoto = `${PHOTO_URL}${item.photo}`;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Tt, { _id: item.id })}
          >
            <Image
              source={{ uri: Featuredphoto }}
              style={styles.image}
              resizeMode="cover"
            />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item._id}
    />
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
    marginHorizontal: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
});
