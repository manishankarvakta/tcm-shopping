import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useGetSearchProductQuery } from "../Redux/Api/ProductsApi";
import { PHOTO_URL } from "../../Utility/BaseUrl";
import ProductsCardDesign from "../../Components/ProductsCardDesign";
import ComponentProductCardDesign from "../../Components/ComponentProductCardDesign";
const numColumns = 3;

const SearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [searchData, setSearchData] = useState([]);

  const { data, isSuccess, refetch } = useGetSearchProductQuery(searchText);

  useEffect(() => {
    setSearchData(data || []);
  }, [isSuccess, data]);

  useEffect(() => {
    refetch();
  }, [searchText]);

  useEffect(() => {
    data?.length < 0 && setSearchData([]);
  }, [data]);

  // console.log("searchData", searchD  ata);

  const renderItem = ({ item }) => (
    <ComponentProductCardDesign item={item} navigation={navigation} />
  );
  return (
    <SafeAreaView>
      <View style={{ marginTop: 15 }}>
        {searchData.length === 0 && (
          <>
            <Image
              source={require("../../assets/2650577-removebg-preview.png")}
              style={styles.image}
            />

            <View style={styles.textContainer}>
              <Text style={styles.text}>Search for your desired products</Text>
              <Text style={styles.text}>(e.g. eggs, milk)</Text>
            </View>
          </>
        )}

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchText}
            onChangeText={setSearchText}
            // onSubmitEditing={handleSearch}
          />
        </View>
        <FlatList
          data={searchData}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item._id}
          numColumns={numColumns}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 150,
    marginTop: 50,
  },
  textContainer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  text: {
    fontWeight: "300",
    fontSize: 16,
  },
  searchContainer: {
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 5,
    marginBottom: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});

export default SearchScreen;
