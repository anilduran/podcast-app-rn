import Ionicons from '@expo/vector-icons/Ionicons'
import { Pressable, StyleSheet } from 'react-native'

export default function IconButton({ children, style, onPress, ...props }: {children: any, style?: object, onPress: () => void}) {
  return (
    <Pressable
      style={({ pressed }) => [style, pressed ? { opacity: 0.5 } : undefined]}
      {...props}
      onPress={onPress}
    >
      {children}
    </Pressable>
  )
}

const styles = StyleSheet.create({})
