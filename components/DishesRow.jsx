import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Currency from 'react-currency-formatter';
import { MinusCircularIcon } from 'react-native-heroicons/solid'

const DishesRow = ({ name, description, price, image }) => {
   return (
      <>
         <TouchableOpacity className='bg-white border border-gray-200 p-2 my-2' >
            <View className='flex-row items-center'>
               <View className='flex-1 pr-2'>
                  <Text className="text-lg mb-1">{name}</Text>
                  <Text className="text-gray-400">{description}</Text>
                  <Text className="text-gray-400 mt-2">
                     <Currency
                        quantity={price}
                        currency="GBP"
                     />
                  </Text>
               </View>

               <View>
                  <Image source={{ uri: image }} className='h-20 w-20 bg-gray-300 p-4' style={{ borderWidth: 1, borderColor: '#F3F3F4' }} />
               </View>
            </View>
         </TouchableOpacity>
      </>
   )
}

export default DishesRow