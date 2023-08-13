import { createDrawerNavigator } from "@react-navigation/drawer";
import Routes from "../Utility/Routes";
import TabNav from "./TabNav";
import CategoryStackNav from "./CategoryStackNav";
import OrderHistoryNavStack from "./OrderHistoryNavStack";
import CustomerSupport from "../Screens/Home/CustomerSupport";
import { Icon } from "@rneui/base";
import OfferScreenstack from "./OfferScreenstack";
import PopularProductStack from "./PopularProductStack";
import HelpScreen from "../Screens/DrawerScreen/HelpScreen";
import ChatsScreen from "../Screens/Home/ChatsScreen";
import EarnReward from "../Screens/DrawerScreen/EarnReward";
import CustomDrawer from "../Components/CustomDrawer";
import FlashsaleProductNav from "./FlashsaleProductNav";
import FavoriteProductsStack from "./FavoriteProductsStack";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

function DrawerNav() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  const callCustomerSupport = () => {
    Linking.openURL("tel:+1234567890");
  };
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name={Routes.HOME}
        component={TabNav}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={20} color="tomato" type="AntDesign" />
          ),
        }}
      />
      <Drawer.Screen
        name={Routes.OFFER_PRODUCTS_DRAWER}
        component={OfferScreenstack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon
              name="local-offer"
              size={20}
              color="tomato"
              type="MaterialIcons"
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={Routes.Product_Card_Drawer}
        component={PopularProductStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="box" size={20} color="tomato" type="entypo" />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name={Routes.FLASHSALE_Drawer}
        component={FlashsaleProductNav}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="box" size={20} color="tomato" type="entypo" />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name={Routes.FAVORITES_PRODUCTS_DRAWER}
        component={FavoriteProductsStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="heart" size={20} color="tomato" type="antdesign" />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name={Routes.CATEGORY_GROUP_DRAWER}
        component={CategoryStackNav}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name={Routes.ORDER_HISTORY_DRAWER}
        component={OrderHistoryNavStack}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon
              name="details"
              size={20}
              color="tomato"
              type="MaterialIcons
        "
            />
          ),
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name={Routes.REWARD}
        component={EarnReward}
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

      <Drawer.Screen
        name={Routes.HELP_SCREEN_DRAWER}
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon
              name="help-with-circle"
              size={20}
              color="tomato"
              type="entypo"
            />
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

      <Drawer.Screen
        name={Routes.CUSTOMER_SUPPORT_DRAWER}
        component={CustomerSupport}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="phone-call" size={20} color="tomato" type="feather" />
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

          onPress: callCustomerSupport,
        }}
      />

      <Drawer.Screen
        name={Routes.LIVE_CHAT_DREAWER}
        component={ChatsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Icon name="chat" size={20} color="tomato" type="entypo" />
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
    </Drawer.Navigator>
  );
}

export default DrawerNav;
