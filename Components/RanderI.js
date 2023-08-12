import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "@rneui/base";
import Routes from "../Utility/Routes";

export default function RenderI({ item, navigation }) {
  return (
    <View style={styles.OrderHistorycardStyle}>
      <View style={{ padding: 10 }}>
        <View style={styles.OrderIdStyles}>
          <Text>{`Order Id ${item.orderId}`}</Text>
          <Text style={{ color: "orange" }}>{item.status}</Text>
        </View>

        <Text>{item.date}</Text>

        <View style={styles.OrderPricesStyle}>
          <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
          <Text style={{ marginHorizontal: 10 }}>{item.shipment}</Text>
        </View>
      </View>

      <View style={styles.BlankViewThree} />

      <View style={styles.IconDetails}>
        <TouchableOpacity
          onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)}
          style={{ flexDirection: "row" }}
        >
          <Icon
            name="filetext1"
            size={16}
            color="gray"
            type="ant-design"
            paddingRight={5}
          />
          <Text style={styles.DetailsTextStyle}>Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  OrderHistorycardStyle: {
    backgroundColor: "#F6F8FA",
    marginHorizontal: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  OrderIdStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 2,
  },
  OrderPricesStyle: {
    flexDirection: "row",
    paddingTop: 15,
    paddingBottom: 10,
  },
  BlankViewThree: {
    borderWidth: 0.4,
    borderTopColor: "#E9EBEC",
  },
  IconDetails: {
    flexDirection: "row",
    paddingVertical: 10,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  DetailsTextStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#0D569E",
  },
});
