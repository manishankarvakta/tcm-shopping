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
import { RefreshControl } from "react-native";

const RenderData = ({ item, navigation }) => {
  //console.log("itemData", item);

  return (
    <View style={styles.OrderHistorycardStyle}>
      <View style={{ padding: 10 }}>
        <View style={styles.OrderIdStyles}>
          <Text style={{ fontWeight: "700" }}>
            Order Id:{`  ${item?.invoiceId}`}
          </Text>
          <Text style={{ color: "orange" }}>{item?.status}</Text>
        </View>

        {item?.products.map((product, index) => (
          <View key={index}>
            <Text style={{ fontWeight: "600", color: "green" }}>
              {product?.name}
            </Text>

            <View style={styles.OrderPricesStyle}>
              <Text style={{ fontWeight: "bold" }}>৳{product?.mrp}</Text>
              <Text style={{ marginHorizontal: 10, marginTop: 2 }}>
                {" "}
                | {product?.qty} items
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.IconDetails}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(Routes.ORDER_HISTORY_DETAILS, { id: item?._id })
          }
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
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
        // console.log("UserID:", parsedUser.id);
      } catch (error) {
        // console.error("Error getting user:", error);
      }
    };

    getUser();
  }, []);
  //console.log("orderHistoryData:", orderHistoryData);
  const fetchOrderHistory = () => {
    const apiUrl = `${BASE_URL}/app/customer/history/${userId}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setOrderHistoryData(data);
        setRefreshing(false); // Stop refreshing when data is loaded
      })
      .catch((error) => {
        console.error("Error fetching order history data:", error);
        setRefreshing(false); // Stop refreshing on error
      });
  };

  useEffect(() => {
    // Fetch initial order history data
    fetchOrderHistory();

    // Set up an interval to auto-refresh every X seconds (e.g., every 60 seconds)
    const refreshInterval = setInterval(fetchOrderHistory, 60000); // Adjust the interval as needed

    // Clean up the interval when the component unmounts
    return () => clearInterval(refreshInterval);
  }, [userId]);

  const renderItem = ({ item }) => (
    <RenderData item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView>
      <FlatList
        data={orderHistoryData}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        refreshControl={
          // Add refresh control to the FlatList
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true); // Start refreshing when the user manually pulls down
              fetchOrderHistory(); // Fetch data when the user manually refreshes
            }}
          />
        }
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
    paddingVertical: 2,
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
