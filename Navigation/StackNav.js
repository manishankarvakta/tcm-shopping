import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import { Avatar, Button, Icon } from "@rneui/themed";

import { Home, Login, Category, CategoryGroup } from "../Screens";

import PopularProductStack from "./PopularProductStack";
import FlashsaleProductNav from "./FlashsaleProductNav";
import VegetablesProductStack from "./VegetablesProductStack";
import BiscuitsStack from "./BiscuitsStack";
import FreshFruitsStack from "./FreshFruitsStack";
import OrderScreenNav from "../Navigation/OrderScreenNav";
import OfferScreenstack from "../Navigation/OfferScreenstack";
import CategoryStackNav from "./CategoryStackNav";
import FeaturedProductStack from "./FeaturedProductStack";
import SkinCareStack from "./SkinCareStack";
import DrinksStack from "./DrinksStack";
import OilStack from "./OilStack";
import ProfileStack from "./ProfileStack";
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import ManageAddress from "../Screens/Profile/ManageAddress";
import OrderScreenAddress from "../Screens/OrderScreen/OrderScreenAddress";
import OTPforgotPassword from "../Screens/Auth/OTPforgotPassword";
import { useSelector } from "react-redux";
import { useState } from "react";
const StackNav = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  const [OrderItem, setOrderItem] = useState("0");
  const cartItem = useSelector((state) => state.cartReducer.products);

  console.log("OrderItem", OrderItem);
  useEffect(() => {
    setOrderItem(cartItem.length);
  }, [cartItem]);

  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={Routes.LOGIN_Auth}
        component={AuthStackNav}
        options={{ headerShown: false }}
      /> */}
      <Stack.Screen name={Routes.HOME} component={Home} />

      <Stack.Screen
        name={Routes.CATEGORY_GROUP_TAB}
        component={CategoryStackNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.CART_SCREEN_TAB}
        component={OrderScreenNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.POPULAR_Product}
        component={PopularProductStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FLASHSALE_TAB}
        component={FlashsaleProductNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FRESH_VEGETABLES_TAB}
        component={VegetablesProductStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.All_BISCUITS_TAB}
        component={BiscuitsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SOFT_DRINKS_TAB}
        component={DrinksStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.FRESH_FOOD_TAB}
        component={FreshFruitsStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.OIL_TAB}
        component={OilStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.SKIN_CARE_TAB}
        component={SkinCareStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.OFFER_PRODUCTS_TAB}
        component={OfferScreenstack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.IMAGE_CAROUSEL_Tab}
        component={FeaturedProductStack}
      />

      <Stack.Screen
        name={Routes.PRFILE_STACK_DRAWER}
        component={ProfileStack}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.Tt}
        component={SingleProductsDetailsScreen}
        options={({ navigation }) => ({
          // Define custom header with a cart icon on the right
          headerRight: () => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                name="shoppingcart"
                type="ant-design"
                size={30}
                color="red"
                onPress={() => {
                  // Navigate to your cart screen here
                  navigation.navigate(Routes.CART_SCREEN_TAB);
                }}
              />
              <Text style={{ fontSize: 16, fontWeight: "bold", color: "blue" }}>
                {OrderItem}
              </Text>
            </View>
          ),
        })}
      />

      <Stack.Screen
        name={Routes.MANAGE_ADDRESS}
        component={ManageAddress}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={Routes.ORDER_ADDRESS}
        component={OrderScreenAddress}
      />
    </Stack.Navigator>
  );
};

export default StackNav;

const styles = StyleSheet.create({});
