import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import FlashSale from "../Screens/Home/FlashSales";
import AllBiscuits from "../Screens/Home/AllBiscuits";
import AllFreshFruits from "../Screens/Home/AllFreshFruits";
import AllNoodles from "../Screens/Home/AllOil";
import AllOil from "../Screens/Home/AllOil";

const Stack = createStackNavigator();

export default function OilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.OIL}
        component={AllOil}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />
      <Stack.Screen name={Routes.Tt} component={SingleProductsDetailsScreen} />
    </Stack.Navigator>
  );
}
