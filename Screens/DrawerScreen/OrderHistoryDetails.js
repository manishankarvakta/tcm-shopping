import { View, Text, SafeAreaView, Image ,TouchableOpacity} from 'react-native';
import React from 'react';
import { Icon } from '@rneui/base';
export default function OrderHistoryDetails() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <View style={{ flexDirection: "row", justifyContent: "center",marginTop:10 }}>

            <Image
              source={require('../../assets/FlashSales/f9.jpg')}
              style={{ width: 90, height: 90, borderRadius: 15 }}
              resizeMode="contain"
            />

            <View style={{ padding: 10, alignSelf: "center" }}>
              <Text>
                <Text style={{ fontSize: 18, fontWeight: "900" ,margin:10}}>Order  </Text>
                <Text style={{ fontSize: 18, fontWeight: "700", color: "#CCCCAE",padding:10 }}>Cancelled</Text>
                
              </Text>
              <Text style={{ marginVertical: 5 }}>Order ID: <Text style={{ fontSize: 14, fontWeight: "900" }}>11880922</Text></Text>
            </View>

          </View>

          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 20 }}>
            <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Icon name="shopping-bag" size={25} padding={5}  color="green" type="feather" paddingRight={5}/>

              <Text style={{color:"green",fontSize:15}}>Reorder</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Icon name="shopping-basket" size={25} padding={5}  color="green" type="Fontisto" paddingRight={5}/>
              <Text style={{color:"green",fontSize:15}}>Items</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Icon name="payment" size={25} padding={5} color="green" type="Fontisto" paddingRight={5}/>
              <Text style={{color:"green",fontSize:15}}>Pay Now</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: "center", marginHorizontal: 10 }}>
            <Icon name="cancel" size={25} padding={5} color="green" type="MaterialIcons" paddingRight={5}/>
              <Text style={{color:"green",fontSize:15}}>Cancel</Text>
            </TouchableOpacity>
          </View>

          <View style={{borderWidth:.4, borderTopColor:"#BABCBE",marginHorizontal:10,marginTop:10}}/>

          <View style={{backgroundColor:"#AEBDC6",marginHorizontal:10,padding:10,marginVertical:10,borderRadius:10}}>
              <Text style={{fontSize:15,fontWeight:"700"}}>11914325A</Text>
              <Text>Jun 12,2023 | 9:00AM - 10:00 AM</Text>
          </View>

          <View style={{backgroundColor:"#DEE1E6",justifyContent:"space-between", marginHorizontal:10,padding:10,marginVertical:5,borderRadius:10,flexDirection:"row"}}>
             <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
              <Icon name="box-open" size={25} color="orange" type="font-awesome-5" />
              <Text style={{fontSize:15,fontWeight:"500",padding:3,color:"gray",marginLeft:10}}>Return Items</Text>
             </View>

              <TouchableOpacity>
              <Icon name="keyboard-arrow-right" size={30} color="gray" type="MaterialIcons" />

              </TouchableOpacity>

          </View>


          <View style={{backgroundColor:"#DEE1E6",justifyContent:"space-between", marginHorizontal:10,padding:10,marginVertical:5,borderRadius:10,flexDirection:"row"}}>
             <View style={{flexDirection:"row", justifyContent:"flex-start"}}>
              <Icon name="report-problem" size={25} color="red" type="MaterialIcons" />
              <Text style={{fontSize:15,fontWeight:"500",padding:3,color:"gray",marginLeft:10}}>Report Issues</Text>
             </View>

              <TouchableOpacity>
              <Icon name="keyboard-arrow-right" size={30} color="gray" type="MaterialIcons" />

              </TouchableOpacity>

          </View>

          <View style={{marginHorizontal:10,marginTop:30}}>
              <Text style={{fontSize:18,fontWeight:"700"}}>Delivery details</Text>
              <View style={{flexDirection:"row",paddingVertical:15,}}>
                 <Icon name="home" size={30} color="gray" type="FontAwesome" />
                  <View style={{paddingHorizontal:10}}>
                  <Text>House 5 ,Road 8 , Sector 11 {'\n'}Uttara ,Dhaka</Text>
                 <Text style={{fontWeight:"700",paddingTop:3}}>+8801680622993</Text>
                  </View>
              </View>


          </View>
     

          <View style={{borderWidth:.5, borderTopColor:"#BABCBE",marginHorizontal:10}}></View>

          <View style={{padding:10,}}>
             <Text><Text style={{fontWeight:"900",fontSize:16}}>Total </Text> <Text style={{fontSize:14,color:"green"}}>$444</Text></Text>
          </View>

         
        </View>
      </View>
    </SafeAreaView>
  );
}