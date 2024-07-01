import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import TextField from '../components/TextField'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'

export default function SignUpScreen() {

  const navigation = useNavigation()

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Sign Up</Text>

      <TextField />
      <TextField />
      <TextField />

      <PrimaryButton text='Sign Up' />

      <View style={{ flexDirection: 'row', columnGap: 5 }}>
        <Text>Do you have an account?</Text>
        <Pressable style={({pressed}) => [pressed ? {opacity: 0.5} : undefined]} onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontWeight: 'bold'}}>Sign in.</Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 32,
    flex: 1,
    justifyContent: 'center',
    rowGap: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  }
})