
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";

import AllFreshFruits from "../Screens/Home/AllFreshFruits";


const Stack = createStackNavigator();

export default function FlashsaleProductNav()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.FRESH_FOOD}
      component={AllFreshFruits}

    
     
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