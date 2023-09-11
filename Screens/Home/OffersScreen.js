import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Routes from "../../Utility/Routes";
import { useGetOfferProductsQuery } from "../Redux/Api/ProductsApi";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/CartSlice";
import { Button } from "react-native-elements";
import { PHOTO_URL } from "../../Utility/BaseUrl";
import { ActivityIndicator } from "react-native-paper";

const OffersScreen = ({ navigation }) => {
  const { data, isSuccess, isFetching, refetch } = useGetOfferProductsQuery();
  const [offer, setOffer] = useState([]);
  const [visibleItemCount, setVisibleItemCount] = useState(6); // Number of items to initially display

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      setOffer(data || []);
    }
  }, [isSuccess, data]);

  const loadMoreItems = () => {
    const newVisibleItemCount = visibleItemCount + 6;
    setVisibleItemCount(newVisibleItemCount);
  };

  const renderProductItem = ({ item }) => {
    const Offerphoto = `${PHOTO_URL}${item.photo}`;

    return (
      <View>
        <View style={{ backgroundColor: "#F5F6FB" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })}
          >
            <View style={{ alignItems: "center" }}>
              <Image
                source={{ uri: Offerphoto }}
                style={styles.OfferImgStyle}
              />
            </View>
            <Text style={styles.OfferProductNameStyle}>{item.name}</Text>
            <View style={styles.OfferPriceSectionStyle}>
              <Text style={{ color: "red", fontSize: 15 }}>
                ৳{item?.priceList[0]?.mrp}
              </Text>
              <TouchableOpacity
                style={styles.OfferProductAddCartStyle}
                onPress={() => dispatch(addProduct(item))}
              >
                <FontAwesome name="plus" size={14} color="#1D2F3E" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderFooter = () => {
    if (isFetching) {
      return (
        <ActivityIndicator
          size="small"
          color="tomato"
          style={{ marginVertical: 10 }}
        />
      );
    }
    if (visibleItemCount < offer.length) {
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
    <SafeAreaView>
      <FlatList
        data={offer.slice(0, visibleItemCount)}
        renderItem={renderProductItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id.toString()}
        ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  OfferImgStyle: {
    width: 240,
    height: 150,
    marginTop: 20,
  },
  OfferProductNameStyle: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
    margin: 20,
  },
  OfferPriceSectionStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    paddingBottom: 10,
  },
  OfferProductAddCartStyle: {
    backgroundColor: "#CBCBCB",
    height: 25,
    width: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OffersScreen;
