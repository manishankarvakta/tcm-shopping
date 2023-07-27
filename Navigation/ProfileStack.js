import ProductCart from "../Components/ProductCart";
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import Routes from "../Utility/Routes";
import Profile from "../Screens/Profile/Profile";
import PersonalInfo from "../Screens/Profile/PersonalInfo";
import ManageAddress from "../Screens/Profile/ManageAddress";
import Settings from "../Screens/Profile/Settings";
import NotificationSettings from "../Screens/Profile/NotificationSettings";

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
      <Stack.Screen
        name={Routes.MANAGE_ADDRESS}
        component={ManageAddress}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },
        }}
      />

      <Stack.Screen
        name={Routes.SETTINGS}
        component={Settings}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },
        }}
      />

      <Stack.Screen
        name={Routes.NOTIFICATIONS_SETTINGS}
        component={NotificationSettings}
        options={{
          headerStyle: {
            borderBottomWidth: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}
