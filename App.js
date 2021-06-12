import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { background } from 'jimp';

const Stack = createStackNavigator();


function ScreenA( { navigation } ) {

  let onPressHandler= () => {
    navigation.navigate( 'Screen_B' )
  }

  return(
    <View  style={ styles.body } >
      <Text style={ styles.text } >Screen A</Text>
      <Pressable
        style={ ( { pressed } ) => ( { backgroundColor: pressed ? 'yellow' : 'aqua' } ) }
        onPress={ onPressHandler }
      >
        <Text style={ styles.text } >Go to screen B</Text>
      </Pressable>
    </View>
  )
}

function ScreenB( { navigation } ) {

  let onPressHandler = () => {
    navigation.navigate( 'Screen_A' )
  }

  return(
    <View  style={ styles.body } >
      <Text style={ styles.text } >Screen B</Text>
      <Pressable
        style={ ( { pressed } ) => ( { backgroundColor: pressed ? 'yellow' : 'aqua' } ) }
        onPress={ onPressHandler }
      >
        <Text style={ styles.text } >Go to screen A</Text>
      </Pressable>
    </View>
  )
}

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
            header: () => null
          }}
      >
        <Stack.Screen
          name='Screen_A'
          component={ ScreenA }
          
        />
        <Stack.Screen
          name='Screen_B'
          component={ ScreenB }
        />
      </Stack.Navigator>
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
