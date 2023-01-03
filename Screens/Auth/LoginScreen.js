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
import Routes from "../../Utility/Routes";

const LoginScreen = ({ navigation }) => {
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
        navigation.navigate(Routes.HOME);
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
            navigation.replace(Routes.HOME_TAB);
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

  const forgotPassword = () => {
    console.log("forgot Pass");
  };
  const register = () => {
    console.log("register");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <StatusBar style="light" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={[styles.container]}
      >
        <Spinner
          //visibility of Overlay Loading Spinner
          visible={loading}
          //Text with the Spinner
          textContent={"Loading..."}
          //Text style of the Spinner Text
          textStyle={styles.spinnerTextStyle}
        />
        <Avatar source={require("../../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputWrapper}>
          <Input
            style={styles.input}
            placeholder="@user Id"
            value={userId}
            onChangeText={(text) => setUserId(text)}
            leftIcon={
              <Icon name="user" type="ant-design" size={24} color="gray" />
            }
          />
          <Input
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={pass}
            onChangeText={(text) => setPass(text)}
            leftIcon={
              <Icon name="key" type="ant-design" size={24} color="gray" />
            }
          />
          <Button
            type="solid"
            color="error"
            buttonStyle={{ borderRadius: 50, padding: 13, fontWeight: 600 }}
            style={styles.button}
            onPress={() => submitLogin()}
          >
            <Icon
              name="lock"
              type="ant-design"
              color="white"
              style={{ marginRight: 10 }}
            />
            Login
          </Button>
          <Button
            type="Link"
            color="error"
            buttonStyle={{ fontWeight: 400 }}
            style={styles.button}
            onPress={() => navigation.navigate(Routes.FORGOT_PASSWORD)}
          >
            <Icon
              name="lock"
              type="ant-design"
              color="white"
              style={{ marginRight: 10 }}
            />
            Forgot Password
          </Button>
        </View>
      </KeyboardAvoidingView>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 40,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
          }}
        >
          <Button
            type="solid"
            color="error"
            buttonStyle={{
              width: 300,
              borderRadius: 50,
              padding: 13,
              fontWeight: 600,
            }}
            style={styles.button}
            onPress={() => navigation.navigate(Routes.REGISTER)}
          >
            <Icon
              name="lock"
              type="ant-design"
              color="white"
              style={{ marginRight: 10 }}
            />
            Register
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "red",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginHorizontal: 25,
    paddingVertical: 20,
    backgroundColor: "rgba(255, 255, 255, .80)",
    borderRadius: 16,
    shadowColor: "#171717",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 30,
    // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5.2px)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
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
