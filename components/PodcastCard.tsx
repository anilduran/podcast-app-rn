import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function PodcastCard({ style }: { style?: object }) {
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
          soluta.
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  podcastCard: {
    marginBottom: 10,
    rowGap: 5,
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 6,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3
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
