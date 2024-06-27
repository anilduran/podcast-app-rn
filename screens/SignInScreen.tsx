import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function SignInScreen() {
    const navigation = useNavigation()

  return (
    <View>
      <Text>SignInScreen</Text>
      <Pressable>
        <Text>Go</Text>
      </Pressable>
    </View>
  )
}