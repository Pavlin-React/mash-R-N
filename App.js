import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Linking, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = useState( "Mash" )
  let [session, setSession] = useState( 'true' )

  let onClickHandler = () => {
    setName( 'My name is Mash' )
    setSession( () => !session )
  }

  return (
    <View style={styles.body}>
      <Text style={ styles.text } >{ name }</Text>
      <Button title = 'Update State' onPress={ onClickHandler }/>
      <Text>{ session ? 'this is current session' : 'not current' }</Text>
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
  }
});
