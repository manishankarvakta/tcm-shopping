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
import { useState } from "react";

export default function ManageAddress({ navigation }) {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [userAddress, setUserAddress] = useState();

  const [type, setType] = useState("Home");
  const [holdingNumber, setHoldingNumber] = useState("");
  const [roadNumber, setRoadNumber] = useState("");
  const [sector, setSector] = useState("");
  const [town, setTown] = useState("Uttara");
  const [city, setCity] = useState("Dhaka");
  const [zip, setZip] = useState("");

  const { data, isSuccess } = useCustomerQuery(userId);
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

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ color: "#C38FEE" }}>Edit</Text>
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
        <TouchableOpacity
          onPress={() => setModalVisible(false)}
          style={styles.closeIconContainer}
        >
          <View style={styles.closeIconCircle}>
            <Icon type="antdesign" name="close" size={24} color="red" />
          </View>
        </TouchableOpacity>

        <KeyboardAvoidingView behavior="padding" style={styles.modalContainer}>
          <Text style={styles.modalTitle}>New Address</Text>
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

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAddAddress}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
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
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: "25%",
    height: 40,
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 80,
  },

  closeIconContainer: {
    position: "absolute",
    top: 35,
    right: 20,
    zIndex: 1,
  },
  closeIconCircle: {
    width: 28,
    height: 28,
    backgroundColor: "white",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center", // Center the buttons vertically
    marginHorizontal: 15,
  },

  ChangeInfo: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
