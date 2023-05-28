
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";

import FreshVegetables from "../Screens/Home/FreshVegetables";


const Stack = createStackNavigator();

export default function VegetablesProductStack()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.T}
      component={FreshVegetables}
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