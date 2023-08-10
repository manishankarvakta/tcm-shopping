import { FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const data = [
    { id: "1", imageUrl: require("../assets/image1.jpg") },
    { id: "2", imageUrl: require("../assets/img66.jpg") },
    { id: "3", imageUrl: require("../assets/image1.jpg") },
    { id: "4", imageUrl: require("../assets/img66.jpg") },
    { id: "5", imageUrl: require("../assets/img66.jpg") },
    { id: "6", imageUrl: require("../assets/image1.jpg") },
  ];

  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <TouchableOpacity>
          <Image
            onPress={() => alert(item.imageUrl)}
            source={item.imageUrl}
            style={{
              width: 356,
              height: 170,
              marginHorizontal: 10,
              marginVertical: 15,
              borderRadius: 20,
              resizeMode: "stretch",
            }}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Slider;
