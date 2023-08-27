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
export default function OrderHistoryDetails({ navigation, route }) {
  const { id } = route.params;
  const { data, isSuccess, refetch } = useGetSaleByIdQuery(id);
  const [itemsModalVisible, setItemsModalVisible] = useState(false);

  //console.log(id);
  useEffect(() => {
    // console.log("success");
    //console.log("data", data);
  }, [isSuccess, data]);

  useEffect(() => {
    refetch();
  }, [id]);

  const formattedCreatedAt = new Date(data?.createdAt).toLocaleDateString();
  const roundedPrice = data?.grossTotal.toFixed(2);

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
            <Image
              source={require("../../assets/FlashSales/f9.jpg")}
              style={styles.OrderHistoryImg}
              resizeMode="contain"
            />

            <View style={{ padding: 10, alignSelf: "center" }}>
              <Text>
                <Text style={styles.OrderText}>Order status </Text>
                <Text style={styles.CancelText}>{data?.status}</Text>
              </Text>
              <Text style={{ marginVertical: 5 }}>
                <Text style={{ fontSize: 14, fontWeight: "500" }}>
                  Order ID: #{data?.invoiceId}
                </Text>
              </Text>
            </View>
          </View>

          <View style={styles.headerTitleStyle}>
            <TouchableOpacity style={styles.TitleItemStyle}>
              <Icon
                name="shopping-bag"
                size={25}
                padding={5}
                color="green"
                type="feather"
                paddingRight={5}
              />

              <Text style={styles.ColorSizeStyle}>Reorder</Text>
            </TouchableOpacity>

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
                paddingRight={5}
              />
              <Text style={styles.ColorSizeStyle}>Items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TitleItemStyle}>
              <Icon
                name="cancel"
                size={25}
                padding={5}
                color="green"
                type="MaterialIcons"
                paddingRight={5}
              />
              <Text style={styles.ColorSizeStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.BlankViewStyle} />

          <View style={styles.OrderDeliverTimeStyle}>
            <Text style={{ fontSize: 15, fontWeight: "700" }}>
              {data?.invoiceId}
            </Text>
            <Text>{formattedCreatedAt}</Text>
          </View>

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
                {roundedPrice}
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
              <View style={styles.productItem}>
                <View style={styles.productDetails}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productPrice}>
                    ৳{item.mrp} | {item.qty} pic
                  </Text>
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

  OrderHistoryImg: {
    width: 90,
    height: 90,
    borderRadius: 15,
  },

  OrderText: {
    fontSize: 18,
    fontWeight: "900",
    margin: 10,
  },

  CancelText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#CCCCAE",
    padding: 10,
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

  productImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
  },
  productPrice: {
    fontSize: 14,
    color: "green",
  },

  productItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 10,
    marginLeft: 20,
    position: "relative",
  },

  closeButtonTwo: {
    position: "absolute",
    width: 28,
    height: 28,
    backgroundColor: "white",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "red",
    marginTop: 20,
    alignSelf: "flex-end",

    zIndex: 2,
  },
});
