import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect } from "react";
import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";
import { useSelector } from "react-redux";
import { useCustomerQuery } from "../Redux/Api/CustomerApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-native-elements";

export default function ManageAddress({ navigation }) {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const { data, isSuccess } = useCustomerQuery(userId);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userAddress, setUserAddress] = useState();

  const [type, setType] = useState("Home");
  const [holdingNumber, setHoldingNumber] = useState("");
  const [roadNumber, setRoadNumber] = useState("");
  const [sector, setSector] = useState("");
  const [town, setTown] = useState("Uttara");
  const [city, setCity] = useState("Dhaka");
  const [zip, setZip] = useState("");

  console.log("userData", userData);
  useEffect(() => {
    setUserData(data);
  }, [isSuccess, data]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
        // console.log("UserID:", parsedUser.name);
      } catch (error) {
        console.error("Error getting user:", error);
      }
    };

    getUser();
  }, []);

  console.log("data", userData);

  // console.log("loggedinCustomer:", loggedinCustomer);

  useEffect(() => {
    // const userAddress = userData?.address;
    setUserAddress(userData?.address);
  }, [userData]);

  const handleAddAddress = () => {
    const updatedAddress = {
      type,
      holdingNumber,
      roadNumber,
      sector,
      town,
      city,
      zip,
    };
    setUserData({
      ...userData,
      address: [...userAddress, updatedAddress],
    });
    //.address = [...userAddress, updatedAddress];

    console.log("updateAddress:", userData);
    setModalVisible(false);
  };
  console.log(userAddress);

  const AddressCard = (item) => {
    console.log("item:", item);
    return (
      <View style={styles.AddressDetails}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text>
              <Icon
                type="feather"
                name="check-circle"
                size={17}
                color="#C38FEE"
              />{" "}
            </Text>
          </View>
          <View>
            <View>
              <View>
                <Text style={{ color: "#333333" }}>
                  {`${item?.item?.holdingNumber},${item?.item?.roadNumber},${item?.item?.sector}`}
                </Text>

                <Text style={{ color: "black", fontWeight: "700" }}>
                  {`${item?.item?.town},${item?.item?.city},${item?.item?.zip}`}
                </Text>
                <Text style={{ color: "#333333" }}>+8801680622993</Text>
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity>
          <Text style={{ color: "#C38FEE" }}>VIEW</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView behavior="padding" style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Add New Address</Text>
          <TextInput
            placeholder=""
            style={styles.input}
            value={type}
            onChangeText={setType}
          />
          <TextInput
            placeholder="Holding Number"
            style={styles.input}
            value={holdingNumber}
            onChangeText={setHoldingNumber}
          />
          <TextInput
            placeholder="Road Number"
            style={styles.input}
            value={roadNumber}
            onChangeText={setRoadNumber}
          />
          <TextInput
            placeholder="sector"
            style={styles.input}
            value={sector}
            onChangeText={setSector}
          />
          <TextInput
            placeholder="town"
            style={styles.input}
            value={town}
            onChangeText={setTown}
          />
          <TextInput
            placeholder="City"
            style={styles.input}
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            placeholder="zip"
            style={styles.input}
            value={zip}
            onChangeText={setZip}
          />
          {/* Add more input fields as needed */}
          <View style={{ flexDirection: "row", margin: 5 }}>
            <Button title="Submit" onPress={handleAddAddress} />
            <Button
              style={{ marginHorizontal: 5 }}
              title="Cancel"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <TouchableOpacity
        style={{ flexDirection: "row", paddingVertical: 10 }}
        onPress={() => setModalVisible(true)}
      >
        <Text>
          {" "}
          <Icon type="antdesign" name="plus" size={17} color="#C38FEE" />{" "}
        </Text>

        <Text style={{ fontWeight: "700", color: "#C38FEE" }}>Add New</Text>
      </TouchableOpacity>

      <FlatList
        data={userData?.address}
        renderItem={AddressCard}
        keyExtractor={(item) => item.index}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AddressDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "white",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  ChangeInfo: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
