import {
  View,
  Text,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import Routes from "../Utility/Routes";
import { useGetProductDetailsQuery } from "./Redux/Api/ProductsApi";
import { useEffect } from "react";
import { PHOTO_URL } from "../Utility/BaseUrl";
import { useDispatch } from "react-redux";
import { addProduct } from "./Redux/CartSlice";
export default function SingleProductsDetailsScreen({ navigation, route }) {
  const { _id } = route.params;
  //console.log(_id)
  const { data, isError, refetch } = useGetProductDetailsQuery(_id);

  const dispatch = useDispatch();
  //console.log(data)
  useEffect(() => {
    refetch();
  }, [_id]);

  //console.log("dataN:", isError)

  const noPhoto = "https://i.ibb.co/PNQcdP2/noPhoto.jpg";
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
          <Image
            source={{ uri: `${PHOTO_URL}${data?.photo}` }}
            style={{ width: 230, height: 230, marginTop: 10 }}
          />
        </View>
        <Text
          style={{ color: "red", marginTop: 20, fontSize: 15, marginLeft: 17 }}
        >
          ৳{data?.priceList[0]?.mrp}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <View
            style={{
              marginLeft: 10,
              alignSelf: "flex-start",
              backgroundColor: "black",
              marginBottom: 10,
              borderWidth: 1,
              borderColor: "gray",
              borderRadius: 8,
              marginTop: 20,
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => dispatch(addProduct(data))}>
              <Text style={{ color: "white", padding: 8 }}>Buy now</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 25,
              backgroundColor: "#CBCBCB",
              height: 30,
              width: 30,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FontAwesome name="plus" size={16} color="#1D2F3E" />
          </TouchableOpacity>
        </View>

        <View
          style={{ borderTopColor: "#c1c1c1", borderWidth: 0.4, margin: 10 }}
        ></View>
        <View style={{ padding: 10 }}>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.Lorem
            Ipsum is simply dummy text of the
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME)}>
          <Text
            style={{
              color: "blue",
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
