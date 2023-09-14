import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export type NavigationProp = NativeStackNavigationProp<
    RootStackParamList, "Demo">;

//call in hook
const DemoScreen = () => {
    const navigation = useNavigation<NavigationProp>();
    return (
        <SafeAreaView className='bg-[#E59620] flex-1'>
            <TouchableOpacity onPress={navigation.goBack} className='flex-row items-start p-5'>
                <Ionicons name="arrow-back" size={50} color="white"></Ionicons>
                <Text className='text-white'>Go Back</Text>
            </TouchableOpacity>

            <View className='flex-1 items-center justify-center px-10'>
                <Text className='text-white text-2xl font-extrabold'>Hooray!</Text>
                <Text className='text-white text-2xl font-extrabold'>You have access to this feature!</Text>
                <Ionicons name='build-outline' size={200} color="white"></Ionicons>
                <View>
                    <Ionicons name='checkmark-circle-sharp' size={60} color="#96f550"></Ionicons>
                </View>
                <Text className='text-white mt-10 flex-1 font-bold text-center'> This is where the feature page and its details go.
                    navigation.navigate('NextSpecifiedPage')</Text>
            </View>

        </SafeAreaView>
    );
};

export default DemoScreen;