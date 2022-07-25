import React, { useLayoutEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
   const navigation = useNavigation();

   useLayoutEffect(() => {
      navigation.setOptions({
         headerShown: false
      });
   }, []);

   return (
      <SafeAreaView>
         <Text className="text-white-500">Home</Text>
      </SafeAreaView>
   );
}



export default Home;
