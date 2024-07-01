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
import PodcastCard from '../components/PodcastCard'
import PodcastListCard from '../components/PodcastListCard'

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
      

      {/* <View style={{ flex: 1 }}>
        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={(i) => i.toString()}
          renderItem={({ item, index }) => (
            <PodcastListCard
              style={index % 2 == 0 ? { marginRight: 5 } : { marginLeft: 5 }}
            />
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
   
        />
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1
  }
})
