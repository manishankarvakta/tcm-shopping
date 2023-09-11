import React from "react";
import { View, StyleSheet, Image, ScrollView, Alert } from "react-native";
import {
  TextInput,
  RadioButton,
  Button,
  Text,
  Avatar,
} from "react-native-paper";
import {
  useCustomerQuery,
  useUpdateCustomerAddressMutation,
} from "../Redux/Api/CustomerApi";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

const PersonalInfo = () => {
  const [userUpdate] = useUpdateCustomerAddressMutation();
  const [UserInfo, setUserInfo] = useState();
  //console.log("UserInfo:", UserInfo);

  const [name, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [dateOfBirth, setDateOfBirth] = React.useState("");

  const { data, isSuccess, refetch } = useCustomerQuery(UserInfo);

  useEffect(() => {
    if (data) {
      console.log(data);
      setFirstName(data?.name);
      setEmail(data?.email);
      setPhone(data?.phone);
      setGender(data?.gender);
      setDateOfBirth(data?.dob);
    }
  }, [data, isSuccess]);

  const getUser = async () => {
    // console.log("getUser");
    const store = await AsyncStorage.getAllKeys();
    const userData = await AsyncStorage.getItem("user");
    const user = JSON.parse(userData);
    setUserInfo(user.id);
  };
  getUser();

  const handleUser = async () => {
    const updatedUser = {
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      dob: dateOfBirth,
    };
    console.log("update", updatedUser);
    const update = await userUpdate({ id: UserInfo, updatedUser });

    if (update) {
      console.log("updateUser:", update);
      const userData = await AsyncStorage.getItem("user");
      const user = JSON.parse(userData);
      const newUser = { ...user, update };

      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      Alert.alert("User Update SuccessFul");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Avatar.Image
          source={require("../../assets/user.png")}
          size={100}
          style={styles.avatar}
        />
      </View>
      <View style={{ paddingTop: 15 }}>
        <TextInput
          label="Full Name"
          value={name}
          onChangeText={(text) => setFirstName(text)}
          style={styles.input}
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />

        <TextInput
          label="Date of Birth"
          value={dateOfBirth}
          onChangeText={(text) => setDateOfBirth(text)}
          style={styles.input}
        />

        <View>
          <Text style={{ paddingVertical: 5 }}>Gender</Text>
          <RadioButton.Group
            onValueChange={(value) => setGender(value)}
            value={gender}
          >
            <View style={styles.radioGroup}>
              <RadioButton.Item
                label="Male"
                value="male"
                color="#C38FEE"
                status={gender === "Male" ? "checked" : "unchecked"}
              />
              <RadioButton.Item
                label="Female"
                value="female"
                color="#C38FEE"
                status={gender === "Male" ? "checked" : "unchecked"}
              />
            </View>
          </RadioButton.Group>
        </View>

        <Button mode="contained" onPress={handleUser}>
          Update
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
  },
});

export default PersonalInfo;
