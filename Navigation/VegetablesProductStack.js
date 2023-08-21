import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import { Ionicons } from "@expo/vector-icons";
import FreshVegetables from "../Screens/Home/FreshVegetables";
import { TouchableOpacity } from "react-native";

const Stack = createStackNavigator();

export default function VegetablesProductStack({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.FRESH_VEGETABLES_TAB}
        component={FreshVegetables}
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
          headerShown: false,

          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",

          headerTitle: "",
        }}
      />
    </Stack.Navigator>
  );
}
