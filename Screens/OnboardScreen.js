import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "@rneui/themed";

const OnboardScreen = ({ navigation }) => {
  const [isLogin, setIsLogin] = useState(false);
  const redirect = () => {
    navigation.replace("Home");
  };
  return (
    <Onboarding
      onSkip={() =>
        isLogin === true
          ? navigation.replace("Home")
          : navigation.replace("Login")
      }
      onDone={() =>
        isLogin === true
          ? navigation.replace("Home")
          : navigation.replace("Login")
      }
      pages={[
        {
          backgroundColor: "#ed3833",
          image: (
            <Image
              source={require("../assets/select_product.png")}
              style={{ height: 200, width: 280 }}
            />
          ),
          title: "Select Products",
          subtitle: "Shopping is so easy with TCM, Choose your Item",
        },
        {
          backgroundColor: "#ed3833",
          image: (
            <Image
              source={require("../assets/confirm_order.png")}
              style={{ height: 200, width: 250 }}
            />
          ),
          title: "Place Order",
          subtitle: "Just order and pay via Cash on Delivery",
        },
        {
          backgroundColor: "#ed3833",
          image: (
            <Image
              source={require("../assets/delivery.png")}
              style={{ height: 150, width: 150 }}
            />
          ),
          title: "Door Step Delivery",
          subtitle: "Recive Delivery from your door Step",
        },
      ]}
    />
  );
};

export default OnboardScreen;

const styles = StyleSheet.create({});
