import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

export default function AddBlog() {
  return (
    <View style={styles.page}>
      <View style={styles.headerContainer}>
        <Text>添加一条 Blog</Text>
      </View>
      <View>
        <View style={styles.items}>
          <Text style={styles.tips}>输入博客名</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.items}>
          <Text style={styles.tips}>输入对应的 Github 项目名</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.items}>
          <Text style={styles.tips}>选择一个 tag</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.items}>
          <Text style={styles.tips}>输入博客简介</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'silver',
  },
  headerContainer: {
    height: 100,
    backgroundColor: '#39c5bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 30,
    color: '#fff',
  },
  BlogNameContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  items: {
    backgroundColor: '#fff',
  },
  tips: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
  },
  input: {
    backgroundColor: '#fff',
    marginTop: 10,
    marginLeft: 10,
  },
});