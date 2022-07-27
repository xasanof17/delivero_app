import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestarauntsCard from './RestarauntsCard'

const FeautureRow = ({ id, title, description, featuredCategory }) => {
   return (
      <View>
         <View className="mt-4 flex-row items-center justify-between px-4">
            <Text className="font-bold text-lg">{title}</Text>
            <ArrowRightIcon color='#00CCBB' />
         </View>
         <Text className="text-xs text-gray-500 px-4">{description}</Text>
         <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 15 }}
            showsHorizontalScrollIndicator={false}
            className='pt-4'
         >
            {/* RestarauntsCards... */}
            <RestarauntsCard
               id={1}
               imgUrl='https://www.thespruceeats.com/thmb/hl4lkmdLO7tj1eDCsGbakfk97Co=/3088x2055/filters:fill(auto,1)/marinated-top-round-steak-3060302-hero-02-ed071d5d7e584bea82857112aa734a94.jpg'
               title='Steak'
               rating={4.2}
               genre='Italian'
               address='123 Main St'
               short_description='This is a Testing description'
               dishes={[]}
               long={20}
               lat={0}
            />
            <RestarauntsCard
               id={1}
               imgUrl='https://www.justonecookbook.com/wp-content/uploads/2020/11/Kenchinjiru-1006-I.jpg'
               title='Kenchinjiru'
               rating={4.0}
               genre='Chinese'
               address='123 Main St'
               short_description='This is a Testing description'
               dishes={[]}
               long={20}
               lat={0}
            />
            <RestarauntsCard
               id={1}
               imgUrl='https://www.m24.ru/b/d/nBkSUhL2hFAvnsm_Lr6BvMKnxdDs9Zu-yyqYy7jLs2KQeXqLBmmcmzZh59JUtRPBsdaJqSfJd54qEr7t1mNwKSGK7WY=dY4Ivvx8xVWhDNgRip2AgA.jpg'
               title='Burger'
               rating={3.5}
               genre='Usa'
               address='123 Main St'
               short_description='This is a Testing description'
               dishes={[]}
               long={20}
               lat={0}
            />
         </ScrollView>
      </View>
   )
}

export default FeautureRow