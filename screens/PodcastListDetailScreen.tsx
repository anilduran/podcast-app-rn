import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PodcastListDetailScreen() {


  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Image source={require('../assets/images/swiftui.jpg')} style={styles.image} />
      <View style={styles.container}>
       
        <Text style={styles.title}>Podcast List Title</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto a suscipit recusandae culpa eius aut deleniti vero magni sequi mollitia.</Text>
       
       
        <View style={styles.podcastList}>
          <Pressable 
          style={({ pressed}) => [styles.podcastCardContainer, pressed ? { opacity: 0.5 } : undefined ]} 
          onPress={() => navigation.navigate('ListenPodcast')}>
            <Image source={require('../assets/images/swiftui.jpg')} style={styles.podcastCardImage} />
            <View>
              <Text style={styles.podcastCardTitle}>Podcast Title 1</Text>
              <Text style={styles.podcastCardText}>Lorem ipsum dolor sit amet consectetur.</Text>
            </View>
          </Pressable>
        </View>


        <Text style={styles.commentsTitle}>Comments</Text>

        <ScrollView>
          <View style={styles.commentContainer}>
            <Image source={require('../assets/images/swiftui.jpg')} style={styles.commentImage} />
            <View>
              <Text style={styles.commentTitle}>Test</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet.</Text>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <Image source={require('../assets/images/swiftui.jpg')} style={styles.commentImage} />
            <View>
              <Text style={styles.commentTitle}>Test</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet.</Text>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <Image source={require('../assets/images/swiftui.jpg')} style={styles.commentImage} />
            <View>
              <Text style={styles.commentTitle}>Test</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet.</Text>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <Image source={require('../assets/images/swiftui.jpg')} style={styles.commentImage} />
            <View>
              <Text style={styles.commentTitle}>Test</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet.</Text>
            </View>
          </View>
          <View style={styles.commentContainer}>
            <Image source={require('../assets/images/swiftui.jpg')} style={styles.commentImage} />
            <View>
              <Text style={styles.commentTitle}>Test</Text>
              <Text style={styles.commentText}>Lorem ipsum dolor sit amet.</Text>
            </View>
          </View>
        </ScrollView>


        <View style={{ backgroundColor:'black' }}>
          <Pressable>
            <Text>Create a comment</Text>
          </Pressable>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 250,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    
  },
  container: {
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10
  },
  podcastList: {
    marginTop: 20
  },
  podcastCardImage: {
    width: 80,
    height: 60,
    borderRadius: 6,
    marginBottom: 10
  },
  podcastCardContainer: {
    flexDirection: 'row',
    columnGap: 10
  },
  podcastCardTitle: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 3
  },
  podcastCardText: {
    fontSize: 12,
    color: 'gray', 
  },
  commentsTitle: {
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    fontSize: 18
  },
  commentContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  commentImage: {
    width: 50,
    height: 50,
    borderRadius: 999
  },
  commentTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  commentText: {
    color: 'gray',
    fontSize: 12
  }
})