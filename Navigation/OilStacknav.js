
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import AllOil from "../Screens/Home/AllOil";


const Stack = createStackNavigator();

export default function OilStacknav()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.ALL_OIL}
      component={AllOil}
      options={{
    

        headerStyle: {
          
          borderBottomWidth: 0,
         
        },
        
        headerBackTitle: "BACK",
     
    
      }}
    
     
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