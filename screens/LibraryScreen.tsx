import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LibraryScreen() {

  const navigation = useNavigation()


  

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('PodcastLists')}>
        <Text>Your podcast lists</Text>
      </Button>
      <Button onPress={() => navigation.navigate('Podcasts')}>
        <Text>Your podcasts</Text>
      </Button>
      <Button onPress={() => navigation.navigate('SubscribedPodcastLists')}>
        <Text>Your subscribed podcast lists</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // padding: 16
  },
  button: {
    // backgroundColor: 'lightgray',
    padding: 16,
    // marginBottom: 10
  }
})

function Button(props: any) {

  return(
    <Pressable 
    style={({ pressed }) => [styles.button, pressed ? { opacity: 0.5, } : undefined]}
    {...props}>
      {props.children}
    </Pressable>
  )
}

