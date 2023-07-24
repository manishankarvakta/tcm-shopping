
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import OrderHistory from "../Screens/DrawerScreen/OrderHistory";
import OrderHistoryDetails from "../Screens/DrawerScreen/OrderHistoryDetails";


const Stack = createStackNavigator();

export default function OrderHistoryNavStack()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.ORDER_HISTORY}
      component={OrderHistory}
   
    
     
    />
    <Stack.Screen
      name={Routes.ORDER_HISTORY_DETAILS}
      component={OrderHistoryDetails}
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