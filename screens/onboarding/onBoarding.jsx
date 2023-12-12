import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const onBoarding = () => {
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: 'Find the perfect place to stay',
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: 'Discover the world',
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: 'Find out best hotels',
        },
    ]
  return (
      <FlatList pagingEnabled horizontal showsHorizontalScrollIndicator={false} data={slides} keyExtractor={(item)=>item.id} />
  )
}

export default onBoarding   

const styles = StyleSheet.create({})