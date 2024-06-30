import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function LibraryScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <ListItem text='Podcast lists' onPress={() => navigation.navigate('PodcastLists')} />
      <ListItem text='Podcasts' onPress={() => navigation.navigate('Podcasts')} />
      <ListItem text='Subscribed podcast lists' onPress={() => navigation.navigate('SubscribedPodcastLists')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 6,
    alignItems: 'center',
    columnGap: 10
  }
})

function ListItem({
  leadingIcon,
  text,
  style,
  onPress,
  ...props
}: {
  leadingIcon?: any
  text: string
  style?: object
  onPress: () => void
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        style,
        pressed ? { opacity: 0.5 } : undefined
      ]}
      onPress={onPress}
      {...props}
    >
      {leadingIcon}
      <Text>{text}</Text>
      <View style={{ flex: 1 }}></View>
      <Ionicons name='chevron-forward' size={16} />
    </Pressable>
  )
}
