import { View, Text,SafeAreaView,TouchableOpacity,Switch } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';
import { useState } from 'react';


export default function ConfirmOrder() {
    const [isEnabled, setIsEnabled] = useState(false)

 
  return (
    <SafeAreaView style={{justifyContent:"space-between"}}>
             <View style={{alignItems:"center",padding:10,justifyContent:"center",flexDirection: 'row'}}>
                 <TouchableOpacity style={{paddingRight:5}}>
                   <Icon name="angle-down" size={20} color="#000" type="font-awesome" />
                 </TouchableOpacity>
                 <Text style={{color:"#7C7C7D", alignItems:"center",justifyContent:"center"}}>
                  Have a Special Code? 
                  </Text>
            </View>

            <View style={{flexDirection:"row", borderRadius:10,paddingHorizontal:10, marginHorizontal:10, paddingVertical:10, justifyContent:"space-between",backgroundColor:"#DEE1E6",}}>
                 <View>
                      <Text style={{color:"#333333"}}>House 56,Jamal Khan Road,{'\n'}Jamal Khan</Text>
                      <Text style={{color:"black",fontWeight:"700"}}>Jamal Khan,Chattogram</Text>
                      <Text style={{color:"#333333"}}>+8801680622993</Text>

                 </View>

                 <View style={{alignSelf:"center", flexDirection: 'row', justifyContent: 'flex-end',}}>
                  <TouchableOpacity
                     style={{
                      borderWidth: 1,
                      borderColor: 'blue',
                      borderRadius: 5,
                      paddingVertical: 10,
                      paddingHorizontal: 30,
                   
                      }}
                       onPress={() => {
                           // Handle button press
                            }}
                       >
                      <Text style={{ color: 'blue' }}>Change</Text>
                      </TouchableOpacity>
                 </View>
            </View>

            <View style={{backgroundColor:"#CCCCCC",marginVertical:10,marginHorizontal:10,paddingBottom:13, borderRadius:10}}>
                <View>
                  <View style={{flexDirection:"row",marginHorizontal:10,marginTop:20,paddingVertical:5}}>
                  <Icon style={{  justifyContent: "center", alignItems: "center",marginVertical:2}} name="piechart" size={20} color="#000" type="antdesign"/>
                  <Text style={{color:"#000",fontSize:20,fontWeight:"700",paddingLeft:5}}>Preferred Delivery Timings</Text>
                 </View>
                </View>

                <View>
                <View style={{flexDirection:"row", borderRadius:4,paddingHorizontal:10, marginHorizontal:10, paddingVertical:10, justifyContent:"space-between",backgroundColor:"#DEE1E6",}}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                  <Icon
                     name="shipping-fast"
                     size={20}
                     color="gray"
                     type="font-awesome-5"
                     paddingRight={10}
                  />
                  <Text style={{color:"#000"}}>Express Items</Text>
                  </View>
                  <Text style={{color:"#000"}}>Mon,Jun 5</Text>
                  <Text style={{color:"#000"}}>5:00 PM - 6.00 PM</Text>
                 </View>

                 <View style={{alignSelf:"stretch", flexDirection: 'row', justifyContent: 'flex-end',}}>
                 <TouchableOpacity style={{paddingRight:5}}>
                   <Icon name="angle-down" size={20} color="#000" type="font-awesome" />
                 </TouchableOpacity>
                 </View>
            </View>
                </View>
            </View>

            <View>
            <View style={{backgroundColor:"#CCCCCC",paddingTop:13, marginVertical:10,marginHorizontal:10,paddingBottom:13, borderRadius:10}}>
             

                <View>
                <View style={{flexDirection:"row", borderRadius:4,paddingHorizontal:10, marginHorizontal:10, paddingVertical:10, justifyContent:"space-between",backgroundColor:"#DEE1E6",}}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                  <Icon
                     name="shopping-bag"
                     size={20}
                     color="orange"
                     type="entypo"
                     paddingRight={10}
                  />
                  <Text style={{color:"#000",marginTop:3}}>Add reusable bags ?</Text>

                  
                  </View>
            
                 </View>

                 <View>
                   <Switch
                      trackColor={{ false: '#767577', true: '#81b0ff' }}
                      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                      ios_backgroundColor="#3e3e3e"
        
                     />
 
            </View>
            </View>
            </View>
            </View>
            </View>

            <View style={{marginHorizontal:10,marginTop:60,alignItems:"center"}}>
                <Text style={{color:"gray",fontSize:10,}}>By tapping proceed, I agree to TCM SuperShop <Text style={{color:"red"}}>Terms and Conditions.</Text></Text>
            </View>


     <View style={{marginTop:20}}>
     <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:10,paddingVertical:12,backgroundColor:"red",borderRadius:10,paddingHorizontal:10,marginBottom:15}}>
                <View>
                   <Icon type="antdesign" name="shoppingcart" size={24} color="white" />
                </View>

                <View>
                    <Text style={{color:"white",fontWeight:"700",fontSize:18}}>Place Order</Text>
                </View>

                <View style={{borderRadius:20}}>
                    <Text style={{backgroundColor:"#E7D6EC",paddingVertical:5,paddingHorizontal:25,borderRadius:15, color:"#000" }}>$450</Text>
                </View>
            </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}