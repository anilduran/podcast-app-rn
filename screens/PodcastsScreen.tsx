import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  ScrollView
} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import PodcastItem from '../components/PodcastItem'

export default function PodcastsScreen() {
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('CreatePodcast')} style={({pressed}) => [pressed ? {opacity: 0.5} : undefined]}>
          <Ionicons name='add' color='orangered' size={20} />
        </Pressable>
      )
    })
  })

  return (
    <ScrollView>
      <View style={styles.container}>

        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
        <PodcastItem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10
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
