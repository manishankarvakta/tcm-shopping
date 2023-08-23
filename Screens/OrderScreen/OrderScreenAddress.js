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
  Alert,
} from "react-native";
import React, { useEffect } from "react";
import {
  useCustomerQuery,
  useUpdateCustomerAddressMutation,
} from "../Redux/Api/CustomerApi";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { UpdateCustomerDeliveryInfo } from "../Redux/CartSlice";
import Routes from "../../Utility/Routes";

export default function OrderScreenAddress({ navigation }) {
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
  const dispatch = useDispatch();
  const [updateAddress] = useUpdateCustomerAddressMutation();

  const { data, isSuccess, refetch } = useCustomerQuery(userId);

  useEffect(() => {
    setUserData(data);
  }, [isSuccess, data]);

  useEffect(() => {
    refetch();
  }, [userId]);

  // console.log("data=>", userData);
  console.log("data=>", holdingNumber);

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

  useEffect(() => {
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

    setUserAddress(updatedAddress);

    // console.log("updateAddress:", userData);
    setModalVisible(false);
  };
  // console.log(userAddress);

  const AddressSave = async () => {
    // console.log("saveData", userData);
    const update = updateAddress(userData);

    if (update) {
      refetch();
      Alert.alert("user address update successfull");
    }
  };

  const handdleAddress = (item) => {
    dispatch(UpdateCustomerDeliveryInfo(item));
    navigation.navigate(Routes.CONFIRM_ORDER);
  };

  const AddressCard = (item) => {
    // console.log("item:", item);
    return (
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => handdleAddress(item)}
      >
        <View style={styles.AddressDetails}>
          <View style={{ flexDirection: "row" }}>
            <View>
              <Text>
                <Icon
                  type="feather"
                  name="check-circle"
                  size={17}
                  color="#C38FEE"
                />
              </Text>
            </View>
            <View>
              <View style={{ marginLeft: 5 }}>
                <Text style={{ fontWeight: "700" }}>{`${item?.type}`}</Text>
                <Text style={{ color: "#333333" }}>
                  <Text style={{ fontWeight: "600" }}>
                    Holding No: {`${item?.holdingNumber}`} ,{"\n"}
                  </Text>
                  <Text style={{ fontWeight: "600" }}>
                    Road No: {`${item?.roadNumber}`}
                  </Text>
                  ,{"\n"}
                  <Text style={{ fontWeight: "600" }}>
                    Sector No: {`${item?.sector}`}
                  </Text>
                </Text>

                <Text style={{ color: "black", fontWeight: "600" }}>
                  {`${item?.town},${item?.city},${item?.zip}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleAddAddress()}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>

      <FlatList
        data={userData?.address}
        renderItem={({ item, index }) => AddressCard(item, index)}
        keyExtractor={(item) => item.index}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setModalVisible(true)}
      >
        <Icon name="plus" size={20} color="white" style={{ marginRight: 5 }} />
        <Text style={styles.buttonText}>Add New</Text>
      </TouchableOpacity>
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
    backgroundColor: "#ECEDE8",
    marginVertical: 5,
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
  buttonStyle: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
});
