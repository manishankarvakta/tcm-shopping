import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";

import AllDrinks from "../Screens/Home/AllDrinks";

const Stack = createStackNavigator();

export default function DrinksStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.DRINKS}
        component={AllDrinks}
        options={{
          headerShown: false,
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
