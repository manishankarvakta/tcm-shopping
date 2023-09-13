import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView, // Import KeyboardAvoidingView
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import BASE_URL from "../../Utility/BaseUrl";
import Routes from "../../Utility/Routes";

const RegisterScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const submitRegistration = async () => {
    setLoading(true);

    // AXIOS REGISTER REQUEST
    axios
      .post(`${BASE_URL}/ecom/customer/register`, {
        fullName: fullName,
        phone: phone,
        password: password,
      })
      .then(async (response) => {
        if (response.status === 200) {
          try {
            await AsyncStorage.setItem("token", response.data.access_token);
            await AsyncStorage.setItem(
              "user",
              JSON.stringify(response.data.user)
            );
            setLoading(false);
            navigation.replace(Routes.LOGIN);
          } catch (error) {
            Alert.alert("Registration Failed! Please try again.");
            setLoading(false);
          }
        }
      })
      .catch((error) => {
        Alert.alert("Registration Failed! Please try again.");
        setLoading(false);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding" // Adjust the behavior according to your preference
    >
      <Text style={styles.title}>Create an Account</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          value={fullName}
          onChangeText={(text) => setFullName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity style={styles.button} onPress={submitRegistration}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  inputWrapper: {
    width: 300,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#ff6347",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
