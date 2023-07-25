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
        <DrawerNav />
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
