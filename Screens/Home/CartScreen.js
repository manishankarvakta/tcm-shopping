import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../Components/ProductCard'


export default function CartScreen() {
    const cart = useSelector((state ) => state.cart.cart)
  return (
    <View>
        {
            cart.map(product =>  <ProductCard product={product}/>)
        }
    </View>
  )
}