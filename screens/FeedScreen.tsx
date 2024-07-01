import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  Image,
  FlatList
} from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Ionicons from '@expo/vector-icons/Ionicons'
import IconButton from '../components/IconButton'

export default function FeedScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(i) => i.toString()}
        renderItem={({ item, index }) => (
          <PodcastCard
            style={index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 }}
          />
        )}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  podcastCard: {
    marginBottom: 10,
    rowGap: 5,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6
  },
  podcastImage: {
    width: '100%',
    height: 150,
    borderTopStartRadius: 6,
    borderTopEndRadius: 6,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0
  },
  podcastTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  podcastDescription: {
    color: 'gray',
    fontSize: 14
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 5
  },
  profilePhoto: {
    width: 35,
    height: 35,
    borderRadius: 99
  },
  profileName: {
    fontWeight: 'bold',
    fontSize: 12
  }
})

function PodcastCard({ style }: { style?: object }) {

  const navigation = useNavigation()

  return (
    <Pressable
      style={({ pressed }) => [
        styles.podcastCard,
        style,
        pressed ? { opacity: 0.5 } : undefined
      ]}
      onPress={() => navigation.navigate('ListenPodcast')}
    >
      <Image
        source={require('../assets/images/react_native.png')}
        style={styles.podcastImage}
      />
      <View style={{ padding: 16, rowGap: 5 }}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/react_native.png')}
            style={styles.profilePhoto}
          />
          <Text style={styles.profileName}>Username</Text>
        </View>
        <Text style={styles.podcastTitle}>Podcast Title</Text>
        <Text style={styles.podcastDescription}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, soluta.
        </Text>
      </View>
    </Pressable>
  )
}


function PodcastListCard() {
  
}