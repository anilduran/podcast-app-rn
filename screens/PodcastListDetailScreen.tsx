import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import CommentListItem from '../components/CommentListItem'
import PodcastListItem from '../components/PodcastListItem'
import PodcastItem from '../components/PodcastItem'
import PrimaryButton from '../components/PrimaryButton'

export default function PodcastListDetailScreen() {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../assets/images/react_native.png')}
          style={styles.image}
        />
        <View style={styles.profileContainer}>
          <Pressable style={({pressed}) => [pressed ? {opacity: 0.5}: undefined]} onPress={() => navigation.navigate('UserDetail')}>
            <View style={{ flexDirection: 'row', alignItems: 'center', columnGap: 10 }}>
              <Image
                source={require('../assets/images/react_native.png')}
                style={styles.profilePhoto}
              />
              <Text style={styles.profileName}>Username</Text>
            </View>
          </Pressable>
          <View style={{ flex: 1 }}></View>
          <SubscribeButton />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Podcast List Title</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a
            suscipit recusandae culpa eius aut deleniti vero magni sequi
            mollitia.
          </Text>

          <PodcastItem />
          <PodcastItem />
          <PodcastItem />
          <PodcastItem />

          <Text style={styles.commentsTitle}>Comments</Text>

          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20
  },
  container: {
    padding: 16,

    rowGap: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  description: {
    color: 'gray'
  },
  commentsTitle: {
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 18
  },
  profileContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 16
  },
  profilePhoto: {
    width: 60,
    height: 60,
    borderRadius: 99
  },
  profileName: {
    fontWeight: 'bold'
  },
  subscribeButton: {
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1.5,
    borderColor: 'black'
  },
  subscribeButtonText: {
    color: 'black'
  }
})

function SubscribeButton() {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.subscribeButton,
        pressed ? { opacity: 0.5 } : undefined
      ]}
    >
      <Text style={styles.subscribeButtonText}>Subscribe</Text>
    </Pressable>
  )
}
