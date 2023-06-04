import { View, Text,SafeAreaView ,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon } from '@rneui/base';

export default function CartScreen() {
  return (
    <SafeAreaView >
          <ScrollView>
           
            <View style={{alignItems:"center",padding:10,justifyContent:"center",flexDirection: 'row'}}>
                 <TouchableOpacity style={{paddingRight:5}}>
                   <Icon name="angle-down" size={20} color="#000" type="font-awesome" />
                 </TouchableOpacity>
                 <Text style={{color:"#7C7C7D", alignItems:"center",justifyContent:"center"}}>
                  Have a Special Code? 
                  </Text>
            </View>

            <View style={{flexDirection: 'row',padding:10,paddingVertical:15,color:"#7C7C7D",backgroundColor:"#ed3833",justifyContent:"space-between"}}>
                 <View style={{justifyContent:"space-between",flexDirection: 'row'}}> 
                  
                 <Icon
        name="shipping-fast"
        size={20}
        color="#fff"
        type="font-awesome-5"
        paddingRight={10}
      />
                 <Text style={{color:"#fff"}}>Express Items</Text>
                 </View>
                 <Text style={{color:"#fff"}}>5.00PM-6.00PM</Text>
            </View>

            <View style={{flexDirection:"row", justifyContent:"space-around" ,paddingVertical:15}}>
            <View>
            <Image
                 source={require('../../assets/FlashSales/f1.jpg')}
                 style={{ width: 75, height: 75 }}
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

            <View style={{flexDirection:"row", justifyContent:"space-around" ,paddingVertical:15}}>
            <View>
            <Image
                 source={require('../../assets/FlashSales/f1.jpg')}
                 style={{ width: 75, height: 75 }}
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


            <View style={{flexDirection:"row", justifyContent:"space-around" ,paddingVertical:15}}>
            <View>
            <Image
                 source={require('../../assets/FlashSales/f1.jpg')}
                 style={{ width: 75, height: 75 }}
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


            <View style={{flexDirection:"row", justifyContent:"space-around" ,paddingVertical:15}}>
            <View>
            <Image
                 source={require('../../assets/FlashSales/f1.jpg')}
                 style={{ width: 75, height: 75 }}
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


            <View style={{flexDirection:"row", justifyContent:"space-around" ,paddingVertical:15}}>
            <View>
            <Image
                 source={require('../../assets/FlashSales/f1.jpg')}
                 style={{ width: 75, height: 75 }}
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


            <View style={{flexDirection:"row", justifyContent:"space-around" ,paddingVertical:15}}>
            <View>
            <Image
                 source={require('../../assets/FlashSales/f1.jpg')}
                 style={{ width: 75, height: 75 }}
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
          </ScrollView>
    </SafeAreaView >
  )
}