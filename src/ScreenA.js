import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'


export default function ScreenA( { navigation } ) {

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