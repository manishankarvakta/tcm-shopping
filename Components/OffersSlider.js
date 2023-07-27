import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useGetOfferProductsQuery } from "../Screens/Redux/Api/ProductsApi";
import { PHOTO_URL } from "../Utility/BaseUrl";
import { useDispatch } from "react-redux";
import { addProduct } from "../Screens/Redux/CartSlice";
import { useNavigation } from "@react-navigation/native";
import Routes from "../Utility/Routes";

const OffersSlider = () => {
  const { data, isSuccess, isError } = useGetOfferProductsQuery();
  const [offerImg, setOfferImg] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    if (isSuccess && data) {
      setOfferImg(data);
    }
  }, [isSuccess, data]);

  return (
    <FlatList
      horizontal
      data={offerImg}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const offerSliderImg = `${PHOTO_URL}${item.photo}`;

        return (
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })}
          >
            <Image
              source={{ uri: offerSliderImg }}
              style={{
                width: 200,
                height: 200,
                marginHorizontal: 5,
                marginVertical: 10,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default OffersSlider;

const styles = StyleSheet.create({});
