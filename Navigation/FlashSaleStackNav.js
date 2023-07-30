import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import PopularProducts from "../Screens/Home/PopularProducts";
import FlashSale from "../Components/FlashSale";

const Stack = createStackNavigator();

export default function FlashSaleStackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.HOME} component={FlashSale} />
      <Stack.Screen
        name={Routes.Tt}
        component={SingleProductsDetailsScreen}
        options={{
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
