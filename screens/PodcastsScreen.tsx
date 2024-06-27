import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function PodcastsScreen() {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('CreatePodcast')}>
          <Ionicons name='add' color='blue' size={24} />
        </Pressable>
      )
    })
  })

  return (
    <View style={styles.container}>
      
      <Pressable 
      style={({ pressed }) => [styles.podcastContainer, pressed ? { opacity: 0.5 } : undefined]}
      onPress={() => navigation.navigate('ListenPodcast')}>
        <Image source={require('../assets/images/swiftui.jpg')} style={styles.podcastImage} />
        <View>
          <Text style={styles.podcastTitleText}>Podcast Title</Text>
          <Text style={styles.podcastDescriptionText}>Lorem ipsum dolor sit amet consectetur.</Text>
        </View>
      </Pressable>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  podcastContainer: {
    flexDirection: 'row',
    columnGap: 10
  },
  podcastImage: {
    width: 80,
    height: 60,
    borderRadius: 6
  },
  podcastTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 3
  },
  podcastDescriptionText: {
    color: 'gray',
    fontSize: 12
  }
})