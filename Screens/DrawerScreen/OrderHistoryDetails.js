import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Icon } from "@rneui/base";
import { useGetSaleByIdQuery } from "../Redux/Api/SalesApi";
import { PHOTO_URL } from "../../Utility/BaseUrl";
export default function OrderHistoryDetails({ navigation, route }) {
  const { id } = route.params;
  const { data, isSuccess, refetch } = useGetSaleByIdQuery(id);
  const [itemsModalVisible, setItemsModalVisible] = useState(false);
  const [History, setHistory] = useState();

  // console.log("data", id);
  console.log("dataTwo", data);

  useEffect(() => {
    data && setHistory(data);
  }, [isSuccess, data]);

  useEffect(() => {
    refetch();
  }, [id]);

  const formattedCreatedAt = new Date(data?.createdAt).toLocaleDateString();
  const roundedPrice = data?.grossTotal?.toFixed(2);

  const Address = data?.customerId?.address[0];
  //console.log("hi", Address?.city);
  // console.log("holdingNo", holdingNo);

  //const hle = data;
  //console.log("hle:", hle);

  const openItemsModal = () => {
    setItemsModalVisible(true);
  };

  const closeItemsModal = () => {
    setItemsModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View>
        <View>
          <View style={styles.OrderHistoryDetailsScreenStyle}>
            <View style={styles.headerTitleStyle}>
              <TouchableOpacity
                style={styles.TitleItemStyle}
                onPress={openItemsModal}
              >
                <Icon
                  name="shopping-basket"
                  size={25}
                  padding={5}
                  color="green"
                  type="Fontisto"
                  paddingBottom={5}
                  paddingRight={5}
                />
                <Text style={styles.ColorSizeStyle}>Items List</Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                paddingHorizontal: 5,
                alignSelf: "center",
              }}
            >
              <Text>
                <Text style={styles.OrderText}>Order status </Text>
                <Text style={styles.CancelText}>{data?.status}</Text>
              </Text>
              <Text>
                <Text style={{ fontSize: 13, fontWeight: "500" }}>
                  Order ID: #{data?.invoiceId}
                </Text>{" "}
              </Text>
              <Text>{formattedCreatedAt}</Text>
            </View>
          </View>

          <View style={styles.BlankViewStyle} />

          <View style={styles.ReturnItemTextStyle}>
            <View style={styles.CommonTextStyle}>
              <Icon
                name="box-open"
                size={25}
                color="orange"
                type="font-awesome-5"
              />
              <Text style={styles.ReturnTextStyle}>Return Items</Text>
            </View>

            <TouchableOpacity>
              <Icon
                name="keyboard-arrow-right"
                size={30}
                color="gray"
                type="MaterialIcons"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.ReportIssuesStyle}>
            <View style={styles.CommonTextStyle}>
              <Icon
                name="report-problem"
                size={25}
                color="red"
                type="MaterialIcons"
              />
              <Text style={styles.ReportText}>Report Issues</Text>
            </View>

            <TouchableOpacity>
              <Icon
                name="keyboard-arrow-right"
                size={30}
                color="gray"
                type="MaterialIcons"
              />
            </TouchableOpacity>
          </View>

          <View style={{ marginHorizontal: 10, marginTop: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>
              Delivery details
            </Text>
            <View style={{ flexDirection: "row", paddingVertical: 15 }}>
              <Icon name="home" size={30} color="gray" type="FontAwesome" />
              <View style={{ paddingHorizontal: 10 }}>
                <Text>
                  House {Address?.holdingNo} ,Road {Address?.street} , Sector{" "}
                  {Address?.sector} {"\n"}
                  {Address?.town} ,{Address?.city} - {Address?.zipCode}
                </Text>
                <Text style={{ fontWeight: "700", paddingTop: 3 }}>
                  {data?.customerId?.phone}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.BlankViewTwoStyle}></View>

          <View style={{ padding: 10 }}>
            <Text>
              <Text style={{ fontWeight: "900", fontSize: 16 }}>
                Total Amount :
              </Text>{" "}
              <Text style={{ fontSize: 14, color: "green" }}>
                {roundedPrice} Tk
              </Text>
            </Text>
          </View>
        </View>
      </View>

      <Modal
        animationType="slide"
        visible={itemsModalVisible}
        onRequestClose={closeItemsModal}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={styles.closeButtonTwo}
            onPress={() => setItemsModalVisible(false)}
          >
            <Icon type="antdesign" name="close" size={24} color="red" />
          </TouchableOpacity>
          <FlatList
            data={data?.products}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.CartProductStyle}>
                <View style={{}}>
                  <Image
                    source={{ uri: `${PHOTO_URL}${item.photo}` }}
                    style={styles.CartProductImgStyle}
                  />
                </View>

                <View
                  style={{
                    justifyContent: "space-between",
                    paddingHorizontal: 10,
                  }}
                >
                  <View style={{ width: 180 }}>
                    <Text style={{ fontSize: 14, fontWeight: "500" }}>
                      {item.name}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: "red" }}>৳{item.mrp} </Text>

                    <Text> | {item.qty} pcs</Text>
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={styles.itemsModalContent}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OrderHistoryDetailsScreenStyle: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  CartProductStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingVertical: 10,
    borderWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#F3F6FD",
    borderColor: "#ddd",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 55,
    height: 80,
  },
  CartProductImgStyle: {
    width: 60,
    height: 65,

    borderRadius: 10,
  },

  OrderText: {
    fontSize: 18,
    fontWeight: "900",
    margin: 10,
  },

  headerTitleStyle: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  TitleItemStyle: {
    alignItems: "center",
    marginHorizontal: 10,
  },

  ColorSizeStyle: {
    color: "green",
    fontSize: 15,
  },
  OrderDeliverTimeStyle: {
    backgroundColor: "#AEBDC6",
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },

  BlankViewStyle: {
    borderWidth: 0.4,
    borderTopColor: "#BABCBE",
    marginHorizontal: 10,
    marginTop: 10,
  },

  ReturnItemTextStyle: {
    backgroundColor: "#DEE1E6",
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
  },

  ReportIssuesStyle: {
    backgroundColor: "#DEE1E6",
    justifyContent: "space-between",
    marginHorizontal: 10,
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: "row",
  },

  CommonTextStyle: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  ReturnTextStyle: {
    fontSize: 15,
    fontWeight: "500",
    padding: 3,
    color: "gray",
    marginLeft: 10,
  },

  ReportText: {
    fontSize: 15,
    fontWeight: "500",
    padding: 3,
    color: "gray",
    marginLeft: 10,
  },
  BlankViewTwoStyle: {
    borderWidth: 0.5,
    borderTopColor: "#BABCBE",
    marginHorizontal: 10,
  },

  itemsModalContent: {
    flex: 1,
    padding: 10,
  },

  productItem: {
    paddingBottom: 10,
    marginLeft: 20,
    position: "relative",
  },

  closeButtonTwo: {
    position: "absolute",
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    marginTop: 20,
    alignSelf: "flex-end",
    marginBottom: 10,
    zIndex: 2,
  },
});
