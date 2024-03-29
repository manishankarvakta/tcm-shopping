import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStackNav from "./Navigation/AuthStackNav";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Store, { store } from "./Screens/Redux/Store/Store";
import DrawerNav from "./Navigation/DrawerNav";
import TabNav from "./Navigation/TabNav";
import StackNav from "./Navigation/StackNav";
import HomeScreen from "./Screens/Home/HomeScreen";
import TopCategorysTwo from "./Components/TopCategorysTwo";
import TopCategorys from "./Components/TopCategorys";
import OrderSuccess from "./Screens/OrderScreen/OrderSuccess";
import SliderTwo from "./Components/SliderTwo";
import LoginScreen from "./Screens/Auth/LoginScreen";
import SingleProductsDetailsScreen from "./Screens/SingleProductsDetailsScreen";
import ForgotPasswordScreen from "./Screens/Auth/ForgotPasswordScreen";
import { ForgotPassword } from "./Screens";
import OTPforgotPassword from "./Screens/Auth/OTPforgotPassword";

export default function App() {
  const [token, setToken] = useState(false);
  const [user, setUser] = useState({});
  const getUser = async () => {
    // console.log("getUser");
    const store = await AsyncStorage.getAllKeys();

    const userData = await AsyncStorage.getItem("user");
    setUser(JSON.parse(userData));

    AsyncStorage.getItem("token").then((value) => {
      if (value !== null) {
        setToken(true);
      }
    });
  };
  //console.log("Names", user, token);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Provider store={Store}>
      <NavigationContainer>
        {/* <ForgotPasswordScreen /> */}
        <AuthStackNav />
        {/* {token ? <DrawerNav /> : <AuthStackNav />} */}
      </NavigationContainer>
    </Provider>
  );
}

//
