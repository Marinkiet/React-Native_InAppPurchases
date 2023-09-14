import { View, Text,SafeAreaView ,TouchableOpacity} from 'react-native'
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export type NavigationProp = NativeStackNavigationProp<
RootStackParamList,"Demo">;

//call in hook
const DemoScreen = ()=>{
    const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className='bg-[#E59620] flex-1'>
        <TouchableOpacity onPress={navigation.goBack} className='flex-row items-start p-5'>
            <Ionicons name="arrow-back" size={50} color="white"></Ionicons>
            <Text className='text-white'>Go Back</Text>
        </TouchableOpacity>
      <Text>DemoScreen</Text>
    </SafeAreaView>
  );
};

export default DemoScreen;