import ProductCard from "../Components/ProductCard";
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";

const Stack = createStackNavigator();

export default function ProductStacknav()  {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.Product_Slider}
      component={ProductCard}
      options={{
        headerShown:false
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
     
        headerTitle: "",
      }}
    
    />
   
  </Stack.Navigator>
  );
}