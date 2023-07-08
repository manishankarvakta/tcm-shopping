import { View, Text, SafeAreaView, ScrollView, TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';
import Routes from '../../Utility/Routes';
export default function OrderHistory({navigation}) {
  return (
    <SafeAreaView>
         <ScrollView>
            <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$255</Text>
                    <Text style={{marginHorizontal:10}}>1 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>



              <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$155</Text>
                    <Text style={{marginHorizontal:10}}>1 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>





              <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$255</Text>
                    <Text style={{marginHorizontal:10}}>1 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>






              <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$150</Text>
                    <Text style={{marginHorizontal:10}}>1 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>







              <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$25</Text>
                    <Text style={{marginHorizontal:10}}>1 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>






              <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$555</Text>
                    <Text style={{marginHorizontal:10}}>4 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>






              <View style={styles.OrderHistorycardStyle}>
                 <View style={{padding:10,}}>
                 <View style={styles.OrderIdStyles}>
                     <Text>Order Id 11881856</Text>
                     <Text style={{color:"orange"}}>Processing</Text>
                  </View>

                  <Text>Jun 12,2023</Text>

                  <View style={styles.OrderPricesStyle}>
                    <Text style={{fontWeight:"bold"}}>$55</Text>
                    <Text style={{marginHorizontal:10}}>2 Shipment</Text>
                  </View>
                 </View>

                  <View style={styles.BlankViewThree}/>

     
                  <View style={styles.IconDetails}>
                    <TouchableOpacity onPress={() => navigation.navigate(Routes.ORDER_HISTORY_DETAILS)} style={{flexDirection:"row"}}>
                    <Icon name="filetext1" size={16} color="gray" type="ant-design" paddingRight={5}/>
                     <Text style={styles.DetailsTextStyle}>Details</Text>
                    </TouchableOpacity>
                    
                  </View> 
              </View>
         </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  OrderHistorycardStyle:{
    backgroundColor:"#F6F8FA",
    marginHorizontal:10,
    borderRadius:10,
    marginVertical:5
  },

  OrderIdStyles:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:2
  },

  OrderPricesStyle:{
    flexDirection:"row",
    paddingTop:15,
    paddingBottom:10
  },

  BlankViewThree:{
    borderWidth:.4, 
    borderTopColor:"#E9EBEC",
  },

 IconDetails:{
  flexDirection:"row",
  paddingVertical:10,
  marginHorizontal:10,
  justifyContent:"space-between"
},

DetailsTextStyle:{
  fontWeight:"bold",
  fontSize:15,
  color:"#0D569E"
}
})

