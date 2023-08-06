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
import Profile from "./Screens/Profile/Profile";
import PersonalInfo from "./Screens/Profile/PersonalInfo";
import ProfileStack from "./Navigation/ProfileStack";
import ConfirmOrder from "./Screens/OrderScreen/ConfirmOrder";
import ManageAddress from "./Screens/Profile/ManageAddress";
import Settings from "./Screens/Profile/Settings";
import NotificationSettings from "./Screens/Profile/NotificationSettings";
import ChangePassword from "./Screens/Profile/ChangePassword";
import DeleteAccount from "./Screens/Profile/DeleteAccount";
import UpdateInformation from "./Screens/Profile/UpdateInformation";
import OrderSuccess from "./Screens/OrderScreen/OrderSuccess";
import { Login } from "./Screens";
import TabNav from "./Navigation/TabNav";

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
        {token ? <DrawerNav /> : <AuthStackNav />}
      </NavigationContainer>
    </Provider>
  );
}

//
