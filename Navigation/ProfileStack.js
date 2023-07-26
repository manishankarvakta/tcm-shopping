import ProductCart from "../Components/ProductCart";
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import Profile from "../Screens/Profile/Profile";
import PersonalInfo from "../Screens/Profile/PersonalInfo";

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.PROFILE}
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.PERSONAL_INFO}
        component={PersonalInfo}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}
