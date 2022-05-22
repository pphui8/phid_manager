import { View, Text, SafeAreaView, ScrollView, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useEffect } from 'react'
import Comment from './Comment'

export default function CommentScreen() {
  const [comments, setComments] = useState([]);
  const [fresh, setFresh] = useState("");
  const getComment = () => {
    fetch(`https://api.pphui8.me/comment`)
      .then(res => res.json())
      .then(res => {
        res.sort((a, b) => b.id - a.id);
        setComments(res);
      })
      .catch(err => ToastAndroid.show("网络错误", ToastAndroid.SHORT));
  }

  useEffect(() => {
      getComment();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      {
        comments.map((item, index) => {
          return (
            <Comment key={index} msg={item} setFresh={setFresh}></Comment>
          )
        })
      }
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
  },
  scrollView: {
    flex: 1,
  },
})