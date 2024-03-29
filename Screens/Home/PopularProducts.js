import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useGetPopularProductsQuery } from "../Redux/Api/ProductsApi";
import { Button, Text } from "react-native-elements";
import ProductsCardDesign from "../../Components/ProductsCardDesign";

const numColumns = 2;
const initialItemCount = 6;

const PopularProducts = () => {
  const [visibleItemCount, setVisibleItemCount] = useState(initialItemCount);
  const navigation = useNavigation();
  const [product, setProduct] = useState([]);
  const {
    data,
    isSuccess,
    isError,
    isFetching,
    refetch,
    error,
  } = useGetPopularProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      // Update product data when it's successfully fetched
      setProduct(data || []);
    }
  }, [isSuccess, data]);

  const loadMoreItems = () => {
    const newVisibleItemCount = visibleItemCount + 6; // Load 6 more items
    setVisibleItemCount(newVisibleItemCount);
  };

  const renderItem = ({ item }) => (
    <ProductsCardDesign item={item} navigation={navigation} />
  );

  const renderFooter = () => {
    if (isFetching) {
      return <ActivityIndicator size="small" color="tomato" />;
    }
    if (visibleItemCount < product.length) {
      return (
        <Button
          title="Load More"
          onPress={loadMoreItems}
          type="outline"
          buttonStyle={{ backgroundColor: "transparent", borderWidth: 0 }}
          titleStyle={{ color: "tomato" }}
        />
      );
    }
    return null;
  };

  return (
    <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
      <FlatList
        data={product.slice(0, visibleItemCount)}
        renderItem={renderItem}
        onRefresh={refetch}
        refreshing={isFetching}
        keyExtractor={(item) => item._id}
        numColumns={numColumns}
        ListFooterComponent={renderFooter}
      />
      {isError && <Text>Error: {error.message}</Text>}
    </View>
  );
};

export default PopularProducts;

//three colums
// import React, { useEffect, useState } from "react";
// import {
//   View,
//   TouchableOpacity,
//   FlatList,
//   StyleSheet,
//   Dimensions,
//   Image,
//   Text,
// } from "react-native";
// import { Icon } from "@rneui/base";
// import Routes from "../../Utility/Routes";
// import { useNavigation } from "@react-navigation/native";
// import { useGetPopularProductsQuery } from "../Redux/Api/ProductsApi";
// const numColumns = 3;
// const itemWidth = Dimensions.get("window").width / numColumns;
// import { PHOTO_URL } from "../../Utility/BaseUrl";
// import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../Redux/CartSlice";
// import { addFavoriteProduct } from "../Redux/WishListSlice";

// const PopularProducts = () => {
//   const navigation = useNavigation();
//   const [product, setProduct] = useState([]);
//   const [favoriteItems, setFavoriteItems] = useState([]);

//   const { data, isSuccess, isError, isFetching, refetch } =
//     useGetPopularProductsQuery();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     data?.length > 0 && setProduct(data);
//   }, [isSuccess]);

//   const truncateName = (name) => {
//     const maxLength = 12; // Define the maximum length for the name
//     if (name.length > maxLength) {
//       return name.substring(0, maxLength - 3) + "..."; // Truncate and add "..." at the end
//     }
//     return name;
//   };

//   const handleFavoriteToggle = (item) => {
//     dispatch(addFavoriteProduct(item));
//     if (favoriteItems.includes(item)) {
//       setFavoriteItems(favoriteItems.filter((item) => item !== item));
//     } else {
//       setFavoriteItems([...favoriteItems, item]);
//     }
//   };

//   const isItemFavorite = (item) => favoriteItems.includes(item);

//   const renderItem = ({ item }) => {
//     //console.log("item :", item);
//     const photos = `${PHOTO_URL}${item.photo}`;

//     return (
//       <TouchableOpacity
//         onPress={() => navigation.navigate(Routes.Tt, { _id: item._id })}
//         style={styles.card}
//       >
//         <Image source={{ uri: photos }} style={styles.PopularProductsImg} />
//         <TouchableOpacity
//           onPress={() => handleFavoriteToggle(item)}
//           style={styles.heartIcon}
//         >
//           <Icon
//             name="heart"
//             size={20}
//             color={isItemFavorite(item._id) ? "red" : "gray"}
//             type="font-awesome"
//           />
//         </TouchableOpacity>
//         <View style={styles.details}>
//           <Text style={styles.name}>{truncateName(item.name)}</Text>
//           <View style={styles.cartStyle}>
//             <Text style={styles.price}>৳{item.priceList[0].mrp}</Text>
//             <TouchableOpacity onPress={() => dispatch(addProduct(item))}>
//               <Icon
//                 name="shopping-basket-add"
//                 size={20}
//                 color="tomato"
//                 paddingTop={5}
//                 type="fontisto"
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={product}
//         renderItem={renderItem}
//         onRefresh={refetch}
//         refreshing={isFetching}
//         keyExtractor={(item) => item._id}
//         numColumns={numColumns}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginHorizontal: 10,
//     marginVertical: 10,
//   },
//   card: {
//     flexDirection: "column",
//     margin: 5,
//     backgroundColor: "#F5F6FB",
//     padding: 7,
//     borderRadius: 5,
//     shadowColor: "gray",
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   details: {
//     paddingTop: 10,
//   },
//   name: {
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   price: {
//     fontSize: 16,
//     marginTop: 5,
//   },
//   quantity: {
//     fontSize: 16,
//     marginTop: 5,
//   },
//   cartStyle: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   PopularProductsImg: {
//     width: 95,
//     height: 90,
//     borderRadius: 10,
//   },
//   heartIcon: {
//     position: "absolute",
//     top: 5,
//     right: 5,
//     zIndex: 1,
//   },
// });

// export default PopularProducts;
