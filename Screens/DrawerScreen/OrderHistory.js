import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Routes from "../../Utility/Routes";
import axios from "axios";
import BASE_URL from "../../Utility/BaseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RefreshControl } from "react-native";

const RenderData = ({ item, navigation }) => {
  const formattedCreatedAt = new Date(item?.createdAt).toLocaleDateString();
  const roundedPrice = item?.grossTotal?.toFixed(2);

  return (
    <TouchableOpacity
      style={styles.OrderHistorycardStyle}
      onPress={() =>
        navigation.navigate(Routes.ORDER_HISTORY_DETAILS, { id: item?._id })
      }
    >
      <View style={{ padding: 10 }}>
        <View style={styles.OrderIdStyles}>
          <Text style={{ fontWeight: "500" }}>{formattedCreatedAt}</Text>
          <Text style={{ color: "orange" }}>{item?.status}</Text>
        </View>
        <Text style={{ fontWeight: "800", paddingVertical: 5 }}>
          InvoiceId:{`  ${item?.invoiceId}`}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "600" }}>
            total Items : {item?.totalItem}
          </Text>
          <Text style={{ fontWeight: "bold" }}>Total : {roundedPrice}৳</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function OrderHistory({ navigation }) {
  const [orderHistoryData, setOrderHistoryData] = useState([]);
  const [userId, setUserId] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const parsedUser = JSON.parse(user);
        setUserId(parsedUser.id);
      } catch (error) {
        console.error("Error getting user:", error);
      }
    };

    getUser();
  }, []);
  console.log(userId);
  const fetchOrderHistory = async () => {
    const apiUrl = `${BASE_URL}/app/customer/history/${userId}`;
    console.log(apiUrl);

    await axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;
        setOrderHistoryData(data);
        if (response?.data?.length > 0) {
          setLoading(false);
        }

        setRefreshing(false);
      })
      .catch((error) => {
        console.error("Error fetching order history data:", error);
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    if (userId?.length > 0) {
      fetchOrderHistory();
    }

    const refreshInterval = setInterval(fetchOrderHistory, 60000);

    return () => clearInterval(refreshInterval);
  }, [userId]);

  const renderItem = ({ item }) => (
    <RenderData item={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={orderHistoryData}
          renderItem={renderItem}
          keyExtractor={(item) => item._id}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                setRefreshing(true);
                fetchOrderHistory();
              }}
            />
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  OrderHistorycardStyle: {
    backgroundColor: "#F6F8FA",
    padding: 15,
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
