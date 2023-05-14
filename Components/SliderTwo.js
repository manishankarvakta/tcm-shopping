import { FlatList, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const data = [
    { id: '1', imageUrl: require("../assets/image1.jpg") },
    { id: '2', imageUrl: require("../assets/img66.jpg") },
    { id: '3', imageUrl: require("../assets/image1.jpg") },
    { id: '4', imageUrl: require("../assets/img66.jpg") },
    { id: '5', imageUrl: require("../assets/img66.jpg") },
    { id: '6', imageUrl: require("../assets/image1.jpg") },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

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
              height: 250,
              marginHorizontal: 10,
              marginVertical: 5,
              borderRadius: 10,
              opacity: index === activeIndex ? 1 : 0.5,
            }}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
      onMomentumScrollEnd={(event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / 376);
        setActiveIndex(index);
      }}
    />
  );
};

export default Slider;
