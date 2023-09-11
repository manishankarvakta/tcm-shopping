import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import AllOil from "../Screens/Home/AllOil";

const Stack = createStackNavigator();

export default function OilStack({ navigation }) {
  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.OIL}
        component={AllOil}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="coins" size={20} color="tomato" type="font-awesome-5" />
          ),
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
      <Stack.Screen name={Routes.Tt} component={SingleProductsDetailsScreen} />
    </Stack.Navigator>
  );
}
