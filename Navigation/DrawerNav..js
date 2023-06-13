import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from '../Utility/Routes';
import HomeScreen from '../Screens/Home/HomeScreen';
import TabNav from './TabNav';
import CategoryGroupScreen from '../Screens/Home/CategoryGroupScreen';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={Routes.HOME} component={TabNav}  options={{ headerShown: false }}/>
      <Drawer.Screen name={Routes.CATEGORY_GROUP_SCREEN} component={CategoryGroupScreen} />
    </Drawer.Navigator>
  );
}


export default DrawerNav;