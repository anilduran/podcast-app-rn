import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'


export default function TextField({ leadingIcon, trailingIcon }: {leadingIcon?: any, trailingIcon?: any}) {
  return (
    <View style={styles.inputContainer}>
      {leadingIcon}
      <TextInput style={styles.input} placeholder='Enter an input' />
      {trailingIcon}
    </View>
  )
}


const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1.5,
    borderColor: 'black',
    padding: 16,
    borderRadius: 6,
    backgroundColor: 'white'
  },
  input: {

  }
})