
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import PopularProducts from "../Screens/Home/PopularProducts";

const Stack = createStackNavigator();

export default function PopularProductStack()  {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.Product_Card}
      component={PopularProducts}
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