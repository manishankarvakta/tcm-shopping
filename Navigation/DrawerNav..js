import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from '../Utility/Routes';
import TabNav from './TabNav';
import CategoryGroupScreen from '../Screens/Home/CategoryGroupScreen';
import FreshFruitsStack from "../Navigation/FreshFruitsStack"
import CategoryStackNav from './CategoryStackNav';
import OrderHistoryNavStack from './OrderHistoryNavStack';
import OrderScreenNav from './OrderScreenNav';
import FlashSaleStackNav from './FlashSaleStackNav';
import FlashsaleProductNav from '../Navigation/FreshFruitsStack';
import NoodlesStack from './NoodlesStack';
import OilStacknav from './OilStacknav';
import OfferScreenstack from "./OfferScreenstack"
import PopularProductStack from './PopularProductStack';
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.HOME_DRAWER} component={TabNav}  options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.OFFER_PRODUCTS_DRAWER} component={OfferScreenstack} options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.Product_Card_Drawer} component={PopularProductStack} options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.FLASHSALE_Drawer} component={FlashsaleProductNav} options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.CATEGORY_GROUP_DRAWER} component={CategoryStackNav}  options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.NOODLES_DRAWER} component={NoodlesStack} options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.ALL_OIL_DRAWER} component={OilStacknav} options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.ORDER_HISTORY_DRAWER} component={OrderHistoryNavStack} options={{ headerShown: false }}/>


    </Drawer.Navigator>
  );
}


export default DrawerNav;