import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'
import PodcastListItem from '../components/PodcastListItem'
import PodcastItem from '../components/PodcastItem'

export default function UserDetailScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.profileContainer}>
          <Image source={require('../assets/images/react_native.png')} style={styles.profileImage} />
          <Text style={styles.profileName}>Username</Text>
        </View>

        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', width: '40%', paddingBottom: 5 }}>
          <Text style={styles.title}>Podcast Lists</Text>  
        </View>

        <PodcastListItem />
        <PodcastListItem />
        <PodcastListItem />
        <PodcastListItem />

        <View style={{ borderBottomWidth: 1, borderBottomColor: 'lightgray', width: '40%', paddingBottom: 5, }}>
          <Text style={styles.title}>Podcasts</Text>
        </View>
        
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
  profileContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 999
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 16
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  }
})