import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './src/ScreenA'
import ScreenB from './src/ScreenB'

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName='Screen_A'
      edgeWidth={ 500 }
      screenOptions={{
        headerShown: true
      }}
      >
        <Drawer.Screen
          name='Screen_A'
          component={ ScreenA }
          
        />
        <Drawer.Screen
          name='Screen_B'
          component={ ScreenB }
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  }
})
