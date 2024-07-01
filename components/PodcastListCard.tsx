import { Image, Pressable, StyleSheet, Text, View } from 'react-native'

export default function PodcastListCard({ style }: { style?: object }) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.podcastListCard,
        style,
        pressed ? { opacity: 0.5 } : undefined
      ]}
    >
      <Image
        source={require('../assets/images/react_native.png')}
        style={styles.podcastListImage}
      />
      <View style={{ padding: 16, rowGap: 5 }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{ backgroundColor: 'gray', borderRadius: 30, padding: 5 }}
          >
            <Text style={{ fontSize: 10, color: 'white' }}>Category</Text>
          </View>
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/react_native.png')}
            style={styles.profilePhoto}
          />
          <Text style={styles.profileName}>Username</Text>
        </View>
        <Text style={styles.podcastListName}>Podcast List</Text>
        <Text style={styles.podcastListDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          laudantium?
        </Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  podcastListCard: {
    flex: 1,
    rowGap: 10,
    backgroundColor: 'white',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 6
  },
  podcastListImage: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
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
  },
  podcastListName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  podcastListDescription: {
    color: 'gray',
    fontSize: 14
  }
})
