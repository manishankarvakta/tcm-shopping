
import SingleProductsDetailsScreen from "../Screens/SingleProductsDetailsScreen";
import { createStackNavigator } from '@react-navigation/stack';
import Routes from "../Utility/Routes";
import PopularProducts from "../Screens/Home/PopularProducts";
import ImageCarousel from "../Components/ImageCarousel";

const Stack = createStackNavigator();

export default function FeaturedProductStack()  {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name={Routes.IMAGE_CAROUSEL}
      component={ImageCarousel}
      

     
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