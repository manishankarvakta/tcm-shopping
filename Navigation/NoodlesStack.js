
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import FlashSale from "../Screens/Home/FlashSales";
import AllBiscuits from "../Screens/Home/AllBiscuits";
import AllFreshFruits from "../Screens/Home/AllFreshFruits";
import AllNoodles from "../Screens/Home/AllNoodles";


const Stack = createStackNavigator();

export default function NoodlesStack()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.NOODLES}
      component={AllNoodles}
    
    
     
    />
    <Stack.Screen
      name={Routes.Tt}
      component={SingleProductsDetailsScreen}
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