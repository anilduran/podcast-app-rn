import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'


export default function PodcastListsScreen() {


  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('CreatePodcastList')}>
          <Ionicons name='add' color='blue' size={24} />
        </Pressable>
      )
    })
  })


  return (
    <View style={styles.container}>

      <Pressable style={({ pressed }) => [styles.listItemContainer, pressed ? { opacity: 0.5 } : undefined]}
        onPress={() => navigation.navigate('PodcastListDetail')}>
        <Image source={require('../assets/images/swiftui.jpg')} style={styles.image}  />
        <View style={styles.textContainer}>
          <Text style={styles.listItemTitle}>Podcast List 1</Text>
          <Text style={styles.listItemText}>Podcast List 1 Description</Text>
        </View>
      </Pressable>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

  },
  image: {
    width: 80,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 6
  },
  listItemContainer: {
    flexDirection: 'row',
    padding: 16
  },
  textContainer: {
    padding: 8,
    rowGap: 5
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  listItemText: {
    fontSize: 12,
    color: 'gray'
  }
})