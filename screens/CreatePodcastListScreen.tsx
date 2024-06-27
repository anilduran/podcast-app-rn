import { View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function CreatePodcastListScreen() {


  const [image, setImage] = useState<string | null>(null)
 

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }

  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Create Podcast List</Text>
      {
        image ? 
        <Pressable style={({ pressed }) => [pressed ? { opacity: 0.5 } : null]} onPress={pickImage}>
          <Image source={{ uri: image }} style={styles.imageContainer} /> 
        </Pressable>:
        <Pressable onPress={pickImage} style={({ pressed  }) => [pressed ? { opacity: 0.5 } : undefined]}>
          <View style={styles.placeholderContainer}>
            <Text style={styles.placeholderContainerText}>Pick an image</Text>
          </View>
        </Pressable> 
      }

      <TextInput style={styles.input} placeholder='Enter a name'  />
      <TextInput style={styles.input} placeholder='Enter a description'  />

      <Pressable style={({ pressed }) => [styles.button, pressed ? { opacity: 0.5 } : undefined]} onPress={pickImage}>
        <Text style={styles.buttonText}>Create</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        rowGap: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        padding: 16,
        borderRadius: 6
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 6,
        paddingVertical: 16
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
    placeholderContainer: {
      width: '100%',
      height: 200,
      borderRadius: 6,
      backgroundColor: 'lightgray',
      justifyContent: 'center'
    },
    placeholderContainerText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'gray'
    },
    imageContainer: {
      width: '100%',
      height: 200,
      borderRadius: 6
    }
})