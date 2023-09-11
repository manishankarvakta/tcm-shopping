import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function ChatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.constructionText}>
        This page is now under construction
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  constructionText: {
    fontSize: 18,
    fontStyle: "italic",
    marginTop: 10,
  },
});
