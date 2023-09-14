import { SafeAreaView, Text, Image, TouchableOpacity, ScrollView, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import ActionRow from '../components/ActionRow';
const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-gray-100 relative'>
      {/* Icon Pro/Upgrade to Pro button*/}
      <ScrollView>
        <TouchableOpacity className=" items-center top-5 z-50 right-10 absolute">
          <Ionicons name="person-circle" size={30} color="#E5962D" />
          <Text className='text-[#E5962D]'>UPGRADE</Text>
        </TouchableOpacity>
        {/* Image */}
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full h-64" />
        {/* View flexed into two Action Row */}
        <View className="mx-3">

          <View className="flex-row justify-between space-x-2">
            <ActionRow
              //props/attributes 
              title="Track Workout"
              screen="Demo"
              color="#E5962D"
              icon="fitness"
              vertical
            />
              <ActionRow
              title="Browse Workouts"
              screen="Demo"
              color="#426cf5"
              icon="share-social"
              vertical
            />
           
          </View>
          <ActionRow
              title="Connect with Friends"
              screen="Demo"
              color="#BAC956"
              icon="share-social"
              vertical
            />
          <ActionRow
            title="Add an Exercise"
            screen="Demo"
            color="#e02683"
            icon="add-circle"
            requiresPro
          />
          <ActionRow
            title="Create a Routine "
            screen="Demo"
            color="#f5d716"
            icon="md-time"
            requiresPro
          />
          <ActionRow
            title="Join Challenge"
            screen="Demo"
            color="#23967F"
            icon="trophy"
            requiresPro
          />
        </View>

      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen