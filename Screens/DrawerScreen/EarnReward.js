import { View, Text, SafeAreaView, ScrollView ,TouchableOpacity,Image,StyleSheet} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base';

export default function EarnReward() {
  return (
    <SafeAreaView>
        <ScrollView>
              <View style={{paddingHorizontal:10,marginTop:25}}>
                  <Text style={{color:"#329171",}}>Your Raferral Code</Text>
                  <View style={{flexDirection:"row",paddingVertical:15,}}>
                  <Text style={{fontWeight:"800",fontSize:24,marginRight:10}}>R8MNF32</Text>
                     <TouchableOpacity>
                      <Icon name="copy1" size={21} color="gray" type="antdesign" />
                    </TouchableOpacity>
                  </View>

                  <Text>
                    Invite with the personalised referall link within Your network . 
                    you will get the refferal program reward if anyone buys from Tcm-bd using your code .
                  </Text>
              </View>

              <View>
                  <View style={{flexDirection:"row",justifyContent:"center" , margin:20}}>
                  <TouchableOpacity>
                      <Icon name="facebook-square" size={31} color="blue" type="antdesign" />
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingHorizontal:10}}>
                      <Icon name="whatsapp-square" size={31} color="green" type="font-awesome-5" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <Icon name="twitter" size={31} color="#24ACF2" type="antdesign" />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.container}>
                      <Image
                       source={require('../../assets/3432757.png')}
                       style={styles.image}
                      />
                  </View>
              </View>


              <View>
              <View style={styles.TotalPointStyle}>
                       <Text>Your Total Rewards</Text>
                       <Text>$0</Text>
                  </View>
                  
             </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 350,
  },
  TotalPointStyle:{
    flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:10,
    paddingVertical:20,
    borderTopWidth:1,
    borderTopColor:"gray",
    borderBottomWidth:1,
    borderBottomColor:"gray",
    marginHorizontal:10,
    marginVertical:20
},
});