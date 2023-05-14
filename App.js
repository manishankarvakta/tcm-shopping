import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthStackNav from "./Navigation/AuthStackNav";
import StackNav from "./Navigation/StackNav";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import TabNav from "./Navigation/TabNav";
import ProductCart from "./Components/ProductCart";
import ProductCard from "./Components/ProductCard";


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
    <NavigationContainer>
    <TabNav/>
    </NavigationContainer>
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
//  {token ? <TabNav /> : <AuthStackNav />}