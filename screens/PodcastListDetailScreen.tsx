import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView
} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CommentListItem from '../components/CommentListItem'
import PodcastListItem from '../components/PodcastListItem'
import PodcastItem from '../components/PodcastItem'

export default function PodcastListDetailScreen() {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          source={require('../assets/images/react_native.png')}
          style={styles.image}
        />
        <View style={styles.container}>
          <Text style={styles.title}>Podcast List Title</Text>
          <Text>
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
    padding: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },

  commentsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 18
  }
})
