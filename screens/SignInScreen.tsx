import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import PrimaryButton from '../components/PrimaryButton'
import TextField from '../components/TextField'

export default function SignInScreen() {
  const navigation = useNavigation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <TextField />
      <TextField />

      <PrimaryButton text='Sign In' />

      <View style={{flexDirection: 'row', columnGap: 5 }}>
        <Text>Do you not have an account?</Text>
        <Pressable
          style={({ pressed }) => [pressed ? { opacity: 0.5 } : undefined]}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={{fontWeight: 'bold'}}>Sign up.</Text>
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
