import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PrimaryButton() {
  return <Pressable style={({ pressed}) => [styles.button, pressed ? { opacity: 0.5} : undefined]}>
    <Text style={styles.buttonText}>Click</Text>
  </Pressable>
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 6
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})
