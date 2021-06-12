import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export default function ScreenB( { navigation } ) {

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
