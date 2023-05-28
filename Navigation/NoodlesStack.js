
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import FlashSale from "../Screens/Home/FlashSales";
import AllBiscuits from "../Screens/Home/AllBiscuits";
import AllFreshFruits from "../Screens/Home/AllFreshFruits";


const Stack = createStackNavigator();

export default function NoodlesStack()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.T}
      component={AllFreshFruits}
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