import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import HomeScreen from "../Screens/Home/HomeScreen";
import OffersScreen from "../Screens/Home/OffersScreen";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

export default function OfferScreenstack({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.OFFER_PRODUCTS}
        component={OffersScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },
          headerBackTitle: "BACK",
          // Add headerLeft option to set custom back arrow
          headerLeft: () => (
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons
                name="arrow-back" // Replace this with the name of your desired icon
                size={24}
                color="black"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={Routes.Tt}
        component={SingleProductsDetailsScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.HOME}
        component={HomeScreen}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />
    </Stack.Navigator>
  );
}

<Stack.Screen
  name={Routes.HOME}
  component={HomeScreen}
  options={{
    headerStyle: {
      borderBottomWidth: 0,
    },

    headerBackTitle: "BACK",
  }}
/>;
