import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import Routes from "../../Utility/Routes";
import { useNavigation } from "@react-navigation/native";

const OrderSuccess = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.inputWrapper}>
            <Text style={styles.RegsuccessText}>Order Confirmed</Text>
          </View>

          <View>
            <Icon name="check-circle" size={150} color={"#12852C"} />
          </View>

          <Text style={styles.SuccessText}>Success</Text>

          <TouchableOpacity
            style={styles.DoneBtn}
            onPress={() => navigation.navigate(Routes.HOME_TAB)}
          >
            <Text>
              <Icon name="check-circle" size={17} color={"white"} />{" "}
              <Text style={styles.DoneText}>BACK TO HOME</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  inputWrapper: {
    marginTop: 100,
    paddingHorizontal: 40,
  },
  RegsuccessText: {
    flexDirection: "row",
    fontSize: 28,
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textAlign: "center",
    color: "#12852C",
    paddingBottom: 50,
  },
  Imgstyle: {
    justifyContent: "center",
    padding: 30,
    position: "absolute",
  },
  SuccessText: {
    fontSize: 28,
    fontStyle: "normal",
    letterSpacing: -0.40799999237060547,
    textAlign: "center",
    color: "#12852C",
    marginTop: 28,
  },
  DoneBtn: {
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    padding: 12,
    borderRadius: 5,
    backgroundColor: "#12852C",
    marginVertical: 40,
  },
  DoneText: {
    fontSize: 14,
    fontWeight: "800",
    fontStyle: "normal",
    lineHeight: 14,
    textAlign: "center",
    color: "white",
  },
});
export default OrderSuccess;
