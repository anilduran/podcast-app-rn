import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import PodcastListItem from '../components/PodcastListItem'

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
    <ScrollView>
      <View style={styles.container}>
        <PodcastListItem />
        <PodcastListItem />
        <PodcastListItem />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10
  },
  
})

