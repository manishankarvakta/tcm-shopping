import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from "react-native";
import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";

export default function NotificationSettings({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledTwo, setIsEnabledTwo] = useState(false);
  const [isEnabledThree, setIsEnabledThree] = useState(false);
  const [isEnabledFour, setIsEnabledFour] = useState(false);

  const toggleSwitchOne = () => {
    setIsEnabled((previousState) => !previousState);
  };

  const toggleSwitchTwo = () => {
    setIsEnabledTwo((previousState) => !previousState);
  };

  const toggleSwitchThree = () => {
    setIsEnabledThree((previousState) => !previousState);
  };

  const toggleSwitchFour = () => {
    setIsEnabledFour((previousState) => !previousState);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.notificationItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.PERSONAL_INFO)}
          >
            <View style={styles.notificationItemContent}>
              <Text>
                {" "}
                <Icon
                  type="entypo"
                  name="chat"
                  size={25}
                  paddingRight={10}
                  color="#C38FEE"
                />{" "}
              </Text>
              <Text style={styles.notificationItemText}>Text SMS</Text>
            </View>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchOne}
            value={isEnabled}
          />
        </View>

        <View style={styles.notificationItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.PERSONAL_INFO)}
          >
            <View style={styles.notificationItemContent}>
              <Text>
                {" "}
                <Icon
                  type="feather"
                  name="phone-call"
                  size={25}
                  paddingRight={10}
                  color="#C38FEE"
                />{" "}
              </Text>
              <Text style={styles.notificationItemText}>Phone Call</Text>
            </View>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledTwo ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchTwo}
            value={isEnabledTwo}
          />
        </View>

        <View style={styles.notificationItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.PERSONAL_INFO)}
          >
            <View style={styles.notificationItemContent}>
              <Text>
                {" "}
                <Icon
                  type="fontisto"
                  name="email"
                  size={25}
                  paddingRight={10}
                  color="#C38FEE"
                />{" "}
              </Text>
              <Text style={styles.notificationItemText}>
                Email Notifications
              </Text>
            </View>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledThree ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchThree}
            value={isEnabledThree}
          />
        </View>

        <View style={styles.notificationItem}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Routes.PERSONAL_INFO)}
          >
            <View style={styles.notificationItemContent}>
              <Text>
                {" "}
                <Icon
                  type="feather"
                  name="smartphone"
                  size={25}
                  paddingRight={10}
                  color="#C38FEE"
                />{" "}
              </Text>
              <Text style={styles.notificationItemText}>
                Push Notifications
              </Text>
            </View>
          </TouchableOpacity>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabledFour ? "#fff" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitchFour}
            value={isEnabledFour}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  notificationItemContent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  notificationItemText: {
    fontSize: 17,
    fontWeight: "500",
    alignSelf: "center",
  },
  saveButton: {
    backgroundColor: "#C38FEE",
    paddingVertical: 15,
    marginHorizontal: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
