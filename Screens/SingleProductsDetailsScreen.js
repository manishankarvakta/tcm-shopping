import { View, Text,SafeAreaView,Image,Button,TouchableOpacity  } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
export default function SingleProductsDetailsScreen() {
    const handleButtonPress = () => {
       
        console.log('Button pressed!');
      };
  return (
    <SafeAreaView>
      <Text style={{marginTop:30 ,fontWeight: 'bold', fontSize: 18,marginLeft:10}}>Mango Himshagor (Satkhira)+- 50gm</Text>
      <View style={{ alignItems: 'center',}}>
          <Image source={require("../assets/Freshfood/1.jpg")} style={{ width: 250, height: 250,marginTop:60}} />
      </View>
      <Text style={{color:"red",marginTop:40 ,fontSize: 15,marginLeft:17}}>$265 / 400gm</Text>
    
      
      

      <View style={{flexDirection:"row",justifyContent:"space-between",marginRight:10}}>
      <View style={{  marginLeft: 10,alignSelf: 'flex-start',backgroundColor:"black",  marginBottom:10,  borderWidth: 1,borderColor: 'gray',borderRadius: 8,marginTop:20,justifyContent:"space-between"}}> 
      <Button style={{color:"red"}} title ="Buy now" onPress={handleButtonPress} color="white"/>
     
      </View>
      <TouchableOpacity  style={{padding:3,backgroundColor:"#CBCBCB" ,height:35,width:35,   alignItems: 'center',justifyContent: 'center',}}>
       <FontAwesome name="plus" size={16} color="#1D2F3E"  />
        </TouchableOpacity >
      </View>
       <View style={{borderTopColor:"#c1c1c1",borderWidth:0.4,margin:10}}></View>
       <View style={{padding:10}}>
            <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the
            </Text>
        </View>

        <Button style={{color:"red"}} title ="Close" onPress={handleButtonPress} color="blue"/>
    </SafeAreaView>
  )
}