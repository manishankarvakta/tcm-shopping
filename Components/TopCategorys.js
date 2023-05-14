import React, { useState } from 'react';
import { View, Text, ScrollView,StyleSheet, Image, TouchableOpacity } from 'react-native';

const TopCategorys = () => {
  const [data, setData] = useState([
    { id: '1', imageUrl: "https://i.ibb.co/rdZ9MMJ/category-f6939a4160010043a11b.jpg", title: 'Item 1' },
    { id: '2', imageUrl: "https://i.ibb.co/31CCyhk/image.png", title: 'Item 2' },
    { id: '3', imageUrl: "https://i.ibb.co/rdZ9MMJ/category-f6939a4160010043a11b.jpg", title: 'Item 1' },
    { id: '4', imageUrl: "https://i.ibb.co/31CCyhk/image.png", title: 'Item 2' },
  
  ]);

  const renderItem = (item, index) => {
    if (index % 2 !== 0) {
      return null; // don't render anything for odd indices
    }

    const item2 = data[index + 1]; // get the next item in the array

    return (
      <View key={item.id} style={{ flexDirection: 'row' }}>
        <TouchableOpacity>
          <Image
            source={{ uri: item.imageUrl }}
            style={{ width: 170, height:120,margin:5 ,borderRadius:10 }}
          />
        </TouchableOpacity>
        {item2 && (
          <TouchableOpacity>
            <Image
              source={{ uri: item2.imageUrl }}
              style={{ width: 170,height:120,margin:5 ,borderRadius:10 }}
            />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <ScrollView>
      {data.map((item, index) => renderItem(item, index))}
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return null; // don't render anything for even indices
        }

        
      })}
    </ScrollView>
  );
};

export default TopCategorys;

const styles = StyleSheet.create({

      
    row: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding:10,
    },
  
  
  });