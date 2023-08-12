import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import RenderI from "../../Components/RanderI";

const orderHistoryData = [
  {
    orderId: "12345",
    status: "Processing",
    date: "Jun 12, 2023",
    price: "$255",
    shipment: "1 Shipment",
  },
  {
    orderId: "54321",
    status: "Delivered",
    date: "Aug 20, 2023",
    price: "$155",
    shipment: "1 Shipment",
  },
  // Add more fake data items here
];

export default function OrderHistory({ navigation }) {
  const renderItem = ({ item }) => (
    <RenderI item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={orderHistoryData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}
