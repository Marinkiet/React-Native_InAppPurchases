import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DemoScreen from './screens/DemoScreen';

export type RootStackParamList={
  Home:undefined;
  Paywell:undefined;
  Demo:undefined;
}
const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home" component={HomeScreen} />

        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Demo" component={DemoScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
