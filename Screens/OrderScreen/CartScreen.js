import { View, Text,SafeAreaView ,TouchableOpacity,Image ,StyleSheet} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from '@rneui/base';
import Routes from '../../Utility/Routes';

export default function CartScreen({navigation}) {
  return (
    <SafeAreaView style={{backgroundColor:"#fff"}}>
          <ScrollView>
           
          <View style={styles.HeaderContext}>
                 <TouchableOpacity style={{paddingRight:5}}>
                     <Icon name="angle-down" size={20} color="#000" type="font-awesome" />
                 </TouchableOpacity>
                 <Text style={styles.HeaderText}>
                       Have a Special Code? 
                  </Text>
            </View>

            <View style={styles.ExpressIteamsStyle}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                      <Icon name="shipping-fast" size={20} color="#fff"  type="font-awesome-5" paddingRight={10}/>
                      <Text style={{color:"#fff"}}>Express Items</Text>
                 </View>
                 <Text style={{color:"#fff"}}>5.00PM-6.00PM</Text>
            </View>

            <View style={styles.CartProductStyle}>
            <View>
            <Image
                 source={require('../../assets/f1.png')}
                 style={styles.CartProductImgStyle}
             />
            </View>

            <View style={{justifyContent:"space-between",paddingHorizontal:10,}}>
              <View>
                <Text>Lychee Premium</Text>
              </View>
              <View style={{flexDirection:"row"}}>
                  <Text style={{color:"red"}}>$175  </Text> 
                  <Text style={{textDecorationLine: 'line-through' }}>$225</Text>
                  <Text> | 50 pcs</Text>
              </View>
            </View>

            <View style={{flexDirection:"row",alignItems:"flex-end",alignSelf: 'flex-end'}}>

            <TouchableOpacity><Icon name="delete" size={20} color="red" type="ant-design" paddingRight={10}/></TouchableOpacity>
            <TouchableOpacity><Icon name="minus" size={20} color="#000" type="ant-design" paddingRight={10}/></TouchableOpacity>
            <Text>1</Text>
            <TouchableOpacity><Icon name="plus" size={20} color="#000" type="ant-design" paddingLeft={10}/></TouchableOpacity>

            </View>
            </View>
            <View style={{ flexDirection:"row",margin:30, marginHorizontal:10,paddingVertical:10,backgroundColor:"#D4E9F9",borderRadius:5,}}>
  
              <View style={{flexDirection:"row",justifyContent:"space-between",marginHorizontal:20,}}>
              <Icon style={{  width: 14, height: 14, borderRadius: 15, backgroundColor: "green", justifyContent: "center", alignItems: "center",marginHorizontal:10,marginVertical:2}} name="check" size={12} color="#fff" type="ant-design"/>
              <Text style={{color:"#000"}}>Delivery fee is reduced to $0 from $29 </Text>
              </View>
            </View>


            <TouchableOpacity onPress={() => navigation.navigate(Routes.CONFIRM_ORDER)} style={{flexDirection:"row",justifyContent:"space-between", marginHorizontal:10,paddingVertical:12,backgroundColor:"red",borderRadius:10,paddingHorizontal:10,marginBottom:15}}>
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
          </ScrollView>
    </SafeAreaView >
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

ExpressIteamsStyle:{
  flexDirection: 'row',
  padding:10,
  paddingVertical:15,
  color:"#7C7C7D",
  backgroundColor:"#ed3833",
  justifyContent:"space-between"
},

CartProductStyle:{  
 flexDirection: "row",
 justifyContent: "space-around",
 paddingVertical: 10,
 borderWidth: 1,
 marginVertical:10,
 marginHorizontal:10,
 backgroundColor:"#F3F6FD",
 borderColor: "#ddd",
 borderRadius: 5,
 shadowColor: "#000",
 shadowOffset: { width: 0, height: 2 },
 shadowOpacity: 0.8,
 shadowRadius: 4,
 elevation: 55
},

CartProductImgStyle:{
  width: 55, 
  height: 55 ,
  borderRadius:10
},

})