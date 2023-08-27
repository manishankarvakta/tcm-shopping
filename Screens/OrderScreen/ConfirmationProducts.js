import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Icon } from "@rneui/base";
import { Alert } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import axios from "axios";

export default function ConfirmationProducts({ navigation }) {
  const cartItems = useSelector((state) => state.cartReducer);
  // const [createSale] = useAddSaleMutation();

  const OrderSubmit = async () => {
    if (cartItems?.products?.length > 0) {
      //console.log("cartItems:", cartItems);
      // const response = createSale(cartItems);

      // console.log("response", response);
      await axios
        .post(`http://localhost:5001/api/ecom/sale/`, cartItems)
        // .post(`${BASE_URL}/ecom/sale`, cartItems)
        .then(async (response) => {
          // console.log("response :", response);

          if (response.status === 200) {
            // console.log("sale Success");
          } else {
            //console.log(error);
          }
        })
        .catch(async (error) => {
          // console.log("error :", error);
          // Handle the error (e.g., show an error message to the user)
        });
    } else {
      Alert.alert("Please select that order product more then one ");
    }
  };

  // console.log("cartItems:", cartItems);

  const DeliveryAddress = cartItems?.delivery?.address;

  // { holdingNumber, roadNumber, sector, town, zip, city }
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <View style={styles.OrderConfirmantionSectionStye}>
          <View>
            <Text style={styles.ConfirmationText}>Confirmation</Text>
            <Text>
              Order number{" "}
              <Text style={styles.OrderNumberText}>#{cartItems.billerId}</Text>
            </Text>

            <Text>
              Your order is currrently {"\n"}
              confirmed as{" "}
              <Text style={{ color: "gray" }}>Cash on {"\n"}Delivery.</Text>
            </Text>
          </View>
        </View> */}

        <View>
          <View style={styles.OrderSummerySectionStyle}>
            <Text style={styles.OrderSummeryTextStyle}>Totals Summary</Text>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={styles.TitleStyle}>SubTotal</Text>
                <Text style={styles.TitleStyle}>Total Discount</Text>
                <Text style={styles.TitleStyleTwo}>Total Order</Text>
                <Text style={styles.TitleStyleThree}>Today point</Text>
                <Text style={styles.TitleStyleThree}>Total point</Text>
              </View>

              <View>
                <Text style={styles.TitleStyle}>{cartItems?.total}tk</Text>
                <Text style={styles.TitleStyle}>৳{cartItems?.vat}</Text>
                <Text style={styles.TitleStyle}>৳{cartItems?.grossTotal}</Text>
                <Text style={styles.TitleStyle}>{cartItems?.todayPoint}</Text>
                <Text style={styles.TitleStyle}>{cartItems?.Point}</Text>
              </View>
            </View>

            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: "#c1c1c1",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.TitleStyleFour}>Deu</Text>
              <Text style={styles.TitleStyleFour}>
                ৳{cartItems?.grossTotal}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.PaymentSectionStyle}>
          <View style={styles.PaymentOptionText}>
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              Payment Options
            </Text>
          </View>

          <View>
            <TouchableOpacity style={styles.PaymentOptionStyle}>
              <View style={{ marginVertical: 5 }}>
                <View>
                  <Text style={styles.PaymentOptionTextStyle}>
                    Cash On Delivery
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <View style={styles.EmailVerifyAds}>
            <View style={{ alignSelf: "center" }}>
              <View style={{ marginTop: 20 }}>
                <TouchableOpacity
                  onPress={OrderSubmit}
                  style={styles.PlaceOrderButton}
                >
                  <View>
                    <Icon
                      type="antdesign"
                      name="shoppingcart"
                      size={24}
                      color="white"
                    />
                  </View>

                  <View>
                    <Text style={styles.PlaceOrderStyle}>Confirm Order</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.DeliveryInfoFotter}>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "600",
                fontSize: 21,
                paddingTop: 10,
                letterSpacing: 3,
                color: "gray",
              }}
            >
              {" "}
              Delivery Address
            </Text>
            <View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 17,
                  paddingTop: 10,
                  color: "gray",
                }}
              >
                House No : {DeliveryAddress?.holdingNumber}, Road No:{" "}
                {DeliveryAddress?.roadNumber},Sector: {DeliveryAddress?.sector},
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "500",
                  fontSize: 17,
                  paddingTop: 5,
                  color: "gray",
                }}
              >
                {DeliveryAddress?.town},{DeliveryAddress?.city}-
                {DeliveryAddress?.zip}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OrderConfirmantionSectionStye: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: "space-around",
    backgroundColor: "#F0F8FF",
    margin: 10,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  PlaceOrderButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  PlaceOrderStyle: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    paddingHorizontal: 15,
  },

  OrderProductImg: {
    width: 120,
    height: 100,
    borderRadius: 10,
    flex: 1,
  },

  ConfirmationText: {
    color: "gray",
    fontWeight: "700",
    fontSize: 18,
  },
  OrderNumberText: {
    color: "black",
    fontWeight: "800",
    fontSize: 14,
    paddingVertical: 12,
  },
  AdsStyle: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "#DEE1E6",
  },

  AdsTextStyle: {
    color: "green",
    marginTop: 3,
    fontWeight: "600",
    fontSize: 18,
    padding: 10,
  },

  PaymentSectionStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#F0F8FF",
    margin: 10,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },

  PaymentOptionText: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
  },
  PaymentOptionStyle: {
    flexDirection: "row",
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    backgroundColor: "#DEE1E6",
  },

  PaymentOptionImgStyle: {
    width: 45,
    height: 45,
    borderRadius: 10,
  },

  PaymentOptionTextStyle: {
    color: "black",
    marginTop: 3,
    fontWeight: "500",
    fontSize: 16,
    padding: 10,
    alignSelf: "center",
  },

  TrxIDStyle: {
    fontWeight: "400",
    fontSize: 15,
    color: "#7D5AAC",
  },

  OrderNoteStyle: {
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    backgroundColor: "#DEE1E6",
  },

  IconTextStyle: {
    justifyContent: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  OrderNote: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
  },

  VerifyEmail: {
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    justifyContent: "space-between",
    backgroundColor: "#DEE1E6",
  },

  GiveEmailStyle: {
    color: "black",
    fontWeight: "500",
    fontSize: 16,
    paddingVertical: 8,
  },

  VerifyText: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },

  EmailVerifyAds: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    justifyContent: "space-around",
    backgroundColor: "#F0F8FF",
    margin: 10,
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
  },

  VerifyTextOne: {
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#F7F0D5",
  },

  VerifyTextTwo: {
    paddingVertical: 30,
    fontSize: 18,
    fontWeight: "500",
    color: "red",
    letterSpacing: 3,
  },

  backToShoppingBtn: {
    borderWidth: 1,
    width: "50%",
    borderColor: "green",
    borderRadius: 5,
    padding: 13,
    marginVertical: 15,
    alignItems: "center",
  },

  TextColor: {
    color: "green",
    fontWeight: "700",
  },

  OrderSummerySectionStyle: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#F0F8FF",
    margin: 10,
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },

  OrderSummeryTextStyle: {
    padding: 20,
    alignSelf: "center",
    fontWeight: "600",
    fontSize: 20,
  },

  TitleStyle: {
    color: "gray",
    fontWeight: "500",
    fontSize: 14,
    paddingVertical: 2,
  },
  TitleStyleTwo: {
    color: "black",
    fontWeight: "700",
    fontSize: 14,
    paddingVertical: 2,
  },

  TitleStyleThree: {
    color: "green",
    fontWeight: "500",
    fontSize: 14,
    paddingVertical: 2,
  },

  TitleStyleFour: {
    color: "black",
    fontWeight: "700",
    fontSize: 14,
    paddingVertical: 2,
  },

  DeliveryInfoFotter: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: "#F0F8FF",
    marginHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    paddingVertical: 20,
    marginBottom: 5,
  },
});
