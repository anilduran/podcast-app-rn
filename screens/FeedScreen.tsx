import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import IconButton from '../components/IconButton'

export default function FeedScreen() {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
       <IconButton onPress={() => navigation.navigate('CreatePodcast')}>
        <Ionicons name='add' size={20} color='orangered' style={{ marginRight: 20 }} />
       </IconButton>
      )
    })
  })

  return (
    <View>
      <Text>FeedScreen</Text>
      <Pressable onPress={() => navigation.navigate('CreatePodcastList')}>
        <Text>Hello world</Text>
      </Pressable>
    </View>
  )
}