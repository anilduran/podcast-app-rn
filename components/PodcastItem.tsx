import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function PodcastItem() {
  const navigation = useNavigation()

  return (
    <Pressable
      style={({ pressed }) => [
        styles.podcastCardContainer,
        pressed ? { opacity: 0.5 } : undefined
      ]}
      onPress={() => navigation.navigate('ListenPodcast')}
    >
      <Image
        source={require('../assets/images/react_native.png')}
        style={styles.podcastCardImage}
      />
      <View>
        <Text style={styles.podcastCardTitle}>Podcast Title 1</Text>
        <Text style={styles.podcastCardText}>
          Lorem ipsum dolor sit amet consectetur.
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  podcastCardImage: {
    width: 80,
    height: 60,
    borderRadius: 6,
  },
  podcastCardContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  podcastCardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  podcastCardText: {
    fontSize: 12,
    color: 'gray'
  }
})
