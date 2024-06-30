import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import TextField from '../components/TextField'

export default function CreatePodcastScreen() {
  return (
    <ScrollView style={styles.container}> 
      <Text>CreatePodcastScreen</Text>
      <TextField />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  }
})