import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStackNav from "./Navigation/AuthStackNav";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./Screens/Redux/Store/Store";

import TabNav from "./Navigation/TabNav";
import OrderHistory from "./Screens/DrawerScreen/OrderHistory";


 



export default function App() {
  const Stack = createNativeStackNavigator();
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
  console.log("Names", user, token);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
           <OrderHistory/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

//{token ? <TabNav /> : <AuthStackNav />}