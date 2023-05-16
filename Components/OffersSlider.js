import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
  } from "react-native";
  import React from "react";
  // import { Image } from "@rneui/themed";
  
  const OffersSlider = () => {
    const data = [
      { url: require("../assets/FlashSales/f3.jpg") },
      { url: require("../assets/image2.jpg") },
      { url: require("../assets/Freshfood/3.jpg") },
      { url: require("../assets/PopularProduct/p3.jpg") },
      { url: require("../assets/PopularProduct/p7.jpg") },
      { url: require("../assets/FlashSales/f6.jpg") },
      { url: require("../assets/PopularProduct/p3.jpg") },
    ];
  
    return (
      <FlatList
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Image
              onPress={() => alert(item.url)}
              source={item.url}
              style={{
                width: 200,
                height: 120,
                marginHorizontal: 5,
                marginVertical: 10,
                borderRadius: 10,
              }}
            />
            {/* <Text>{`../assets/${item.key}.jpg`}</Text> */}
          </TouchableOpacity>
        )}
      />
    );
  };
  
  export default OffersSlider;
  
  const styles = StyleSheet.create({});