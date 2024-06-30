import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import ProfileListItem from '../components/ProfileListItem'

export default function ProfileScreen() {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <View style={styles.container}>
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
            <Ionicons name='person-outline' size={20} color='black' />
          }
          onPress={() => navigation.navigate('ChangeEmail')}
        />
        <ProfileListItem
          text='Change Password'
          leadingIcon={
            <Ionicons name='person-outline' size={20} color='black' />
          }
          onPress={() => navigation.navigate('ChangePassword')}
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

 
})

