import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function CustomerSupport() {
  return (
    <View style={styles.container}>
      <Text style={styles.supportText}>
        Our customer support number is{" "}
        <Text style={styles.phoneNumber}>16710</Text>. Contact us for any need
        and advice. You can also reach us via email at{" "}
        <Text style={styles.email}>support@tcmbd.com</Text>. Thanks for visiting
        TCM-BD.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  supportText: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 27,
  },
  phoneNumber: {
    color: "tomato",
  },
  email: {
    color: "tomato",
  },
});
