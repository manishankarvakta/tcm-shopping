
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import AllOil from "../Screens/Home/AllOil";
import HomeScreen from "../Screens/Home/HomeScreen";
import OffersScreen from "../Screens/Home/OffersScreen";


const Stack = createStackNavigator();

export default function OfferScreenstack()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.OFFER_PRODUCTS}
      component={OffersScreen}
 
    
     
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

<Stack.Screen
      name={Routes.HOME}
      component={HomeScreen}
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

<Stack.Screen
      name={Routes.HOME}
      component={HomeScreen}
      options={{
      

        headerStyle: {
          
          borderBottomWidth: 0,
         
        },
        
        headerBackTitle: "BACK",
     
    
      }}
    
    />