import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = useState( "Style test" )

  let onClickHandler = () => {
    setName( 'Style test is done' )
  }

  return (
    <View style={styles.body}>
      <Text style={ styles.text } >{ name }</Text>
      <View style={ styles.button } >
      <Button title = 'Style Text' onPress={ onClickHandler }/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20
  },
  button: {
    width: '50%'
  }
})
