import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";

export default function ManageAddress() {
  return (
    <SafeAreaView>
      <TouchableOpacity style={{ flexDirection: "row", paddingVertical: 10 }}>
        <Text>
          {" "}
          <Icon type="antdesign" name="plus" size={17} color="#C38FEE" />{" "}
        </Text>
        <Text style={{ fontWeight: "700", color: "#C38FEE" }}>Add New</Text>
      </TouchableOpacity>

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
                  House 5,Mirpur Road,{"\n"}Tolarbag Mirpur
                </Text>

                <Text style={{ color: "black", fontWeight: "700" }}>
                  Mirpur-1 , Dhaka
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
    borderColor: "#C38FEE",
  },

  ChangeInfo: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-end",
  },
});
