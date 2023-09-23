import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Routes from "../Utility/Routes";
import { useGetProductDetailsQuery } from "./Redux/Api/ProductsApi";
import { PHOTO_URL } from "../Utility/BaseUrl";
import { useDispatch } from "react-redux";
import {
  addProduct,
  productsQuantityDecrement,
  productsQuantityIncrement,
} from "./Redux/CartSlice";

export default function SingleProductsDetailsScreen({ navigation, route }) {
  const { _id } = route.params;
  const { data, isError, isLoading, refetch } = useGetProductDetailsQuery(_id);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handlePlus = () => {
    dispatch(productsQuantityIncrement(data._id));
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      dispatch(productsQuantityDecrement(data._id));
    }
  };

  useEffect(() => {
    refetch();
  }, [_id]);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <ActivityIndicator size="large" />
      </SafeAreaView>
    );
  }

  if (isError) {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Error loading product details</Text>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}>
          <Text style={{ color: "tomato", fontSize: 18, padding: 20 }}>
            Close
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  let photos = null;
  if (data?.photo !== undefined) {
    if (data?.photo !== "") {
      if (data?.photo !== "photo.jpg") {
        photos = `${PHOTO_URL}${data.photo}`;
      }
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#F5F6FB" }}>
        <Text
          style={{
            marginTop: 10,
            fontWeight: "bold",
            fontSize: 18,
            marginLeft: 10,
          }}
        >
          {data?.name}
        </Text>
        <View style={{ alignItems: "center" }}>
          {photos ? (
            <Image
              source={{ uri: photos }}
              style={{ width: "80%", aspectRatio: 1, marginTop: 10 }}
              onError={() => {
                console.log("Image failed to load.");
              }}
            />
          ) : (
            <Image
              source={require("../assets/noPhoto.jpg")}
              style={{ width: "80%", aspectRatio: 1, marginTop: 10 }}
            />
          )}
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
            marginTop: 10,
          }}
        >
          <Text style={{ color: "red", fontSize: 19 }}>
            {data?.priceList[0]?.mrp}৳
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={handleMinus} style={styles.button}>
                <FontAwesome name="minus" size={17} color="#000" />
              </TouchableOpacity>
              <Text style={styles.counterText}>{count}</Text>
              <TouchableOpacity onPress={handlePlus} style={styles.button}>
                <FontAwesome name="plus" size={17} color="#000" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => dispatch(addProduct(data))}
              style={styles.addToCartButton}
            >
              <Text style={{ color: "tomato", padding: 8 }}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{ borderTopColor: "#c1c1c1", borderWidth: 0.4, margin: 10 }}
        ></View>
        <View style={{ padding: 10 }}>
          <Text>
            {data?.details?.length > 0
              ? data.details
              : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the "}
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}>
          <Text
            style={{
              color: "tomato",
              textAlign: "center",
              fontSize: 18,
              padding: 20,
            }}
          >
            Close
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  button: {
    justifyContent: "center",
    alignItems: "center",
    width: 28,
    height: 28,
    borderRadius: 25,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ECECEC",
  },
  counterText: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 15,
  },
  addToCartButton: {
    marginLeft: 10,
    alignSelf: "flex-start",
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "tomato",
    paddingHorizontal: 10,
  },
};
