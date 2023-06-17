import { View, Image,Text } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
  } from '@react-navigation/drawer';


export default function CustomDrawer(props) {
  return (
    <View style={{flex:1}}>
          <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:"#ffff"}}>
            <Image source={require('../assets/mansurol.jpeg')} style={{width:60,height:60,borderRadius:40,marginTop:40,alignSelf:"center"}}/>
            <Text style={{padding:10,marginBottom:22,alignSelf:"center",fontWeight:"600",fontSize:20}}>Mansurol Islam</Text>
           <DrawerItemList {...props} />
          
           </DrawerContentScrollView>
    </View>
  )
}