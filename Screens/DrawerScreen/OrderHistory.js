import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import Routes from "../../Utility/Routes";
import axios from "axios";
import BASE_URL from "../../Utility/BaseUrl";
import { useState } from "react";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RenderData = ({ item, navigation }) => {
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
};

export default function OrderHistory({ navigation }) {
  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const [userId, setUserId] = useState("");
  console.log("orderHistoryData", orderHistoryData);

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
        // console.log("UserID:", parsedUser.name);
      } catch (error) {
        console.error("Error getting user:", error);
      }
    };

    getUser();
  }, []);
  //console.log("orderHistoryData:", orderHistoryData);
  useEffect(() => {
    const apiUrl = `${BASE_URL}/ecom/sale/${userId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        console.log("Historydata:", data);
        setOrderHistoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching order history data:", error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <RenderData item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={orderHistoryData.data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
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
