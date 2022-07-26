import React, { useLayoutEffect } from 'react';
import { View, Text, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import FeauturedRow from '../../components/FeautureRow'
import Categories from '../../components/Categories'


const Home = () => {
   const navigation = useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false,
      });
   }, []);

   return (
      <SafeAreaView className='bg-slate-400 pt-5 flex-col'>
         {/* Header */}
         <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
               source={{ uri: 'http://links.papareact.com/wru' }}
               className="h-7 w-7 bg-white p-4 rounded-full"
            />

            <View className="flex-1">
               <Text className="font-bold text-gray-200 text-xs">Доставить сейчас!</Text>
               <Text className="font-bold text-xl text-white">
                  Curren Location
                  <ChevronDownIcon size={20} color='#00CCBB' />
               </Text>
            </View>

            <UserIcon size={35} color='#00CCBB' />
         </View>
         {/* Search */}
         <View className="flex-row items-center space-x-2 pb-2 mx-4">
            <View className="flex-row flex-1 space-x-2 items-center bg-gray-100 p-3">
               <SearchIcon size={20} color='gray' />
               <TextInput
                  placeholder='Рестораны и кухни'
                  keyboardType='default'
                  className="px-1 flex-1"
               />
            </View>
            <AdjustmentsIcon color='#00CCBB' />
         </View>

         {/* Body */}
         <ScrollView className="bg-gray-100"
            contentContainerStyle={{
               paddingBottom: 100
            }}
         >
            {/* Categories */}
            <Categories />

            {/* Feautured Rows */}
            <FeauturedRow
               id='1'
               title='Featured'
               description='Paid placements from our partners'
               featuredCategory='featured'
            />

            {/* Tasty Discounts */}
            <FeauturedRow
               id='2'
               title='Tasty Discounts'
               description="Everyone's been enjoying these juicy discounts!"
               featuredCategory='discounts'
            />

            {/* Offers near you  */}
            <FeauturedRow
               id='3'
               title='Offers near you'
               description="Why not support your local restaurant tonight!"
               featuredCategory='offers'
            />
         </ScrollView>
      </SafeAreaView>
   );
}



export default Home;
