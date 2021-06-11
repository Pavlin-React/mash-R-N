
import React, { useState } from 'react';
import { Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  let [name, setName] = useState( "" )

  return (
    <View style={styles.body}>
      <Text style={ styles.text } >Enter your name</Text>
      <TextInput
        style={ styles.input }
        placeholder='e.g. John'
        onChangeText = { ( value ) => setName( value ) }
      />
      <Text style={ styles.body } >New name is { name }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    height: 50,
    textAlign: 'center'
  }
})
