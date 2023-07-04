import { View, Text,SafeAreaView,Image,TouchableOpacity,StyleSheet } from 'react-native'
import { Icon } from '@rneui/base';

import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import Routes from '../../Utility/Routes';

export default function ConfirmationProducts({navigation}) {
  return (
    <SafeAreaView>
        <ScrollView>
    <View style={styles.OrderConfirmantionSectionStye}>
    <View>
         <Image
               source={require('../../assets/f1.png')}
               style={styles.OrderProductImg}
           />
    </View>

         <View>
            <Text style={styles.ConfirmationText}>Confirmation</Text>
             <Text style={styles.OrderNumberText}>Order number #11880922</Text>

              <Text>Your order is currrently {'\n'}
                  confirmed as <Text style={{color:"gray"}}>Cash on {'\n'}Delivery.
            </Text>You can also <Text style={{color:"green",fontWeight:"600",fontSize:15}}>Pay {'\n'}Now </Text> 
            by choosing one of the {'\n'}following payment options.</Text>
         </View>
    </View>


       <View>
            <View style={styles.AdsStyle}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                 <Image
                 source={require('../../assets/FlashSales/f4.jpg')}
                 style={{ width: 45, height: 45 ,borderRadius:10}}
             />
                  <Text style={styles.AdsTextStyle}>Congratulations on saving $50</Text>

                  
                  </View>
            
                 </View>

             
            </View>
            </View>


       <View style={styles.PaymentSectionStyle}>

        <View style={styles.PaymentOptionText}>
            <Text style={{fontSize:20,fontWeight:"700"}}>Payment Options</Text>
        </View>

         <View>
         <TouchableOpacity style={styles.PaymentOptionStyle}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                 <Image
                 source={require('../../assets/FlashSales/f8.jpg')}
                 style={styles.PaymentOptionImgStyle}
             />
                  <Text  style={styles.PaymentOptionTextStyle}>Bkash</Text>

                  
                  </View>
            
                 </View>

             
            </TouchableOpacity>

            <TouchableOpacity style={styles.PaymentOptionStyle}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                 <Image
                 source={require('../../assets/FlashSales/f7.jpg')}
                 style={styles.PaymentOptionImgStyle}

             />
                  <Text style={styles.PaymentOptionTextStyle}>Credit or Debit Card</Text>

                  
                  </View>
            
                 </View>

             
            </TouchableOpacity>


            <TouchableOpacity style={styles.PaymentOptionStyle}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                 <Image
                 source={require('../../assets/FlashSales/f5.jpg')}
                 style={styles.PaymentOptionImgStyle}
             />
                  <Text style={styles.PaymentOptionTextStyle}>International Credit or Debit Card</Text>

                  
                  </View>
            
                 </View>

             
            </TouchableOpacity>


            <TouchableOpacity style={styles.PaymentOptionStyle}>
                 <View style={{marginVertical:5}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                 <Image
                 source={require('../../assets/f1.png')}
                 style={styles.PaymentOptionImgStyle}
             />
                  <Text style={styles.PaymentOptionTextStyle}>Nagad</Text>

                  
                  </View>
            
                 </View>

             
            </TouchableOpacity>


 

            <TouchableOpacity>
                <Text style={styles.TrxIDStyle}>bKash Trx ID method</Text>
            </TouchableOpacity>
         </View>
       </View>

       <View>
       <TouchableOpacity style={styles.OrderNoteStyle}>
           <View style={styles.IconTextStyle}> 
               <Icon
                    name="plus"
                    size={20}
                    color="#493474"
                    type="font-awesome-5"
                    paddingRight={15}
                    
                 />
                  <Text style={styles.OrderNote}>Add Order Note</Text>
            </View>
            
      </TouchableOpacity>
       </View>


       <View>
       <View style={styles.VerifyEmail}>

                 <View style={{justifyContent:"space-between", flexDirection:'row',paddingVertical:5}}> 

                  <Text style={styles.GiveEmailStyle}>Give us your email address</Text>

                  <TouchableOpacity style={styles.VerifyText}>
                        <Text style={{ color: "gray", fontWeight: "700" }}>Verify</Text>
                 </TouchableOpacity>
                  </View>

            </View>
       </View>


       <View>
       <View style={styles.EmailVerifyAds}>
             <View style={styles.VerifyTextOne}>
             
                <Text style={styles.VerifyTextTwo}>Verify Email & <Text style={{fontSize:20,fontWeight:"600"}}>Get $20</Text></Text>

            </View>

            <View style={{alignSelf:"center"}}>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.HOME_TAB)} style={styles.backToShoppingBtn}>
        <Text style={styles.TextColor}>Back to Shopping</Text>
      </TouchableOpacity>
            </View>

       
    </View>
       </View>


       <View>

       <View style={styles.OrderSummerySectionStyle}>
       <Text style={styles.OrderSummeryTextStyle}>Totals Summary</Text>
       <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        
       <View>
            <Text style={styles.TitleStyle}>SubTotal</Text>
            <Text style={styles.TitleStyle}>Total Discount</Text>
            <Text style={styles.TitleStyleTwo}>Total Order</Text>
            <Text style={styles.TitleStyleThree}>Amount Paid</Text>
           
         </View>

         <View>
            <Text style={styles.TitleStyle}>$300</Text>
            <Text style={styles.TitleStyle}>$65</Text>
            <Text style={styles.TitleStyle}>$235</Text>
            <Text style={styles.TitleStyleThree}>$0</Text>

            
         </View>
       </View>
        
        <View style={{borderTopWidth:1,borderTopColor:"#c1c1c1",flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={styles.TitleStyleFour}>Deu</Text>
        <Text style={styles.TitleStyleFour}>$235</Text>
        </View>
     
    </View>
       </View>

       <View style={styles.DeliveryInfoFotter}>
           <View style={{alignItems:"center"}}>
           <Text style={{fontWeight:"600",fontSize:18,paddingTop:10,letterSpacing:3,color:"gray"}}> Delivery Address</Text>
           <Text style={{fontWeight:"400",fontSize:14,paddingTop:10,}}>House56, Jamal Khan Road,Jamal Khan(Jamal khan)</Text>
           <Text style={{fontWeight:"600",fontSize:18,paddingTop:10,color:"gray"}}>Preferred Delivery Timings</Text>
           <Text style={{fontWeight:"400",fontSize:14,paddingTop:10,}}>Regular</Text>
           <Text style={{fontWeight:"400",fontSize:14,paddingTop:5,}}>Wed,Jun 7</Text>
           <Text style={{fontWeight:"400",fontSize:14,paddingTop:5}}>8:00 AM - 9.00 AM</Text>
           </View>
       </View>

       </ScrollView>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
OrderConfirmantionSectionStye:{
flexDirection:"row",
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 }, 
shadowOpacity: 0.3,
shadowRadius: 4,
elevation: 5,
justifyContent:"space-around",
backgroundColor:"#F0F8FF",
margin:10,
borderRadius:5,
marginTop:10,
padding:10
},

OrderProductImg:{ 
 width: 120,
 height: 100,
 borderRadius:10,
flex:1
},

ConfirmationText:{
color:"gray",
fontWeight:"700",
fontSize:18
},
OrderNumberText:{
color:"gray",
fontWeight:"700",
fontSize:14,
paddingVertical:12
},
AdsStyle:{
flexDirection:"row",
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.3,
shadowRadius: 4,
elevation: 5,
marginTop:10,
borderRadius:4,
paddingHorizontal:10,
marginHorizontal:10,
justifyContent:"space-between",
backgroundColor:"#DEE1E6",
},

AdsTextStyle:{
color:"green",
marginTop:3,
fontWeight:"600",
fontSize:18,
padding:10
},

PaymentSectionStyle:{
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.3,
shadowRadius: 4,
elevation: 5,
backgroundColor:"#F0F8FF",
margin:10,
borderRadius:5,
marginTop:20,
padding:10
},

PaymentOptionText:{
justifyContent:"center",
alignItems:"center",
paddingVertical:12
},
PaymentOptionStyle:{
flexDirection:"row",
marginVertical:5,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.3,
shadowRadius: 4,
elevation: 5,
borderRadius:4,
paddingHorizontal:10,
paddingVertical:5,
justifyContent:"space-between",
backgroundColor:"#DEE1E6",
},

PaymentOptionImgStyle:{
width: 45,
height: 45 ,
borderRadius:10
},

PaymentOptionTextStyle:{
color:"black",
marginTop:3,
fontWeight:"500",
fontSize:16,
padding:10
},

TrxIDStyle:{
fontWeight:"400",
fontSize:15,
color:"#7D5AAC"
},

OrderNoteStyle:{
marginVertical:10,
shadowColor: '#000',
shadowOffset: { width: 0, height: 2 },
marginHorizontal:10,
shadowOpacity: 0.3,
shadowRadius: 4,
elevation: 5, 
borderRadius:4,
paddingHorizontal:10,
paddingVertical:5,
justifyContent:"space-between",
backgroundColor:"#DEE1E6",
},

IconTextStyle:{
justifyContent:"center",
flexDirection:'row',
paddingVertical:5
},
OrderNote:{
color:"black",
fontWeight:"500",
fontSize:16
},

VerifyEmail:{
marginVertical:10,
shadowColor: '#000', 
shadowOffset: { width: 0, height: 2 },
marginHorizontal:10, 
shadowOpacity: 0.3,
shadowRadius: 4, 
elevation: 5, 
borderRadius:4,
paddingHorizontal:10,  
paddingVertical:5, 
justifyContent:"space-between",
backgroundColor:"#DEE1E6",
},

GiveEmailStyle:{
color:"black",
fontWeight:"500",
fontSize:16,
paddingVertical:8
},

VerifyText:{
backgroundColor: "white", 
padding: 10, 
borderRadius: 10 
},

EmailVerifyAds:{
shadowColor: '#000', 
shadowOffset: { width: 0, height: 2 },
shadowOpacity: 0.3,
shadowRadius: 4,
justifyContent:"space-around",
backgroundColor:"#F0F8FF",
margin:10,
borderRadius:5,
marginTop:20,
padding:10
},

VerifyTextOne:{
flexDirection:"row",
shadowColor: '#000', 
shadowOffset: { width: 0, height: 2 }, 
shadowOpacity: 0.3,
shadowRadius: 4, 
elevation: 5, 
borderRadius:15,
paddingHorizontal:10,  
paddingVertical:5, 
backgroundColor:"#F7F0D5",
},

VerifyTextTwo:{
paddingVertical:30,
fontSize:18,
fontWeight:"500",
color:"red",
letterSpacing:3
},


backToShoppingBtn:{ 
borderWidth: 1,
width:"50%", 
borderColor: "green", 
borderRadius: 5, 
padding: 13,
marginVertical:15,
alignItems:"center" 
},


TextColor:{ 
color: "green", 
fontWeight: "700" 
},

OrderSummerySectionStyle:{ 
shadowColor: '#000', 
shadowOffset: { width: 0, height: 2 }, 
shadowOpacity: 0.3, 
shadowRadius: 4, 
elevation: 5,
backgroundColor:"#F0F8FF",
margin:10,
borderRadius:5,
marginTop:10,
padding:10
},

OrderSummeryTextStyle:{
padding:20, 
alignSelf:"center",
fontWeight:"600",
fontSize:20,
},

TitleStyle:{
color:"gray",
fontWeight:"500",
fontSize:14,
paddingVertical:2
},
TitleStyleTwo:{
color:"black",
fontWeight:"700",
fontSize:14,
paddingVertical:2
},

TitleStyleThree:{
color:"green",
fontWeight:"500",
fontSize:14,
paddingVertical:2
},

TitleStyleFour:{
color:"black",
fontWeight:"700",
fontSize:14,
paddingVertical:2
},

DeliveryInfoFotter:{ 
shadowColor: '#000', 
shadowOffset: { width: 0, height: 2 }, 
shadowOpacity: 0.3, 
shadowRadius: 4, 
elevation: 5,
backgroundColor:"#c1c1c1",
marginHorizontal:10, 
borderRadius:5,
marginTop:10,
paddingVertical:20
}
})