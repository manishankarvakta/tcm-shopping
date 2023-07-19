import { View, Text,SafeAreaView,TouchableOpacity,Switch,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Icon } from '@rneui/base';
import { useState } from 'react';
import Routes from '../../Utility/Routes';
import { useDispatch, useSelector } from 'react-redux';
import { selcetProduct } from '../Redux/CartSlice';


export default function ConfirmOrder({ navigation }) {
  const [isEnabled, setIsEnabled] = useState(false)

  const cartItems = useSelector((state) => state.cartReducer);

 
  return (
    <SafeAreaView>
             <View style={styles.HeaderContext}>
                 <TouchableOpacity style={{paddingRight:5}}>
                     <Icon name="angle-down" size={20} color="#000" type="font-awesome" />
                 </TouchableOpacity>
                 <Text style={styles.HeaderText}>
                       Have a Special Code? 
                  </Text>
            </View>

            <View style={styles.AddressDetails}>
                 <View>
                      <Text style={{color:"#333333"}}>House 56,Jamal Khan Road,{'\n'}Jamal Khan</Text>
                      <Text style={{color:"black",fontWeight:"700"}}>Jamal Khan,Chattogram</Text>
                      <Text style={{color:"#333333"}}>+8801680622993</Text>

                 </View>

                 <View style={styles.ChangeInfo}>
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

            <View style={styles.DeliveryTimeStyle}>
                <View>
                  <View style={{flexDirection:"row",marginHorizontal:10,marginTop:20,paddingVertical:5}}>
                  <Icon style={styles.piechartStyle} name="piechart" size={20} color="#000" type="antdesign"/>
                  <Text style={styles.DeliveryTimeText}>Preferred Delivery Timings</Text>
                 </View>
                </View>

          
            </View>

            <View>
            <View style={styles.NeedBagStyle}>
             

                <View>
                <View style={styles.NeedBagStyleTwo}>
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

            <View style={styles.TermsConditionStyle}>
                <Text style={{color:"gray",fontSize:10,}}>By tapping proceed, I agree to TCM SuperShop <Text style={{color:"red"}}>Terms and Conditions.</Text></Text>
            </View>


     <View style={{marginTop:20}}>
     <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_ID)} style={styles.PlaceOrderButton}>
                <View>
                   <Icon type="antdesign" name="shoppingcart" size={24} color="white" />
                </View>

                <View>
                    <Text style={styles.PlaceOrderStyle}>Place Order</Text>
                </View>

                <View style={{borderRadius:20}}>
                    <Text style={styles.TotalPriceStyle}>৳{cartItems.total} tk</Text>
                </View>
            </TouchableOpacity>
     </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  HeaderContext:{
  flexDirection: 'row',
  alignItems:"center",
  padding:10,
  justifyContent:"center",
  
},
HeaderText:{
  color:"#7C7C7D",
  alignItems:"center",
  justifyContent:"center"
},
TextColorStyle:{
 color:"#000"
},



AddressDetails:{
  flexDirection:"row", 
  justifyContent:"space-between",
  borderRadius:10,
  paddingHorizontal:10, 
  marginHorizontal:10, 
  paddingVertical:15,
  backgroundColor:"#DEE1E6",
},

ChangeInfo:{
  flexDirection: 'row', 
  alignSelf:"center", 
  justifyContent: 'flex-end',
},
DeliveryTimeStyle:{
  backgroundColor:"#DEE1E6",
  marginVertical:10,
  marginHorizontal:10,
  paddingBottom:13,
  borderRadius:10
},
piechartStyle:{  
  justifyContent: "center",
   alignItems: "center",
   marginVertical:2
  },

  DeliveryTimeText:{
    color:"#000",
    fontSize:20,
    fontWeight:"700",
    paddingLeft:5
  },
  DeliveryScheduleStyle:{
    flexDirection:"row",
    borderRadius:4,
    paddingHorizontal:10,
    marginHorizontal:10,
    paddingVertical:10,
    justifyContent:"space-between",
    backgroundColor:"#DEE1E6",
  },

  NeedBagStyle:{
    backgroundColor:"#CCCCCC",
    paddingTop:13,
    marginVertical:10,
    marginHorizontal:10,
    paddingBottom:13,
     borderRadius:10
  },
  NeedBagStyleTwo:{
    flexDirection:"row",
    borderRadius:4,
    paddingHorizontal:10,
    marginHorizontal:10,
    paddingVertical:10,
    justifyContent:"space-between",
    backgroundColor:"#DEE1E6",
  },

  TermsConditionStyle:{
    marginHorizontal:10,
    marginTop:60,
    alignItems:"center"
  },
  PlaceOrderStyle:{
    color:"white",
    fontWeight:"700",
    fontSize:18
  },

PlaceOrderButton:{
  flexDirection:"row",
  justifyContent:"space-between",
  marginHorizontal:10,
  paddingVertical:12,
  backgroundColor:"red",
  borderRadius:10,
  paddingHorizontal:10,
  marginBottom:15
},
TotalPriceStyle:{
  backgroundColor:"#E7D6EC",
  paddingVertical:5,
  paddingHorizontal:25,
  borderRadius:15,
  color:"#000" 
}

})

