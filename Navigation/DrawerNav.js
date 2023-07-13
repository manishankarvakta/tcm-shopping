import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from '../Utility/Routes';
import TabNav from './TabNav';
import CategoryStackNav from './CategoryStackNav';
import OrderHistoryNavStack from './OrderHistoryNavStack';
import CustomerSupport from '../Screens/Home/CustomerSupport'
import { Icon } from '@rneui/base';
import OfferScreenstack from "./OfferScreenstack"
import PopularProductStack from './PopularProductStack';
import HelpScreen from '../Screens/Home/HelpScreen';
import ChatsScreen from '../Screens/Home/ChatsScreen';
import EarnReward from '../Screens/Home/EarnReward';
import FavoritesProducts from '../Screens/Home/FavoritesProducts';
import CustomDrawer from '../Components/CustomDrawer';
import FlashsaleProductNav from './FlashsaleProductNav';
import FavoriteProductsStack from './FavoriteProductsStack';
const Drawer = createDrawerNavigator();

function DrawerNav() {

  const callCustomerSupport = () => {
    Linking.openURL('tel:+1234567890');
  };
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer  {...props} />}>
      <Drawer.Screen name={Routes.HOME_DRAWER} component={TabNav}
      
      options={{ headerShown: false, 
        drawerIcon: ({ color, size }) => (
       <Icon name="home" size={20} color="red" type="AntDesign" />
       ),}}
      />
      <Drawer.Screen name={Routes.OFFER_PRODUCTS_DRAWER} component={OfferScreenstack}
      
      options={{  headerShown: false,
        drawerIcon: ({ color, size }) => (
       <Icon name="local-offer" size={20} color="red" type="MaterialIcons" />
       ),}}
      />
      <Drawer.Screen name={Routes.Product_Card_Drawer} component={PopularProductStack}
      
      options={{headerShown: false,
        drawerIcon: ({ color, size }) => (
       <Icon name="box" size={20} color="red" type="entypo" />
       ),}}
      
      />


<Drawer.Screen name={Routes.FLASHSALE_Drawer} component={FlashsaleProductNav}
      
      options={{ headerShown: false,
        drawerIcon: ({ color, size }) => (
       <Icon name="box" size={20} color="red" type="entypo" />
       ),}}
      
      />


    <Drawer.Screen name={Routes.FAVORITES_PRODUCTS_DRAWER} component={FavoriteProductsStack}
      
      options={{ headerShown: false, 
        drawerIcon: ({ color, size }) => (
       <Icon name="heart" size={20} color="red" type="antdesign" />
       ),}}
      
      />
      <Drawer.Screen name={Routes.CATEGORY_GROUP_DRAWER} component={CategoryStackNav}  
  options={{ headerShown: false, 
    }}
  />
           


      <Drawer.Screen   name={Routes.ORDER_HISTORY_DRAWER} component={OrderHistoryNavStack} 

         options={{ headerShown: false,
         drawerIcon: ({ color, size }) => (
        <Icon name="details" size={20} color="red" type="MaterialIcons
        " />
        ),}}/>

       <Drawer.Screen   name={Routes.REWARD} component={EarnReward} 

        options={{ headerShown: false,
         drawerIcon: ({ color, size }) => (
           <Icon name="coins" size={20} color="red" type="font-awesome-5" />
       ),}}/>


      <Drawer.Screen   
       name={Routes.HELP_SCREEN_DRAWER} component={HelpScreen} 

       options={{headerShown: false,drawerIcon: ({ color, size }) => (
        <Icon name="help-with-circle" size={20} color="red" type="entypo" />
        ), 
}}
    />


<Drawer.Screen   
       name={Routes.CUSTOMER_SUPPORT_DRAWER} component={CustomerSupport} 
       
       options={{headerShown: false,
        drawerIcon: ({ color, size }) => (
        <Icon name="phone-call" size={20} color="red" type="feather" />
        ),
        onPress: callCustomerSupport,
}}
    />



<Drawer.Screen   
       name={Routes.LIVE_CHAT_DREAWER} component={ChatsScreen} 

       options={{headerShown: false,drawerIcon: ({ color, size }) => (
        <Icon name="chat" size={20} color="red" type="entypo" />
        ),
}}
    />

      
    </Drawer.Navigator>
  );
}


export default DrawerNav;