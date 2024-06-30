import { Pressable, StyleSheet, Text, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function ProfileListItem({
  leadingIcon,
  style,
  text,
  onPress
}: {
  leadingIcon?: any
  style?: object
  text: string
  onPress: () => void
}) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.listItem,
        pressed ? { opacity: 0.5 } : undefined
      ]}
      onPress={onPress}
    >
      {leadingIcon}
      <Text>{text}</Text>
      <View style={{ flex: 1 }}></View>
      <Ionicons name='chevron-forward' size={16} color='black' />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  }
})
