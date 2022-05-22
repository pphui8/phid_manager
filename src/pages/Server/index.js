import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Server() {
  return (
    <View style={styles.container}>
      <View style={styles.storageContainer}>
        <View style={styles.activeContainer}>
          <View style={styles.activeIcon} />
          <Text style={styles.storageTitle}>Storage</Text>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  storageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10,
  },
  activeContainer: {
    flexDirection: 'row',
    backgroundColor: '#39c5bb',
  },
  activeIcon: {
  },
})