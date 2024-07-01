import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

export default function PrimaryButton({text, style}: {text: string, style?: object}) {
  return <Pressable style={({ pressed}) => [styles.button, style, pressed ? { opacity: 0.5} : undefined]}>
    <Text style={styles.buttonText}>{text}</Text>
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
