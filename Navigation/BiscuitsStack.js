
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import FlashSale from "../Screens/Home/FlashSales";
import AllBiscuits from "../Screens/Home/AllBiscuits";


const Stack = createStackNavigator();

export default function FlashsaleProductNav()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.T}
      component={AllBiscuits}
      options={{
        headerShown:false,
      }}
    
     
    />
    <Stack.Screen
      name={Routes.Tt}
      component={SingleProductsDetailsScreen}
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