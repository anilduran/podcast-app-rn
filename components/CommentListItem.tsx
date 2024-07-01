import { Image, StyleSheet, Text, View } from 'react-native'

export default function CommentListItem() {
  return (
    <View style={styles.commentContainer}>
      <Image
        source={require('../assets/images/react_native.png')}
        style={styles.commentImage}
      />
      <View style={{ flex: 1 }}>
        <Text style={styles.commentTitle}>Test</Text>
        <Text style={styles.commentText}>Lorem ipsum dolor sit amet.</Text>
      </View>
      <Text style={styles.dateText}>01.07.2024</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  commentImage: {
    width: 50,
    height: 50,
    borderRadius: 999
  },
  commentTitle: {
    fontWeight: 'bold',
    fontSize: 14
  },
  commentText: {
    color: 'gray',
    fontSize: 12
  },
  dateText: {
    color: 'gray',
    fontSize: 10
  }
})
