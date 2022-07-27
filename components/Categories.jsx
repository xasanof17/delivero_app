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
         <CategoryCard imgUrl='https://thumbs.dreamstime.com/b/special-offer-price-tag-sign-paper-against-rustic-red-painted-barn-wood-55863934.jpg' title='Offers' />
         <CategoryCard imgUrl='https://img.freepik.com/premium-photo/tasty-pepperoni-pizza-with-mushrooms-and-olives_79782-1976.jpg?w=2000' title='Pizza' />
         <CategoryCard imgUrl='https://cdn.gastrotourism.uz/uploads/it/7EQqk2rf3nhWv5QrYyKZy6JVdJZYl4_normal.jpg' title='Uzbek' />
         <CategoryCard imgUrl='https://cdn.vox-cdn.com/thumbor/E5rfUCpBOytwbT8za-tryR_7nsM=/0x0:2500x1667/1200x900/filters:focal(1050x634:1450x1034)/cdn.vox-cdn.com/uploads/chorus_image/image/56240537/DishSpread_28_TukTuk.34.jpg' title='Thai' />
         <CategoryCard imgUrl='https://yashasushi.uz/uploads/img/slide1.jpg' title='Sushi' />
         <CategoryCard imgUrl='https://thekitchencommunity.org/wp-content/uploads/2021/09/asian-shutterstock_587404205.jpg' title='Asian' />
      </ScrollView>
   )
}

export default Categories