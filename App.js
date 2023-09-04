import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Univertsy from './screen/Univertsy'
import UniversityDetails from './screen/UniversityDetails'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName='University'
    screenOptions={{headerShown:false}}>
    
      <Stack.Screen name="Univertsy" component={Univertsy} />
      <Stack.Screen name="UniversityDetails" component={UniversityDetails} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

Cointainer:{

  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
}

})