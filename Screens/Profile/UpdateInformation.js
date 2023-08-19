import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import { useUpdateCustomerAddressMutation } from "../Redux/Api/CustomerApi";
import Routes from "../../Utility/Routes";
import { useDispatch } from "react-redux";
import { updateAddresss } from "../Redux/CustomerSlice";

const UpdateInformation = ({ navigation }) => {
  const [holdingNumber, setHoldingNumber] = useState("");
  const [roadNumber, setRoadNumber] = useState("");
  const [sector, setSector] = useState("");
  const [town, setTown] = useState("Uttara");
  const [city, setCity] = useState("Dhaka");
  const [zip, setZip] = useState("");

  const [updateCustomerAddress] = useUpdateCustomerAddressMutation();

  const handleSave = async () => {
    try {
      const updatedAddress = {
        holdingNumber,
        roadNumber,
        sector,
        town,
        city,
        zip,
      };

      const response = await updateCustomerAddress(updatedAddress);
      if (response.data) {
        // Navigating to ManageAddress
        navigation.navigate(Routes.MANAGE_ADDRESS, { updatedAddress });
        Alert.alert("Address updated successfully");
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error updating address:", error);
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <Text style={styles.label}>Holding Number:</Text>
        <TextInput
          style={styles.input}
          value={holdingNumber}
          onChangeText={setHoldingNumber}
        />

        <Text style={styles.label}>Road Number:</Text>
        <TextInput
          style={styles.input}
          value={roadNumber}
          onChangeText={setRoadNumber}
        />

        <Text style={styles.label}>Sector:</Text>
        <TextInput
          style={styles.input}
          value={sector}
          onChangeText={setSector}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Town:</Text>
        <TextInput style={styles.input} value={town} onChangeText={setTown} />

        <Text style={styles.label}>City:</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} />

        <Text style={styles.label}>Zip:</Text>
        <TextInput
          style={styles.input}
          value={zip}
          onChangeText={setZip}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "tomato",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default UpdateInformation;
