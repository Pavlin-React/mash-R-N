
import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

  let [submitted, setSubmitted] = useState( false )
  let onClickHandler = () => {
    setSubmitted( !submitted )
  }

  return (
    <View style={styles.body}>
      <Text style={ styles.text } >Enter your name</Text>
      <Pressable
        android_ripple={ {color: 'red'} }
        hitSlop={ { top: 50, bottom: 100, left: 50, right: 50 } }
        style={ styles.input }
        placeholder='e.g. John'
        onPress={ onClickHandler }
      />
      <Text style={ styles.text } >{ submitted ? 'clicked' : 'not clicked' }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    margin: 20
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 250,
    height: 60,
    backgroundColor: 'coral'
  }
})
