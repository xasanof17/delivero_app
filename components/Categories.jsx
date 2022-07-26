import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
   return (
      <ScrollView
         contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
         horizontal
         showsHorizontalScrollIndicator={false}
      >
         <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Offers' />
         <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Pizza' />
         <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Thai' />
         <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Sushi' />
         <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Asian' />
         <CategoryCard imgUrl='https://links.papareact.com/gn7' title='Osh' />
      </ScrollView>
   )
}

export default Categories