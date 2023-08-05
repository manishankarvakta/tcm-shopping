import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import CartScreen from "../Screens/OrderScreen/CartScreen";
import ConfirmOrder from "../Screens/OrderScreen/ConfirmOrder";
import ConfirmationProducts from "../Screens/OrderScreen/ConfirmationProducts";
import HomeScreen from "../Screens/Home/HomeScreen";
import { tr } from "date-fns/locale";
import OrderSuccess from "../Screens/OrderScreen/OrderSuccess";

const Stack = createStackNavigator();

export default function OrderScreenNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={Routes.CART_SCREEN} component={CartScreen} />
      <Stack.Screen
        name={Routes.CONFIRM_ORDER}
        component={ConfirmOrder}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.ORDER_ID}
        component={ConfirmationProducts}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },

          headerBackTitle: "BACK",
        }}
      />

      <Stack.Screen
        name={Routes.ORDER_SUCCESS}
        component={OrderSuccess}
        options={{
          headerShown: false,
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
