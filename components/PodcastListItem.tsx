import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function PodcastListItem() {
  const navigation = useNavigation()

  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItemContainer,
        pressed ? { opacity: 0.5 } : undefined
      ]}
      onPress={() => navigation.navigate('PodcastListDetail')}
    >
      <Image
        source={require('../assets/images/react_native.png')}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.listItemTitle}>Podcast List 1</Text>
        <Text style={styles.listItemText}>Podcast List 1 Description</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 6
  },
  listItemContainer: {
    flexDirection: 'row',
   
  },
  textContainer: {
    padding: 8,
    rowGap: 5
  },
  listItemTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  listItemText: {
    fontSize: 12,
    color: 'gray'
  }
})
