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

const ImageCarousel = () => {
  const data = [
    { url: require("../assets/image1.jpg") },
    { url: require("../assets/image2.jpg") },
    { url: require("../assets/image3.jpg") },
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
              height: 100,
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

export default ImageCarousel;

const styles = StyleSheet.create({});
