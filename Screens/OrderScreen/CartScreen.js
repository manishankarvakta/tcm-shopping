import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { PHOTO_URL } from "../../Utility/BaseUrl";
import {
  productsQuntityDecrements,
  productsQuntityIncrement,
  removeProduct,
  selcetProduct,
} from "../Redux/CartSlice";

const CartScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cartReducer);
  //console.log("cartItems:", cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selcetProduct(cartItems.products));
  }, [cartItems.products]);

  // console.log("cartIt:",cartItems )

  const renderItem = ({ item }) => {
    const handleDelete = () => {
      dispatch(removeProduct(item.id));
    };

    const handlePlus = () => {
      dispatch(productsQuntityIncrement(item.id));
    };

    const handleMinus = () => {
      dispatch(productsQuntityDecrements(item.id));
    };
    //console.log("item",item)
    const photos = `${PHOTO_URL}${item.photo}`;
    return (
      <View style={styles.CartProductStyle}>
        <View>
          <Image source={{ uri: photos }} style={styles.CartProductImgStyle} />
        </View>

        <View
          style={{ justifyContent: "space-between", paddingHorizontal: 10 }}
        >
          <View style={{ width: 180 }}>
            <Text>{item.name}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "red" }}>৳{item.mrp} </Text>

            <Text> | {item.qty} pcs</Text>
          </View>
        </View>

        <View
          style={{ justifyContent: "space-between", flexDirection: "column" }}
        >
          <View>
            <TouchableOpacity
              onPress={handleDelete}
              style={{ alignSelf: "flex-end", alignItems: "flex-end" }}
            >
              <Icon name="delete" size={20} color="red" type="ant-design" />
            </TouchableOpacity>
          </View>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TouchableOpacity onPress={handleMinus}>
              <Icon
                name="minus"
                size={25}
                color="#000"
                type="ant-design"
                paddingRight={7}
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 18 }}>{item.qty}</Text>
            <TouchableOpacity onPress={handlePlus}>
              <Icon
                name="plus"
                size={22}
                color="#000"
                type="ant-design"
                paddingLeft={7}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={styles.HeaderContext}>
        <TouchableOpacity style={{ paddingRight: 5 }}>
          <Icon name="angle-down" size={20} color="#000" type="font-awesome" />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>Have a Special Code?</Text>
      </View>

      <View style={styles.ExpressIteamsStyle}>
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Icon
            name="shipping-fast"
            size={20}
            color="#fff"
            type="font-awesome-5"
            paddingRight={10}
          />
          <Text style={{ color: "#fff" }}>Express Items</Text>
        </View>
        <Text style={{ color: "#fff" }}>5.00PM-6.00PM</Text>
      </View>

      <FlatList
        data={cartItems.products}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 15 }}
      />

      <View
        style={{
          flexDirection: "row",
          margin: 30,
          marginHorizontal: 10,
          paddingVertical: 10,
          backgroundColor: "#D4E9F9",
          borderRadius: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
          }}
        >
          <Icon
            style={{
              width: 14,
              height: 14,
              borderRadius: 15,
              backgroundColor: "green",
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              marginVertical: 2,
            }}
            name="check"
            size={12}
            color="#fff"
            type="ant-design"
          />
          <Text style={{ color: "#000" }}>
            Delivery fee is reduced to $0 from $29
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.CONFIRM_ORDER)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 10,
          paddingVertical: 12,
          backgroundColor: "red",
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 15,
        }}
      >
        <View>
          <Icon type="antdesign" name="shoppingcart" size={24} color="white" />
        </View>

        <View>
          <Text style={{ color: "white", fontWeight: "700", fontSize: 18 }}>
            Place Order
          </Text>
        </View>

        <View style={{ borderRadius: 20 }}>
          <Text
            style={{
              backgroundColor: "#E7D6EC",
              paddingVertical: 5,
              paddingHorizontal: 25,
              borderRadius: 15,
              color: "#000",
            }}
          >
            ৳{cartItems.grossTotal} tk
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  HeaderContext: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  HeaderText: {
    color: "#7C7C7D",
    alignItems: "center",
    justifyContent: "center",
  },
  ExpressIteamsStyle: {
    flexDirection: "row",
    padding: 10,
    paddingVertical: 15,
    color: "#7C7C7D",
    backgroundColor: "#ed3833",
    justifyContent: "space-between",
  },
  CartProductStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#F3F6FD",
    borderColor: "#ddd",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 55,
  },
  CartProductImgStyle: {
    width: 60,
    height: 65,
    borderRadius: 10,
  },
});
