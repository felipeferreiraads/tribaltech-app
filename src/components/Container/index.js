import React from 'react'
import { View, StyleSheet } from 'react-native'

export default function Container (props) {
  return (
    <View
      style={styles.container}
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  }
})