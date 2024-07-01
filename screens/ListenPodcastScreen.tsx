import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import CommentListItem from '../components/CommentListItem'
import PrimaryButton from '../components/PrimaryButton'

function Button({
  children,
  onPress
}: {
  children: React.ReactNode
  onPress?: () => void
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed ? { opacity: 0.5 } : undefined
      ]}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}

export default function ListenPodcastScreen() {
  const [isPlaying, setIsPlaying] = useState(false)
  const navigation = useNavigation()

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
        >
          <Ionicons name='heart-outline' color='orangered' size={30} />
        </Pressable>
      )
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ padding: 16, rowGap: 10 }}>
          <Image
            source={require('../assets/images/react_native.png')}
            style={styles.image}
          />

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
              marginTop: 20
            }}
          >
            <Pressable
              style={({ pressed }) => [
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  columnGap: 10
                },
                pressed ? { opacity: 0.5 } : undefined
              ]}
              onPress={() => navigation.navigate('UserDetail')}
            >
              <Image
                source={require('../assets/images/react_native.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 999
                }}
              />

              <Text>Test</Text>
            </Pressable>
          </View>

          <Text style={styles.titleText}>Podcast Title</Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
            ipsa?
          </Text>

          <Slider
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='black'
            minimumTrackTintColor='black'
            maximumTrackTintColor='white'
            style={{ marginTop: 20 }}
          />

          <View style={styles.buttonsContainer}>
            <Button>
              <Ionicons name='play-skip-back' size={32} color='white' />
            </Button>
            <View style={{ flex: 1 }}></View>
            <Button onPress={() => setIsPlaying(!isPlaying)}>
              <Ionicons
                name={isPlaying ? 'pause' : 'play'}
                size={32}
                color='white'
              />
            </Button>
            <View style={{ flex: 1 }}></View>
            <Button>
              <Ionicons name='play-skip-forward' size={32} color='white' />
            </Button>
          </View>

          <Text style={styles.commentsTitle}>Comments</Text>

          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
          <CommentListItem />
        </View>
      </ScrollView>

      <View style={styles.actionsContainer}>
        <PrimaryButton text='Leave a comment' style={{ flex: 1 }} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 6
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  descriptionText: {
    fontSize: 14,
    color: 'gray'
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 32
  },
  button: {
    backgroundColor: 'black',
    padding: 16,
    borderRadius: 999
  },
  buttonText: {
    color: 'white'
  },
  commentsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  commentCard: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
    marginBottom: 10
  },
  commentCardImage: {
    width: 50,
    height: 50,
    borderRadius: 999
  },
  commentCardTitle: {
    fontWeight: 'bold'
  },
  commentCardText: {
    color: 'gray'
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 32,
    paddingHorizontal: 16,
    paddingTop: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  commentButton: {
    backgroundColor: 'black',
    width: '100%',
    paddingVertical: 8,
    borderRadius: 6
  },
  commentButtonText: {
    color: 'white',
    paddingVertical: 8,
    textAlign: 'center'
  }
})
