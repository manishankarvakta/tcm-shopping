import React from "react";
import { View, StyleSheet, Image } from "react-native";
import {
  TextInput,
  RadioButton,
  Button,
  Text,
  Avatar,
} from "react-native-paper";

const PersonalInfo = () => {
  const [name, setName] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [area, setArea] = React.useState("");
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Avatar.Image
          source={require("../../assets/mansurol.jpeg")} // Replace with your image path
          size={120}
          style={styles.avatar}
        />
      </View>
      <View style={{ paddingTop: 15 }}>
        <TextInput
          label="FullName"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />

        <TextInput
          label="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          style={styles.input}
        />

        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />

        <TextInput
          label="Area"
          value={area}
          onChangeText={(text) => setArea(text)}
          style={styles.input}
        />
        <View>
          <Text style={{ paddingVertical: 5 }}>Gender</Text>
          <RadioButton.Group
            onValueChange={(value) => setGender(value)}
            value={gender}
          >
            <View style={styles.radioGroup}>
              <RadioButton.Item label="Male" value="male" color="#C38FEE" />
              <RadioButton.Item label="Female" value="female" color="#C38FEE" />
            </View>
          </RadioButton.Group>
        </View>

        <Button mode="contained">Save</Button>
      </View>
    </View>
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
