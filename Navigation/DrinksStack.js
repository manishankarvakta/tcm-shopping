import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import AllDrinks from "../Screens/Home/AllDrinks";

const Stack = createStackNavigator();

export default function DrinksStack({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.DRINK}
        component={AllDrinks}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="coins" size={20} color="tomato" type="font-awesome-5" />
          ),
          headerStyle: {
            borderBottomWidth: 0,
          },
          headerBackTitle: "BACK",

          headerLeft: () => (
            <TouchableOpacity onPress={handleBackPress}>
              <Ionicons
                name="arrow-back"
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
    </Stack.Navigator>
  );
}
