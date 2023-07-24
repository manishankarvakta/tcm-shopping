
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import SkinCares from "../Screens/Home/Skincares";


const Stack = createStackNavigator();

export default function SkinCareStack()  {

  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.SKIN_CARE}
      component={SkinCares}
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