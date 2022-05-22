import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Comment(props) {
  const setFresh = props.setFresh;
  const username = props.msg.username;
  const value = props.msg.value;
  const date = props.msg.date;
  const id = props.msg.id;
  
  const deleteComment = () => {
    fetch(`https://api.pphui8.me/delcomment/${id}/pphui8`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'success') {
          ToastAndroid.show("删除成功", ToastAndroid.SHORT);
          setFresh("");
        }
      }
      )
      .catch(err => ToastAndroid.show("网络错误", ToastAndroid.SHORT));
  }

  return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{flex: 8}}>
            <Text style={styles.username} numberOfLines={1} ellipsizeMode='tail'>{username}:</Text>
          </View>
          <View style={{flex: 1}}>
            <MaterialCommunityIcons name='delete-outline' style={styles.deleteIcon} color='#000' onPress={deleteComment} />
          </View>
        </View>
        <Text style={styles.value}>{value}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    minHeight: 100,
    backgroundColor: '#fff',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  username: {
    fontSize: 25,
    paddingLeft: 10,
    paddingTop: 10,
    color: '#000',
  },
  deleteIcon: {
    fontSize: 25,
    paddingTop: 20,
  },
  value: {
    fontSize: 17,
    padding: 5,
    paddingLeft: 60,
    fontWeight: '100',
    color: '#000',
    marginRight: 10,
  },
  date: {
    fontSize: 13,
    paddingLeft: 10,
    paddingBottom: 10,
    color: '#000',
  },
})
