import { View, Text, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function FeedScreen() {

  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('CreatePodcastList')} style={{ marginRight: 16 }}>
          <Text>+</Text>
        </Pressable>
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