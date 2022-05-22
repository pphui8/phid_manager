import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default function Blog(props) {
  const title = props.title;
  const description = props.desc;
  return (
    <View style={styles.blog}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText} numberOfLines={1} ellipsizeMode='tail'>
          {title}
        </Text>
      </View>
      <View style={styles.delContainer}>
        <AntDesign name="delete" color='#000' size={30} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  blog: {
      backgroundColor: '#fff',
      height: 65,
      overflow: 'hidden',
      marginVertical: 8,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
      borderColor: '#000',
      borderWidth: 1,
      flexDirection: 'row',
    },
    titleContainer: {
      flex: 3,
      padding: 20,
    },
    titleText: {
      marginLeft: 20,
    },
    delContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 1,
    },
});