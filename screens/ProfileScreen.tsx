import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ProfileListItem from '../components/ProfileListItem'

export default function ProfileScreen() {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Pressable style={({ pressed }) => [pressed ? {opacity: 0.5} : undefined]}>
            <Image source={require('../assets/images/react_native.png')} style={styles.profilePhoto} />
          </Pressable>
          <View >
            <Text style={styles.usernameText}>Username</Text>
            <Text style={styles.emailText}>test@example.com</Text>
          </View>

        </View>
        <ProfileListItem
          text='Change Username'
          leadingIcon={
            <Ionicons name='person-outline' size={20} color='black' />
          }
          onPress={() => navigation.navigate('ChangeUsername')}
        />
        <ProfileListItem
          text='Change Email'
          leadingIcon={
            <Ionicons name='mail-outline' size={20} color='black' />
          }
          onPress={() => navigation.navigate('ChangeEmail')}
        />
        <ProfileListItem
          text='Change Password'
          leadingIcon={
            <Ionicons name='lock-closed-outline' size={20} color='black' />
          }
          onPress={() => navigation.navigate('ChangePassword')}
        />

        <ProfileListItem
          text='Sign out'
          leadingIcon={<Ionicons name='log-out-outline' size={20} color='black' />}
          onPress={() => navigation.navigate('SignIn')}
        />

      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    rowGap: 10
  },
  profileContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center',
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 99
  },
  usernameText: {
    fontWeight: 'bold',
    fontSize: 16
  },
  emailText: {
    color: 'gray'
  }
 
})

