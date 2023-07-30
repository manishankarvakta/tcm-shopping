import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function DeleteAccount() {
  const [DeleteAccount, setDeleteAccount] = useState("");

  const handleDeleteAccount = () => {
    //Delete Account
  };
  return (
    <SafeAreaView>
      <View
        style={{
          paddingHorizontal: 10,
          flexDirection: "column",
        }}
      >
        <Text style={{ textAlign: "center", width: "98%", marginTop: 20 }}>
          If you delete your account all your account settings will be removed
          annd some of our promotinal offers will not reach you. However,you
          have 30 days to recover your account .
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleDeleteAccount}>
          <Text style={styles.buttonText}> Delete Account</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "500",
              fontSize: 16,
              color: "#007BFF",
            }}
          >
            Terms & Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 20,
  },
});
