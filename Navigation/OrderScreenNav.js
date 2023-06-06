import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import CartScreen from '../Screens/OrderScreen/CartScreen';
import ConfirmOrder from '../Screens/OrderScreen/ConfirmOrder';
import ConfirmationProducts from '../Screens/OrderScreen/ConfirmationProducts';



const Stack = createStackNavigator();

export default function OrderScreenNav()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.CART_SCREEN}
      component={CartScreen}
      options={{
        headerShown:false,
      }}
    
     
    />
    <Stack.Screen
      name={Routes.CONFIRM_ORDER}
      component={ConfirmOrder}
      options={{
        headerShown:false,

        headerStyle: {
          
          borderBottomWidth: 0,
         
        },
        
        headerBackTitle: "BACK",
     
        headerTitle: "",
      }}
    
    />

<Stack.Screen
      name={Routes.ORDER_ID}
      component={ConfirmationProducts}
      options={{
        headerShown:false,

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