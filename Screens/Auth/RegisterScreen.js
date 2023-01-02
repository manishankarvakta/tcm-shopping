import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Avatar, Button, Image, Input } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";
import { Icon } from "@rneui/base";
import axios from "axios";
import BASE_URL from "../../Utility/BaseUrl";
import Spinner from "react-native-loading-spinner-overlay/lib";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState({});

  const getUser = async () => {
    // console.log("getUser");
    const store = await AsyncStorage.getAllKeys();
    const userData = await AsyncStorage.getItem("user");
    setUser(JSON.parse(userData));

    // console.log("Names", store);
  };

  useEffect(() => {
    getUser();
    AsyncStorage.getItem("token").then((value) => {
      if (value !== null) {
        navigation.replace("Home");
      }
    });
    console.log(loading);
  }, [loading]);

  const submitLogin = async () => {
    // console.log(userId, pass);
    setLoading(true);
    // navigation.replace("Home");

    // AXIOS LOGIN REQUEST
    axios
      .post(`${BASE_URL}/user/login`, {
        email: userId,
        password: pass,
      })
      .then(async (response) => {
        // console.log(response.status);
        if (response.status === 200) {
          // console.log(response.data.access_token);

          try {
            await AsyncStorage.setItem("token", response.data.access_token);
            await AsyncStorage.setItem(
              "user",
              JSON.stringify(response.data.user)
            );
          } catch (error) {
            Alert.alert("Login Faild! Please try again.");
            setLoading(false);
            console.log("storeError:", error);
          } finally {
            console.log("Login Success");
            navigation.replace("Home");
          }
        }
        const store = await AsyncStorage.getAllKeys();
        const token = await AsyncStorage.getItem("user");
        // console.log(store, token);
        setLoading(false);
      })
      .catch(async (error) => {
        Alert.alert("Login Faild! Please try again.");
        console.log("error", error);
        setLoading(false);
      });
    // .finally();
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  logo: {
    height: 120,
    width: 120,
    borderColor: "white",
    borderWidth: 5,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    color: "black",
    marginBottom: 25,
  },
  inputWrapper: {
    width: 300,
  },
  input: {
    color: "black",
    borderColor: "transprent",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginBottom: 20,
    justifyContent: "space-between",
  },
  spinnerTextStyle: {
    color: "red",
    fontWeight: "300",
    fontSize: 14,
  },
});
